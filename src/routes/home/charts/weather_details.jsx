// Standardize the hook import path
import { useApiDataEndpoint } from "@/hooks/useApiDataEndpoint";
import Spinner from 'react-bootstrap/Spinner';
// Removed: Line, ChartDataLibrary, chart.js/auto

//--- SET THE CHART SCOPE
const chartScope = "getCurrentWeather";
const chartName = "Current Weather";


//--- BUILD CHART ELEMENT
export const WeatherDetails = () => {

    // Use the standardized hook pattern with a limit of 1
    const { data: weatherData, isLoading } = useApiDataEndpoint(chartScope, 1);

    // --- Guard Clause: Loading State ---
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center p-1">
                <Spinner animation="border" size="sm" variant="info" />
            </div>
        );
    }

    // --- Guard Clause: Data Check ---
    if (!weatherData || weatherData.length === 0) {
        return <p className="text-muted">Weather data unavailable.</p>;
    }

    // Safely access the temperature from the first element
    const currentTemp = weatherData[0]?.temperature;

    return (
        <div className="weather-details">
            {/* Renders the temperature, removing the commented code */}
            <p className="lead fw-bold mb-0">{currentTemp}°F</p>
            <p className="text-muted small mb-0">{chartName}</p>
        </div>
    );
};