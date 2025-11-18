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

// --- REGISTER EVERYTHING ONCE ---
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
    endpoint,           // The API string (e.g. ENDPOINTS.CALLS.GET_ALL)
    title,              // "Calls by Hour"
    type = 'bar',       // 'bar' or 'line'
    limit = 10,         // How many items to fetch
    labelKey = 'item',  // Which field contains the label? ('item' or 'itemname')
    processLabel = (l) => l, // Optional function to clean up labels
    orientation = 'y'   // 'y' for horizontal bars, 'x' for vertical
}) => {

    // 1. The Hook
    const { data: chartData, isLoading } = useApiDataEndpoint(endpoint, limit);

    // 2. Guard Clause
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

    // 3. Prepare Data
    const formattedData = {
        labels: chartData.map(item => processLabel(item[labelKey])),
        datasets: [
            {
                label: title,
                data: chartData.map(item => item.itemcount),
                backgroundColor: '#0766D1',
                borderColor: 'rgba(0, 0, 0, 0.8)',
                borderWidth: 1,
                // For horizontal bars
                indexAxis: orientation,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false },
        },
        // Make sure we start at 0
        scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true }
        }
    };

    // 4. Render the correct type
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