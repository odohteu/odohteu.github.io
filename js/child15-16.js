





d3.csv('../csv/2015-16/child2015-16.csv')
  .then(makeChart)



var ctx = document.getElementById("chart").getContext("2d");


function makeChart(countries) {
var nazioni = countries.map(function (d) {return d.Country});
var datiMale = countries.map(function (d) {return d["Gender %Male"]});
var datiFemale = countries.map(function (d) {return d["Gender %Female"]});



var chart = new Chart('chart', {
    type: "horizontalBar",
  
 
    data: {
      
      labels: nazioni,
      datasets: [
        {
           label : "male",
          data: datiMale,

    backgroundColor: "red"

        },
 
        {
          label : "female",
          data: datiFemale,

    backgroundColor: "green"

        }

    
      ]
    }
  });
}





/*
var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: {
    labels: ["China", "India", "United States", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"],
    datasets: [{
      label: 'Population',
      data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
  

/*
d3.csv("Europe.csv").then (data => {
        console.log((data))
        .get(function(data,error) {
   
})
/*
var height = 400;
var width = 600;


var maxDate  = d3.max( data, function(d) { return d.date; })
    console.log(maxDate);


/*

const svg = d3.select("#chart-area").append("svg")
    .attr("width",400)
    .attr("height",400)

const circle = svg.selectAll("circle")
    .data(data)

circle.enter().append("circle")
    .attr("cx", (d,i)=> (i * 50) + 50)
    .attr("cy",200)
    .attr("r",(d) => d)
    .attr("fill","red")
*/

