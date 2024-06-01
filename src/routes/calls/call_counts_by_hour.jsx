import React from "react";

//--- IMPORTS: CHART ELEMENTS
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { ChartDataLibrary } from '../../components/data/chart_data_library'

//--- SET THE CHART SCOPE
var chartScope = "getCallCountsByHour";
var chartName = "Calls by Hour of Day";

//--- BUILD CHART ELEMENT
export const CallCountsByHourLineChart = () => {

    var chartActualData = ChartDataLibrary(chartScope, 25);

    const chartData = {
        labels: chartActualData.map(item => item._id),
        datasets: [
            {
                label: {chartScope},
                data: chartActualData.map(item => item.HourCount),
                borderColor: 'rgba(110, 110, 110, 0.8)',
                borderWidth: 1,
                backgroundColor: [
                    'rgba(64, 122, 255, 0.8)',
                ],
            },
        ]
    }
    const chartOptions = {
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
        },
    };

    return (
        <>
            <h5>{chartName}</h5>
            <Line data={chartData} options={chartOptions} id={chartScope} />
        </>
    );
    };

