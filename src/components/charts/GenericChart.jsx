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
    orientation = 'y' // Defaults to Horizontal bars (Label on Left)
}) => {

    const { data: chartData, isLoading } = useApiDataEndpoint(endpoint, limit);

    console.log(`[${title}] Data:`, chartData);


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

    // --- PARANOID DATA NORMALIZER ---
    const normalizedData = chartData.map(rawItem => {
        // 1. FIND LABEL: Check all known variations
        const rawLabel = rawItem.item || rawItem.itemname || rawItem.agency || "Unknown";

        // 2. FIND VALUE: Check 'itemcount', 'count', or 'value'
        const rawValue = rawItem.itemcount || rawItem.count || rawItem.value;

        // 3. CLEAN VALUE: Remove commas and force to number
        //    "4,689" -> 4689.  "4689" -> 4689.  undefined -> 0.
        const stringValue = String(rawValue || 0).replace(/,/g, '');
        const cleanValue = Number(stringValue);

        return {
            label: processLabel(rawLabel),
            value: isNaN(cleanValue) ? 0 : cleanValue
        };
    });

    // --- DEBUG: UNCOMMENT TO SEE DATA IN CONSOLE ---
    // console.log(`[${title}] Final Data:`, normalizedData);

    const formattedData = {
        labels: normalizedData.map(d => d.label),
        datasets: [
            {
                label: title,
                data: normalizedData.map(d => d.value),
                backgroundColor: '#0766D1',
                borderColor: 'rgba(0, 0, 0, 0.8)',
                borderWidth: 1,
                // IMPORTANT: 'y' = Horizontal Bar, 'x' = Vertical Bar
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
            x: { beginAtZero: true },
            y: { beginAtZero: true }
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