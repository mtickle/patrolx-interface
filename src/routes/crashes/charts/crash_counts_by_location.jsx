import { Bar } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../../components/data/chart_data_library'
import Chart from 'chart.js/auto';
export const CrashCountsByLocationBarChart = () => {

    var chartActualData = ChartDataLibrary("getCrashLocationCounts", 10);

    const chartData = {
        labels: chartActualData.map(item => item.itemname),
        datasets: [
            {
                label: 'Crash Counts',
                data: chartActualData.map(item => item.itemcount),
                backgroundColor: ['#0766D1'],
                borderColor: 'rgba(110, 110, 110, 0.8)',
                borderWidth: 1,
                indexAxis: 'y',

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
            <h5>Crash Locations</h5>
            <Bar data={chartData} options={chartOptions} />
        </>
    );
};

