import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';
import { Line } from 'react-chartjs-2';


export const IncidentsCountsByHourLineChart = () => {

    const { data: chartActualData } = useApiDataEndpoint("getIncidentCountsByHour", 25);

    const chartData = {
        labels: chartActualData.map(item => item.item),
        datasets: [
            {
                label: 'Incidents',
                data: chartActualData.map(item => item.itemcount),
                borderColor: 'rgba(110, 110, 110, 0.8)',
                borderWidth: 1,
                backgroundColor: ['#0766D1'],
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
            <h5>Incidents by Hour</h5>
            <Line data={chartData} options={chartOptions} />
        </>
    );
};

