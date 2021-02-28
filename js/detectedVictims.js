





d3.csv('../csv/Mashup/mash-up.csv')
  .then(makeChart)



var ctx = document.getElementById("chart1").getContext("2d");


function makeChart(countries) {
var nazioni = countries.map(function (d) {return d["(Destination) Country"]});
var Victim2003 = countries.map(function (d) {return d["Total Detected Victims 2003"]});
var Victim2004 = countries.map(function (d) {return d["Total Detected Victims 2004"]});
var Victim2005 = countries.map(function (d) {return d["Total Detected Victims 2005"]});
var Victim2006 = countries.map(function (d) {return d["Total Detected Victims 2006"]});
var Victim2007 = countries.map(function (d) {return d["Total Detected Victims 2007"]});
var Victim2008 = countries.map(function (d) {return d["Total Detected Victims 2008"]});
var Victim2009 = countries.map(function (d) {return d["Total Detected Victims 2009"]});
var Victim2010 = countries.map(function (d) {return d["Total Detected Victims 2010"]});
var Victim2011 = countries.map(function (d) {return d["Total Detected Victims 2011"]});
var Victim2012 = countries.map(function (d) {return d["Total Detected Victims 2012"]});
var Victim2013 = countries.map(function (d) {return d["Total Detected Victims 2013"]});
var Victim2014 = countries.map(function (d) {return d["Total Detected Victims 2014"]});
var Victim2015 = countries.map(function (d) {return d["Total Detected Victims 2015"]});
var Victim2016 = countries.map(function (d) {return d["Total Detected Victims 2016"]});
var Victim2017 = countries.map(function (d) {return d["Total Detected Victims 2017  "]});



var chart = new Chart('chart1', {
    type: "line",
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    },

 
    data: {
      
      labels: nazioni,
      datasets: [
        {
           label : "2003",
          data:Victim2003 ,

    backgroundColor:  'rgba(255, 99, 132, 0.8)'

        },
 
        {
          label : "2004",
          data: Victim2004,

    backgroundColor:  'rgba(255, 206, 86, 0.8)'
      

        },
 {
          label : "2005",
          data: Victim2005,

 

        
backgroundColor: 'rgba(204,44,36,0.8)'
},
{
          label : "2006",
          data: Victim2006,

 

        
backgroundColor: 'rgba(153, 102, 255, 0.8)'
},{
          label : "2007",
          data: Victim2007,

 

        
backgroundColor:  'rgba(75, 192, 192, 0.8)'
},
{
          label : "2008",
          data: Victim2008,

 

        
backgroundColor:   'rgba(127,64,49,0.8)'
},
{
          label : "2009",
          data: Victim2009,

 

        
backgroundColor: 'rgba(0,181,26,0.8)'
},
{
          label : "2010",
          data: Victim2010,

 

        
backgroundColor: 'rgba(188,64,119,0.8)'
},
{
          label : "2011",
          data: Victim2011,

 

        
backgroundColor: 'rgba(107,107,127,0.8)'
},
{
          label : "2012",
          data: Victim2012,

 

        
backgroundColor: 'rgba(0,91,140,0.8)'
}
,{
          label : "2013",
          data: Victim2013,

 

        
backgroundColor: 
        'rgba(226,110,14,0.8)'
}
,{
          label : "2014",
          data: Victim2014,

 

        
backgroundColor: 
      'rgba(0,181,26,0.8)'
},
{
          label : "2015",
          data: Victim2015,

 

        
backgroundColor: 
        'rgba(0,91,140,0.8)'
},
{
          label : "2016",
          data: Victim2016,

 

        
backgroundColor: 
          'rgba(35,127,82,0.8)'
},
{
          label : "2017",
          data: Victim2017,

 

        
backgroundColor: 
         'rgba(54, 162, 235, 0.8)'
}
    
      ]
    }
  });
}






