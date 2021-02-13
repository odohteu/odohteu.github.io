





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

    backgroundColor: 'rgba(255, 206, 86, 0.6)'
      

        },
 {
          label : "Non-EU Country N",
          data: NonEu,

 

        
backgroundColor: [
        'rgba(95,158,160)',
        'rgba(138,43,226)',
        'rgba(165,42,42)',
        'rgba(189,183,107)',
        'rgba(255,140,0)',
'rgba(139,0,0)',
        'rgba(218,165,32)',
        'rgba(173,255,47)',
  'rgba(95,158,160)',
        'rgba(138,43,226)',
        'rgba(165,42,42)',
        'rgba(189,183,107)',
        'rgba(255,140,0)',
'rgba(139,0,0)',
        'rgba(218,165,32)',
        'rgba(173,255,47)',
 'rgba(95,158,160)',
        'rgba(138,43,226)',
        'rgba(165,42,42)',
        'rgba(189,183,107)',
        'rgba(255,140,0)',
'rgba(138,43,226)',
        'rgba(165,42,42)',
        'rgba(189,183,107)',
        'rgba(255,140,0)',
         'rgba(189,183,107)',
        'rgba(255,140,0)',
        
]
}
    
      ]
    }
  });
}






