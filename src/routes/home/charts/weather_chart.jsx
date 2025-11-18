
//--- IMPORTS: CHART ELEMENTS
import { Line } from 'react-chartjs-2';
//--- SET THE CHART SCOPE
var chartScope = "getAllWeather";
var chartName = "Weather";

//--- BUILD CHART ELEMENT
export const WeatherChart = () => {

    const { data: chartActualData } = useDataEndpoint(chartScope, 25);

    const chartData = {
        labels: chartActualData.map(item => item.itemcount),
        datasets: [
            {
                label: { chartScope },
                data: chartActualData.map(item => item.itemcount),
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

