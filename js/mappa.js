var populationMap = L.map('populationMap').setView([54.5260, 15.2551], 4);
mapLink =
    '<a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a>';
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    clickable: true
}).addTo(populationMap);

// Add an SVG element to Leaflet’s overlay pane
var populationSvg = d3.select(populationMap.getPanes().overlayPane).append("svg").attr("pointer-events", "auto"),
    populationG = populationSvg.append("g").attr("class", "leaflet-zoom-hide"); //g-> elemento di html, degli scalable vector graphics che sta ad indicare il gruppo. "leaflet-zoom-hide" classe standard 3d.js
var populationLegend = d3.select("#populationLegend")
    .append("g")
// .style("transform", "translate(0, 15px)")

var populationData = d3.select("#populationData"),
    width = +populationData.attr("width"),
    height = +populationData.attr("height");

var populationDataMap = new Map();
var populationYear = 2000;
var populationRange = []

var populationTip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

let mouseOverPopulation = function (event, d) {
    d3.selectAll(".countryPopulation")
        .transition()
        .duration(200)
        .style("opacity", .3)
    d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", .5)
        .style("stroke", "black")
    populationTip.transition()
        .duration(200)
        .style("opacity", .9);
    populationTip.html(function() {
        return "<strong>" + d.properties.name + "</strong><br/>"
            + "Year: " + populationYear + "<br/>"
            + "Pupulation (Millions): " + d[populationYear]
         
    })
        .style("left", (event.pageX) + "px")
        .style("top", (event.pageY - 28) + "px");
}

let mouseLeavePopulation = function (d) {
    d3.selectAll(".countryPopulation")
        .transition()
        .duration(200)
        .style("opacity", .5)
    d3.select(this)
        .transition()
        .duration(200)
        .style("stroke", "black")
    populationTip.transition()
        .duration(500)
        .style("opacity", 0);
}
var sliderPopulation = d3.select(".sliderPopulation")
    .append("input")
        .attr("class", "vizSliderInput")
        .attr("type", "range")
        .attr("min", 2000)
        .attr("max", 2018)
        .attr("step", 2)
        .on("input", function() {
            var year = this.value;
            updatePopulation(year, mapPopulation);
        });

function updatePopulation(year){
  sliderPopulation.property("value", year);
    d3.select(".populationYear").text("Year: " + year);
    d3.selectAll(".countryPopulation")
        .style("fill", function(d) {
            return colorScalePopulation(d[year])
        });
    populationYear = year;
}

// Use Leaflet to implement a D3 geometric transformation.
function projectPoint(x, y) {
    var point = populationMap.latLngToLayerPoint(new L.LatLng(y, x));
    this.stream.point(point.x, point.y);
}

// Load external data 
var promises = [
    d3.json("../csv/Mappa/world.geojson"),
    d3.csv("../csv/Mappa/wb_eu_new.csv", function (d) {
        if (populationDataMap.get(d.country_code)) {
            populationDataMap.get(d.country_code).push({ "year": +d.year, "population": +d.population })
        } else {
            populationDataMap.set(d.country_code, [{ "year": +d.year, "population": +d.population }])
        }
        populationRange.push(+d.population)
        
    })
]

Promise.all(promises).then(function (data) {
    populationReady(data);
}).catch(function (error) {
    console.log(error);
});

function populationReady(europe) {
    colorScalePopulation = d3.scaleThreshold()
        .domain([0, 10, 20, 30, 50, d3.max(populationRange)]) 
        .range(d3.schemeReds[6]); 

    // Draw the map
    mapPopulation = populationSvg.append("g")
        .selectAll("path")
        .data(europe[0].features)
        .enter()
        .append("path")
        .attr("fill", function (d) {
            if (populationDataMap.get(d.id)) {
                for (let [i, value] of populationDataMap.get(d.id).entries()) {
                    d[value.year] = value.population
                }
            }
        });

    // Legend scale
    var x = d3.scaleLinear()
        .domain([0, d3.max(populationRange)])
        .rangeRound([10, 200]);

    // Legend
    populationLegend.selectAll("rect")
        .data(colorScalePopulation.range().map(function (d) {
            d = colorScalePopulation.invertExtent(d);
            if (d[0] == null) d[0] = x.domain()[0];
            if (d[1] == null) d[1] = x.domain()[1];
            return d;
        }))
        .enter().append("rect")
        .attr("height", 8)
        .attr("x", function (d) { return x(d[0]); })
        .attr("width", function (d) { return x(d[1]) - x(d[0]); })
        .attr("fill", function (d) { return colorScalePopulation(d[0]); });

    populationLegend.append("text")
        .attr("class", "caption")
        .attr("x", x.range()[0])
        .attr("y", -6)
        .attr("fill", "#000")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Population, total (Millions)");

    populationLegend.call(d3.axisBottom(x)
        .tickSize(13)
        .tickFormat(function (x, i) { return Math.round(x) + "%" })
        .tickValues(colorScalePopulation.domain()))
        .select(".domain")
        .remove();

    //  create a d3.geo.path to convert GeoJSON to SVG
    var transformLeaflet = d3.geoTransform({ point: projectPoint }),
        pathLeaflet = d3.geoPath().projection(transformLeaflet);
    // create path elements for each of the features
    d3_features = populationG.selectAll("path")
        .data(europe[0].features)
        .enter().append("path")
        .on("mouseover", mouseOverPopulation)
        .on("mouseleave", mouseLeavePopulation);

    populationMap.on("zoom", resetPopulation);
    resetPopulation();
    // fit the SVG element to leaflet's map layer
    function resetPopulation() {
        bounds = pathLeaflet.bounds(europe[0]);
        var topLeft = bounds[0],
            bottomRight = bounds[1];
        populationSvg.attr("width", bottomRight[0] - topLeft[0])
            .attr("height", bottomRight[1] - topLeft[1])
            .style("left", topLeft[0] + "px")
            .style("top", topLeft[1] + "px");
        populationG.attr("transform", "translate(" + -topLeft[0] + ","
            + -topLeft[1] + ")");
        // initialize the path data	
        d3_features.attr("d", pathLeaflet)
            .attr("class", function (d) { return "countryPopulation" })
            .style("stroke", "black")
            .style("opacity", .5);
        updatePopulation(populationYear);
    }
}

 