// su mobile il grafico non mantiene le proporzioni 900x250 ma prende l'altezza di #canvas
if (window.matchMedia("(max-width: 768px)").matches) {
  Chart.defaults.global.maintainAspectRatio = false;
}







d3.csv('../csv/2017-18/vittime2017-18.csv')
  .then(makeChart)



var ctx = document.getElementById("chart").getContext("2d");


function makeChart(countries) {
var nazioni = countries.map(function (d) {return d.Country});
var anno1 = countries.map(function (d) {return d["2017"]});
var anno2 = countries.map(function (d) {return d["2018"]});
var mix = countries.map(function (d) {return d["2017-2018"]});



var chart = new Chart('chart', {
    type: "bar",
  
 
    data: {
      
      labels: nazioni,
      datasets: [
        {
           label : "2017",
          data: anno1,

    backgroundColor: '	rgb(0, 191, 255,0.8)'

        },
 
        {
          label : "2018",
          data: anno2,

    backgroundColor: 	'rgb(255, 128, 0,0.8)'

        },
   {
           label : "2017-2018",
          data: mix,

    backgroundColor: 	'rgba(255, 0, 64,0.8)'

        }
 
       

    
      ]
    }
  });
}





