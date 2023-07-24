
import { Chart, ChartOptions, ChartTypeRegistry, GridLineOptions, TooltipItem } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

interface Activity {
    date: string;
    event: JSX.Element;
    time: string;
}

function number_format(number: number, decimals: number, dec_point: string, thousands_sep: string): string {
    number = parseFloat((number + "").replace(",", "").replace(" ", ""));
    var n = !isFinite(number) ? 0 : number,
        prec = !isFinite(decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
        dec = typeof dec_point === "undefined" ? "." : dec_point;

    const toFixedFix = function (n: number, prec: number): string {
        var k = Math.pow(10, prec);
        return "" + Math.round(n * k) / k;
    };

    let s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);

    if ((s[1] || "").length < prec) {
        s[1] = s[1] || "";
        s[1] += new Array(prec - s[1].length + 1).join("0");
    }

    return s.join(dec);
}


const areaChartData = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    datasets: [
        {
            label: "Earnings",
            lineTension: 0.3,
            backgroundColor: "rgba(0, 97, 242, 0.05)",
            borderColor: "rgba(0, 97, 242, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(0, 97, 242, 1)",
            pointBorderColor: "rgba(0, 97, 242, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(0, 97, 242, 1)",
            pointHoverBorderColor: "rgba(0, 97, 242, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [
                0,
                10000,
                5000,
                15000,
                10000,
                20000,
                15000,
                25000,
                20000,
                30000,
                25000,
                40000
            ]
        }
    ]
};





const AreaChart: React.FC = () => {
    return <Line data={areaChartData}  />;
};

export default AreaChart;
