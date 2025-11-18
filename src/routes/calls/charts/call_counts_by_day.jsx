//--- IMPORTS: CHART ELEMENTS
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// If the file is in src/components/hooks/
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';

//--- REGISTER COMPONENTS (Crucial Step!)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//--- SET THE CHART SCOPE
const chartScope = "getCallCountsByDayOfWeek";
const chartName = "Calls by Day";

//--- BUILD CHART ELEMENT
export const CallCountsByDayBarChart = () => {

  // 1. Destructure isLoading
  const { data: chartActualData, isLoading } = useApiDataEndpoint(chartScope, 10);

  // 2. GUARD CLAUSE: If loading OR no data, return early.
  //    This prevents the 'map' crash below.
  if (isLoading || !chartActualData) {
    return <div className="text-center p-4">Loading Chart...</div>;
  }

  const chartData = {
    labels: chartActualData.map(item => item.itemname),
    datasets: [
      {
        label: chartName,
        data: chartActualData.map(item => item.itemcount),
        backgroundColor: ['#0766D1'],
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 1,
        indexAxis: 'y',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'right',
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