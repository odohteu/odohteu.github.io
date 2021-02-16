const cic = document.getElementById("chart").getContext("2d");

d3.csv("../csv/2015-16/Età2015-16.csv").then(makeChart);

function makeChart(csvdata) {
    // data is an array of objects where each object represents a country
    const countries = csvdata.map(function (d) {
        return d.Country;
    });
    const childrenValue = csvdata.map(function (d) {
        return d['2015-2016 Children'];
    });
    const adultValue = csvdata.map(function (d) {
        return d['2015-2016 Adults'];
    });


    new Chart(cic, {
        type: "bar",
        options: {
            scales: { 
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        },
        data: {
            labels: countries,

            datasets: [
                {
                    label: "Number of Children",
                    data: childrenValue,
    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
                {
                    label: "Number of Adults",
                    data: adultValue,
 backgroundColor: 'rgba(255, 206, 86, 0.6)',
                }
            ]
        }
    });
}