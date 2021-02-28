





d3.csv('../csv/Mashup/mash-up.csv')
  .then(makeChart)



var ctx = document.getElementById("chart").getContext("2d");


function makeChart(countries) {
var nazioni = countries.map(function (d) {return d["(Destination) Country"]});
var Women = countries.map(function (d) {return d["2017-18 Removal of organs Women N"]});
var Boys = countries.map(function (d) {return d["2017-18 Removal of organs Boys N"]});
var Girls = countries.map(function (d) {return d["2017-18 Removal of organs Girls N"]});
var Men = countries.map(function (d) {return d["2017-18 Removal of organs Men N"]});
var Total = countries.map(function (d) {return d["2017-18 Removal of organs Total N"]});


var chart = new Chart('chart', {
    type: "bar",

  
 
    data: {
      
      labels: nazioni,
      datasets: [
        {
           label : "Women",
          data:Women ,

    backgroundColor:  'rgb(106, 90, 205)'

        },
 
        {
          label : "Boys",
          data: Boys,

    backgroundColor:  'rgba(255,140,0)'
      

        },
 {
          label : "Girls",
          data: Girls,

 

        
backgroundColor: 
        'rgba(95,158,160)'
},
 {
          label : "Men",
          data: Men,

 

        
backgroundColor: 
        'rgba(95,158,160)'
}
    
      ]
    }
  });
}






