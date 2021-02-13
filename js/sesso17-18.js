





d3.csv('../csv/2017-18/sesso2017-18.csv')
  .then(makeChart)



var ctx = document.getElementById("chart").getContext("2d");


function makeChart(countries) {
var nazioni = countries.map(function (d) {return d. Country});
var Male = countries.map(function (d) {return d["Male N"]});
var Female = countries.map(function (d) {return d["Female N"]});




var chart = new Chart('chart', {
    type: "bar",

  
 
    data: {
      
      labels: nazioni,
      datasets: [
        {
           label : "Male",
          data: Male,

    backgroundColor:  'red'

        },
 
        {
          label : "Female",
          data: Female,

    backgroundColor: 'green',
      




}
    
      ]
    }
  });
}






