





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

    backgroundColor:  'rgba(132,76,130,0.6)'

        },
 
        {
          label : "female",
          data: datiFemale,

    backgroundColor: 'rgba(54, 162, 235, 0.6)'

        }

    
      ]
    }
  });
}