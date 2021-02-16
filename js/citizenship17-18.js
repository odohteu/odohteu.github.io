





d3.csv('../csv/2017-18/Cittadinanza.csv')
  .then(makeChart)



var ctx = document.getElementById("chart").getContext("2d");


function makeChart(countries) {
var nazioni = countries.map(function (d) {return d.Country});
var OwnCountry = countries.map(function (d) {return d["Own Country N"]});
var OtherCountry = countries.map(function (d) {return d["Other EU Country N"]});
var NonEu = countries.map(function (d) {return d["Non-EU Country N"]});



var chart = new Chart('chart', {
    type: "bar",

  
 
    data: {
      
      labels: nazioni,
      datasets: [
        {
           label : "Own Country N",
          data:OwnCountry ,

    backgroundColor:  'rgb(106, 90, 205)'

        },
 
        {
          label : "Other EU Country N",
          data: OtherCountry,

    backgroundColor:  'rgba(255,140,0)'
      

        },
 {
          label : "Non-EU Country N",
          data: NonEu,

 

        
backgroundColor: 
        'rgba(95,158,160)'
}
    
      ]
    }
  });
}






