





d3.csv('../csv/Mashup/mash-up.csv')
  .then(makeChart)



var ctx = document.getElementById("chart").getContext("2d");


function makeChart(countries) {
var nazioni = countries.map(function (d) {return d["(Destination) Country"]});
var Health = countries.map(function (d) {return d["Net migration,SM.POP.NETM,Thousands (0) YR2000"]});
var Health1 = countries.map(function (d) {return d["Net migration,SM.POP.NETM,Thousands (0) YR2010"]});
var Health2 = countries.map(function (d) {return d["Net migration,SM.POP.NETM,Thousands (0) YR2018"]});



var chart = new Chart('chart', {
    type: "bar",

  
 
    data: {
      
      labels: nazioni,
      datasets: [
        {
           label : "2000",
          data:Health ,

    backgroundColor:  '#e52b50'

        },
  {
           label : "2010",
          data:Health1 ,

    backgroundColor:  '#1ad4af'

        },
  {
           label : "2018",
          data:Health2 ,

    backgroundColor:  '#ffd1dc'

        }
      ]
    }
  });
}






