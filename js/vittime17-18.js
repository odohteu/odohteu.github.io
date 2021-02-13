





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

    backgroundColor: "pink"

        },
 
        {
          label : "2018",
          data: anno2,

    backgroundColor: "blue"

        },
   {
           label : "2017-2018",
          data: mix,

    backgroundColor: "red"

        }
 
       

    
      ]
    }
  });
}





