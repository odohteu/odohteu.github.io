



Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#333';


d3.csv('../csv/2015-16/cittadinanza_non_UE2015-16.csv')
  .then(makeChart)



var ctx = document.getElementById("chart").getContext("2d");


function makeChart(countries) {
var nazioni = countries.map(function (d) {return d["Non-Eu Member States"]});
var BE = countries.map(function (d) {return d["BE"]});
var BG = countries.map(function (d) {return d["BG"]});
var CZ = countries.map(function (d) {return d["CZ"]});
var DK = countries.map(function (d) {return d["DK"]});
var DE = countries.map(function (d) {return d["DE"]});
var EE = countries.map(function (d) {return d["EE"]});
var IE = countries.map(function (d) {return d["IE"]});
var GR = countries.map(function (d) {return d["GR"]});
var ES = countries.map(function (d) {return d["ES"]});
var FR = countries.map(function (d) {return d["FR"]});
var HR = countries.map(function (d) {return d["HR"]});
var IT = countries.map(function (d) {return d["IT"]});
var CY = countries.map(function (d) {return d["CY"]});
var LV = countries.map(function (d) {return d["LV"]});
var LT = countries.map(function (d) {return d["LT"]});
var LU = countries.map(function (d) {return d["LU"]});
var HU = countries.map(function (d) {return d["HU"]});
var MT = countries.map(function (d) {return d["MT"]});
var NL = countries.map(function (d) {return d["NL"]});
var AT = countries.map(function (d) {return d["AT"]});
var PL = countries.map(function (d) {return d["PL"]});
var PT = countries.map(function (d) {return d["PT"]});
var RO = countries.map(function (d) {return d["RO"]});
var SI = countries.map(function (d) {return d["SI"]});
var SK = countries.map(function (d) {return d["SK"]});
var FI = countries.map(function (d) {return d["FI"]});
var SE = countries.map(function (d) {return d["SE"]});
var UK = countries.map(function (d) {return d["UK"]});






var chart = new Chart('chart', {
    type: "pie",
  
 
    data: {
      
      labels: nazioni,

      datasets: [
        {
           label : "BE",
          data: BE,

    backgroundColor: "red"

        },
 
        {
          label : "BG",
          data: BG,

    backgroundColor: "green"

        },
  {
           label : "CZ",
          data: CZ,

    backgroundColor: "yellow"

        },
 
        {
          label : "DK",
          data: DK,

    backgroundColor: "grey"

        },
{
          label : "DE",
          data: DE,

    backgroundColor: "aero"

        },
  {
           label : "EE",
          data: EE,

    backgroundColor: "blick red"

        },
 
        {
          label : "IE",
          data: IE,

    backgroundColor: "blue"

        },
 {
          label : "GR",
          data: GR,

    backgroundColor: "Brown sugar"

        },
 {
          label : "ES",
          data:ES,

    backgroundColor: "Byzantium"

        },
 {
          label : "FR",
          data: FR,

    backgroundColor: "Calypso"

        },
 {
          label : "HR",
          data: HR,

    backgroundColor: "pink"

        },
 {
          label : "IT",
          data: IT,

    backgroundColor: "red"

        },
 {
          label : "CY",
          data: CY,

    backgroundColor: "orange"

        },
 {
          label : "LV",
          data: LV,

    backgroundColor: "yellow"

        },
 {
          label : "LT",
          data: LT,

    backgroundColor: "light blue"

        },
 {
          label : "LU",
          data: LU,

    backgroundColor: "black"

        },
 {
          label : "HU",
          data: HU,

    backgroundColor: "blue"

        },
 {
          label : "MT",
          data: MT,

    backgroundColor: "orange"

        },
{
          label : "NL",
          data: NL,

    backgroundColor: "green"

        },
 {
          label : "AT",
          data: AT,

    backgroundColor: "blue"

        },
 {
          label : "PL",
          data: PL,

    backgroundColor: "red"

        },
{
          label : "PT",
          data: PT,

    backgroundColor: "yellow"

        },
 {
          label : "RO",
          data: RO,

    backgroundColor: "green"

        },
 {
          label : "SI",
          data: SI,

    backgroundColor: "violet"

        },
{
          label : "SK",
          data: SK,

    backgroundColor: "pink"

        },
 {
          label : "FI",
          data: FI,

    backgroundColor: "beige"

        },
 {
          label : "SE",
          data: SE,

    backgroundColor: "light blue"

        },
 {
          label : "UK",
          data: UK,

    backgroundColor: "green"

 }


    
      ]
    }
  });
}





/*
var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: {
    labels: ["China", "India", "United States", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"],
    datasets: [{
      label: 'Population',
      data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
  

/*
d3.csv("Europe.csv").then (data => {
        console.log((data))
        .get(function(data,error) {
   
})
/*
var height = 400;
var width = 600;


var maxDate  = d3.max( data, function(d) { return d.date; })
    console.log(maxDate);


/*

const svg = d3.select("#chart-area").append("svg")
    .attr("width",400)
    .attr("height",400)

const circle = svg.selectAll("circle")
    .data(data)

circle.enter().append("circle")
    .attr("cx", (d,i)=> (i * 50) + 50)
    .attr("cy",200)
    .attr("r",(d) => d)
    .attr("fill","red")
*/

