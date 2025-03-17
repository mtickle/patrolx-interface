import { Bar } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../../components/data/chart_data_library'
import Chart from 'chart.js/auto';
export const TrafficStopsCountsByDescriptionBarChart = () => {

  var chartActualData = ChartDataLibrary("getTrafficStopDescriptionCounts", 10);

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
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
    },
  };

  return (
    <>
      <h5>Traffic Stop Types</h5>     
      <Bar data={chartData} options={chartOptions} />
    </>
  );
};

