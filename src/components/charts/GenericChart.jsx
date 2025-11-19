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

// --- CUSTOM IMPORTS ---
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint';

// Register components ONCE
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

    //--- Fetch the data from the API
    const { data: chartData, isLoading } = useApiDataEndpoint(endpoint, limit);

    //--- Guard clause
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

    // --- FINAL RENDER CONFIGURATION ---

    // Determine axis settings
    const isHorizontalBar = (type === 'bar' && orientation === 'y');
    const indexAxis = isHorizontalBar ? 'y' : 'x'; // 'y' for horizontal bars, 'x' for vertical/line charts

    const formattedData = {

        labels: chartData.map(d => processLabel(d.label)),

        datasets: [
            {
                label: title,
                data: chartData.map(d => d.value),
                backgroundColor: '#0766D1',
                borderColor: 'rgba(0, 0, 0, 0.8)',
                borderWidth: 1,
                indexAxis: indexAxis, // Applied dynamically
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