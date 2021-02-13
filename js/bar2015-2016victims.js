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
                    backgroundColor: ["black", "grey"]
                }
            ]
        }
    });
}