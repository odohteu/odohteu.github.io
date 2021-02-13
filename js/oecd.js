
d3.csv('../csv/OECD/EOCD-EUcontries-wellbeing.csv')
  .then(makeChart)





var ctx = document.getElementById("chart").getContext("2d");


function makeChart(countries)


 {

var Cittadinanza = countries.map(function (d) {return d.Country});
var Safety = countries.map(function (d) {return d.Safety});
var Health = countries.map(function (d) {return d.Health});
var Service = countries.map(function (d) {return d["Accessiblity to services"]});





var chart = new Chart('chart', {
    type: "bar",

    options: {
        options: {
        animation: true
    }
    },

 
    data: {
      
      labels:Cittadinanza ,

      datasets: [
        {
           label : "Safety",
          data: Safety,

    backgroundColor: "rgba(225,0,0,0.5)"

        },

        {
           label :" Health",
          data: Health,

    backgroundColor: "rgba(102,255,0,0.6)"

        },
 {
           label :" Service",
          data: Service,

    backgroundColor: "rgba(102,51,255,0.2)"

        }
    
      ]
    }
  });
}






