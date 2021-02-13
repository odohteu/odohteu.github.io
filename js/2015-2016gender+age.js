const cic = document.getElementById("chart").getContext("2d");

d3.csv("../csv/2015-16/genere+eta2015-16.csv").then(makeChart);

function makeChart(csvdata) {
    // data is an array of objects where each object represents a country
    const countries = csvdata.map(function (d) {
        return d.Country;
    });
    const womenValue = csvdata.map(function (d) {
        return d['2015-2016 women %'];
    });
    const girlsValue = csvdata.map(function (d) {
        return d['2015-2016 girls %'];
    });
    const menValue = csvdata.map(function (d) {
        return d['2015-2016 % men'];
    });
    const boysValue = csvdata.map(function (d) {
        return d['2015-2016 boys %'];
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
                    label: "women",
                    data: womenValue,
                    backgroundColor: "green"
                },
                {
                    label: "girls",
                    data: girlsValue,
                    backgroundColor: "red"
                },
                {
                    label: "men",
                    data: menValue,
                    backgroundColor: "blue"
                },
                {
                    label: "boys",
                    data: boysValue,
                    backgroundColor: "yellow"
                }
            ]
        }
    });
}