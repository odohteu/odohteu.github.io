const cic = document.getElementById("chart").getContext("2d");

d3.csv("../csv/2015-16/Victim2015-16.csv").then(makeChart);

function makeChart(csvdata) {
    // data is an array of objects where each object represents a country
    const countries = csvdata.map(function (d) {
        return d.Country;
    });
    const dataValue = csvdata.map(function (d) {
        return d['2015-2016'];
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
            legend: {
                display: true,
                labels: {
                    generateLabels: function (chart) {
                        var data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map(function (label, i) {
                                var meta = chart.getDatasetMeta(0);
                                var ds = data.datasets[0];
                                var arc = meta.data[i];
                                var custom = arc & arc.custom || {};
                                var getValueAtIndexOrDefault =
                                    Chart.helpers.getValueAtIndexOrDefault;
                                var arcOpts = chart.options.elements.arc;
                                var fill = custom.backgroundColor
                                    ? custom.backgroundColor
                                    : getValueAtIndexOrDefault(
                                        ds.backgroundColor,
                                        i,
                                        arcOpts.backgroundColor
                                    );
                                var stroke = custom.borderColor
                                    ? custom.borderColor
                                    : getValueAtIndexOrDefault(
                                        ds.borderColor,
                                        i,
                                        arcOpts.borderColor
                                    );
                                var bw = custom.borderWidth
                                    ? custom.borderWidth
                                    : getValueAtIndexOrDefault(
                                        ds.borderWidth,
                                        i,
                                        arcOpts.borderWidth
                                    );

                                // We get the value of the current label
                                var value =
                                    chart.config.data.datasets[arc._datasetIndex].data[
                                        arc._index
                                        ];

                                return {
                                    // Instead of `text: label,`
                                    // We add the value to the string
                                    text: label + ":" + value,
                                    fillStyle: fill,
                                    strokeStyle: stroke,
                                    lineWidth: bw,
                                    hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                                    index: i
                                };
                            });
                        } else {
                            return [];
                        }
                    }
                },
                position: "bottom"
            }
        },
        data: {
            labels: countries,
            datasets: [
                {
                    data: dataValue,
                backgroundColor: [ 
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
'rgba(246,120,40,0.6)',
'rgba(127,64,49,0.6)',
'rgba(204,44,36,0.6)',
 'rgba(26,43,60,0.6)',
 'rgba(35,127,82,0.6)',
'rgba(157,98,43,0.6)',
 'rgba(132,76,130,0.6)',
'rgba(141,73,49,0.6)',
'rgba(107,107,127,0.6)',
'rgba(205,186,136,0.6)',
'rgba (226,144,0,0.6)',
 'rgba(187,30,16,0.6)',
'rgba(0,139,41,0.6)',
'rgba(0,91,140,0.6)',
'rgba(5,139,140,0.6)',
 'rgba(188,64,119,0.6)',
'rgba(185,206,172,.6)',
 'rgba(255,178,0,0.6)',
'rgba(255,42,27,0.6)',
'rgba(226,110,14,0.6)',
'rgba(0,91,140,0.6)',
'rgba(128,100,63,0.6)',
 'rgba(0,181,26,0.6)'











      ] 
                }
            ]
        }
    });
}