
var ctx = document.getElementById("chart").getContext("2d");

d3.csv("../csv/2017-18/età2017-18.csv")
  .then(makeChart)






function makeChart(countries) {
var nazioni = countries.map(function (d) {return d.Country});
var Child = countries.map(function (d) {return d["Child N"]});
var Adult = countries.map(function (d) {return d["Adult N"]});




var chart = new Chart('chart', {
    type: "horizontalBar",

  
 
    data: {
      
      labels: nazioni,
      datasets: [
        {
           label : "Child",
          data:Child ,

    backgroundColor:  'rgb(106, 90, 205)'

        },
 
        {
          label : "Adult",
          data: Adult,

  
    backgroundColor: [
        'rgba(255, 99, 71, 0.8)',
        'rgba(255, 165, 0)',
        'rgba(60, 179, 113)',
        'rgba(238, 130, 238)',
'rgba(255, 99, 71, 0.8)',
        'rgba(255, 165, 0)',
        'rgba(60, 179, 113)',
        'rgba(238, 130, 238)',
'rgba(255, 99, 71, 0.8)',
        'rgba(255, 165, 0)',
        'rgba(60, 179, 113)',
        'rgba(238, 130, 238)',
       'rgba(60, 179, 113)',
        'rgba(238, 130, 238)',
'rgba(255, 99, 71, 0.8)',
        'rgba(255, 165, 0)',
        'rgba(60, 179, 113)',
        'rgba(238, 130, 238)',
           'rgba(238, 130, 238)',
'rgba(255, 99, 71, 0.8)',
        'rgba(255, 165, 0)',
        'rgba(60, 179, 113)',
        'rgba(238, 130, 238)',
       'rgba(60, 179, 113)',
        'rgba(238, 130, 238)',
'rgba(255, 99, 71, 0.8)',
        'rgba(255, 165, 0)',
        'rgba(60, 179, 113)',
        'rgba(238, 130, 238)',
    'rgba(238, 130, 238)',
'rgba(255, 99, 71, 0.8)',
        'rgba(255, 165, 0)',
        'rgba(60, 179, 113)',
        'rgba(238, 130, 238)',
   
 

        
        
        
        
      
      ]

}
    
      ]
    }
  });
}




