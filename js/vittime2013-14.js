// su mobile il grafico non mantiene le proporzioni 900x250 ma prende l'altezza di #canvas
if (window.matchMedia("(max-width: 768px)").matches) {
  Chart.defaults.global.maintainAspectRatio = false;
}

const cic = document.getElementById("chart");

d3.csv("../csv/2013-14/victims-age-gender2013-14-correct.csv").then(makeChart);

function makeChart(data) {
    const forms = data.map(function (d) {
        return d["majority and gender"];
    });
    const dataValue = data.map(function (d) {
        return parseFloat(d.percentage);
    });

    new Chart(cic, {
        type: "pie",
        options: {
            tooltips: {
                mode: 'label',
                callbacks: {
                    label: function(tooltipItem, dataValue) {
                        return dataValue['datasets'][0]['data'][tooltipItem['index']] + '%';
                    }
                }
            },
            responsive: true,
            legend: {
                position: "top"
            },
            title: {
                display: true,
               
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        },
        data: {
            labels: forms,
            datasets: [
                {
                    data: dataValue,
                    backgroundColor: ["#FF1F35", "#f3c12c", "#8f00ff", "#01796f"]
                }
            ]
        }
    });

}