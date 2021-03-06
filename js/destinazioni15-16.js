





d3.csv('../csv/2015-16/Destinazioni2015-16.csv')
  .then(makeChart)



var ctx = document.getElementById("chart").getContext("2d");


function makeChart(countries) {
var nazioni = countries.map(function (d) {return d["Destination Country"]});
var Female2015 = countries.map(function (d) {return d["2015 % Female"]});
var Female2016 = countries.map(function (d) {return d["2016 % Female"]});
var NonsiSa = countries.map(function (d) {return d["2015-2016 N Known"]});



var chart = new Chart('chart', {
    type: "bar",

  
 
    data: {
      
      labels: nazioni,
      datasets: [
        {
           label : "2015 Female",
          data: Female2015,

    backgroundColor:  'rgba(75, 192, 192, 0.6)'

        },
 
        {
          label : "2016 Female",
          data: Female2016,

    backgroundColor:   'rgba(255, 99, 132, 0.6)'

      

        },
 {
          label : "N Known",
          data: NonsiSa,

 

        
backgroundColor:  'rgba(54, 162, 235, 0.6)'
        
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

