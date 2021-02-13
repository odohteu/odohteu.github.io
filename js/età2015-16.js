
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#333';


d3.csv('../csv/2015-16/Età2015-16.csv')
  .then(makeChart)



var ctx = document.getElementById("chart").getContext("2d");


function makeChart(countries) {
var nazioni = countries.map(function (d) {return d.Country});
var dati = countries.map(function (d) {return d["2015-2016 Children"]});



var chart = new Chart('chart', {
    type: "horizontalBar",
  
 
    data: {
      
      labels: nazioni,
      datasets: [
        {
            
          data: dati,

    backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
  'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
  'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
  'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',

        
        
        
        
      
      ]

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

