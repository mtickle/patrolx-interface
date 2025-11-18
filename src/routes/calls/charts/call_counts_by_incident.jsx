
//--- IMPORTS: CHART ELEMENTS
import { Bar } from 'react-chartjs-2';
// Adjust the number of '../' until VS Code Intellisense finds the file
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';
//--- SET THE CHART SCOPE
var chartScope = "getCallCountsByIncident";
var chartName = "Call Types";
//--- BUILD CHART ELEMENT
export const CallCountsByIncidentBarChart = () => {

    const { data: chartActualData } = useApiDataEndpoint(chartScope, 10);

    const chartData = {
        labels: chartActualData.map(item => item.item),
        datasets: [
            {
                label: { chartScope },
                data: chartActualData.map(item => item.itemcount),
                backgroundColor: ['#0766D1'],
                borderColor: 'rgba(0, 0, 0, 0.8)',
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
            <h5>{chartName}</h5>
            <Bar data={chartData} options={chartOptions} id={chartScope} />
        </>
    );
};


