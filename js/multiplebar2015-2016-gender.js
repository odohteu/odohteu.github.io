const cic = document.getElementById("chart").getContext("2d");

d3.csv("../csv/2015-16/genere2015-16.csv").then(makeChart);

function makeChart(csvdata) {
    // data is an array of objects where each object represents a country
    const countries = csvdata.map(function (d) {
        return d.Country;
    });
    const femaleValue = csvdata.map(function (d) {
        return d['2015-2016 female'];
    });
    const maleValue = csvdata.map(function (d) {
        return d['2015-2016 male'];
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
            },
            legendCallback: function(chart) {
                var text = [];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span style="background-color:' +
                        chart.data.datasets[i].backgroundColor +
                        '"></span>');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join('');
            }
        },
        data: {
            labels: countries,
            datasets: [
                {
                    label: "female",
                    data: femaleValue,
                    backgroundColor:  'rgba(187,30,16,0.6)'
                },
                {
                    label: "male",
                    data: maleValue,
                    backgroundColor:  'rgba(255,178,0,0.6)'
                }
            ]
        }
    });
}