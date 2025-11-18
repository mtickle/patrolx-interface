import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';
import { Bar } from 'react-chartjs-2';

export const TrafficStopsCountsByGenderBarChart = () => {

  const { data: chartActualData } = useApiDataEndpoint("getTrafficStopGenderCounts", 10);

  const chartData = {
    labels: chartActualData.map(item => item.itemname),
    datasets: [
      {
        label: 'Incidents',
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
      <h5>Genders</h5>
      <Bar data={chartData} options={chartOptions} />
    </>
  );
};

