import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import Spinner from 'react-bootstrap/Spinner';
import { Bar, Line } from 'react-chartjs-2';

// Register components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const GenericChart = ({
    endpoint,
    title,
    type = 'bar',
    limit = 10,
    processLabel = (l) => l,
    orientation = 'y'
}) => {

    const { data: chartData, isLoading } = useApiDataEndpoint(endpoint, limit);



    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center p-5" style={{ minHeight: '200px' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    if (!chartData || chartData.length === 0) {
        return <div className="text-center p-4 text-muted">No data available for {title}</div>;
    }

    // --- THE CLEAN DATA MAPPING ---
    // We trust the API now. It returns 'label' (text) and 'value' (number).
    const formattedData = {
        // Map directly to the 'label' key. We keep processLabel() just in case 
        // you want to do frontend formatting (like capitalizing words).
        labels: chartData.map(d => processLabel(d.label)),

        datasets: [
            {
                label: title,
                // Map directly to the 'value' key. No Number() casting needed.
                data: chartData.map(d => d.value),
                backgroundColor: '#0766D1',
                borderColor: 'rgba(0, 0, 0, 0.8)',
                borderWidth: 1,
                indexAxis: orientation,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { display: false },
            title: { display: false },
        },
        scales: {
            // 🚨 FIX: Ensure the value axis is recognized as linear 🚨
            x: {
                type: 'linear', // Explicitly define X as linear for horizontal bars
                beginAtZero: true
            },
            y: {
                type: 'category', // Explicitly define Y as category for horizontal bars
                beginAtZero: true
            }
        }
    };

    return (
        <div className="mb-4">
            <h5>{title}</h5>
            {type === 'line' ? (
                <Line data={formattedData} options={options} />
            ) : (
                <Bar data={formattedData} options={options} />
            )}
        </div>
    );
};