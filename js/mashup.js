


anychart.data.loadCsvFile("../csv/Mashup/mash-up.csv", function (data) {
	// create chart from loaded data
csvSettings = {ignoreFirstRow: true, columnsSeparator: ";", rowsSeparator: "*"};
	chart = anychart.pie(data);
	// set title
	chart.title("Education");
	// draw chart
	chart.container("container").draw();
});



/*
var ctx = document.getElementById("chart").getContext("2d");

d3.csv("../csv/Mashup/mash-up.csv")
  .then(makeChart)
function makeChart(countries) {
var nazioni = countries.map(function (d) {return d["(Destination) Country"]});
var Sexual2004 = countries.map(function (d) {return d["Sexual Exploitation 2004"]});
var Sexual2005 = countries.map(function (d) {return d["Sexual Exploitation 2005"]});
var Sexual2006 = countries.map(function (d) {return d["Sexual Exploitation 2006"]});
var Sexual2007 = countries.map(function (d) {return d["Sexual Exploitation 2007"]});

var Sexual2008 = countries.map(function (d) {return d["Sexual Exploitation 2008"]});
var Sexual2010 = countries.map(function (d) {return d["Sexual Exploitation 2010"]});

var Sexual2011 = countries.map(function (d) {return d["Sexual Exploitation 2011"]});
var Sexual2015 = countries.map(function (d) {return d["Sexual Exploitation 2015"]});
var Sexual2016 = countries.map(function (d) {return d["Sexual Exploitation 2016"]});


var Women = countries.map(function (d) {return d["2017-18 Sexual Exploitation Women N"]});
var Boys = countries.map(function (d) {return d["2017-18 Sexual Exploitation Boys N"]});

var Girls = countries.map(function (d) {return d["2017-18 Sexual Exploitation Girls N"]});
var Men = countries.map(function (d) {return d["2017-18 Sexual Exploitation Men N"]});
var Total = countries.map(function (d) {return d["2017-18 Sexual Exploitation Total N"]});

anychart.onDocumentReady(function () {
  // create cartesian chart
  var chart = anychart.cartesian();

  // create first series on the chart
  chart
    .line()
    .data(
      nazioni.mapAs({
        value: 4
      })
    )
    .name('Nazioni');

  // create second series on the chart
  chart
    .line()
    .data(
      Sexual2004.mapAs({
        value: 4
      })
    )
    .name('2004')
    .fill('#1976d2 0.65')
    .stroke('1.5 #1976d2');

  // create third series
  chart
    .line()
    .data(
      Sexual2005.mapAs({
        value: 4
      })
    )
    .name('2005')
    .fill('#ef6c00 0.65')
    .stroke('1.5 #ef6c00');

  // create fourth series
  chart
    .line()
    .data(
      Sexual2006.mapAs({
        value: 4
      })
    )
    .name('2006')
    .fill('#ef6c00 0.65')
    .stroke('1.5 #ef6c00');

  // set chart's starting zoom for X axis
  chart.xZoom().setTo(0.26, 0.7);

  // enable X scroller
  chart.xScroller().enabled(true);

  // set chart's starting zoom for Y axis
  chart.yZoom().setTo(0.1, 0.65);

  // enable Y scroller
  chart.yScroller(true);

  // set scales ticks intervals
  chart.xScale().ticks().interval(10);
  chart.yScale().ticks().interval(1);

  // set chart's padding
  chart.padding(25, 50);

  // set container id for the chart
  chart.container('container');
  // initiate chart drawing
  chart.draw();
});
}
	


/*
var chart = new Chart('chart', {
    type: "Horizontalbar",


 
    data: {
      
      labels: nazioni,
options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    },
      datasets: [
        {
           label : "2004",
          data:Sexual2004 ,

    backgroundColor: 'red'

        },
 
        {
          label : "2005",
          data:Sexual2005,

  
    backgroundColor: 'green',
      
        
},
  {
          label : "2006",
          data:Sexual2006,

  
    backgroundColor: 'black'
        
},
  {
          label : "2007",
          data:Sexual2007,

  
    backgroundColor: 'yellow'
        
},
  {
          label : "2008",
          data:Sexual2008,

  
    backgroundColor: 'grey'
        
},
  {
          label : "2010",
          data:Sexual2010,

  
    backgroundColor: 'pink'
        
},

  {
          label : "2011",
          data:Sexual2011,

  
    backgroundColor: 'blue'
        
},
  {
          label : "2015",
          data:Sexual2015,

  
    backgroundColor: 'orange'
        
},
  {
          label : "2016",
          data:Sexual2016,

  
    backgroundColor: 'rgba(255, 99, 71, 1)'
        
},
{
          label : "Women",
          data:Women,

  
    backgroundColor: 'rgba(255, 99, 71, 1)'
        
},
{
          label : "Men",
          data:Men,

  
    backgroundColor: 'rgba(255, 99, 71, 1)'
        
},
{
          label : "Girls",
          data:Girls,

  
    backgroundColor: 'rgba(255, 99, 71, 1)'
        
},
{
          label : "Boys",
          data:Boys,

  
    backgroundColor: 'rgba(255, 99, 71, 1)'
        
},
{
          label : "Total",
          data:Total,

  
    backgroundColor: 'rgba(255, 99, 71, 1)'
        
}




    
      ]
    }
  });






*/