import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../../components/data/chart_data_library'
import Chart from 'chart.js/auto';

export const ArrestCountsByAgeBarChart = () => {

  var chartActualData = ChartDataLibrary("getArrestAgeCounts", 30);

  const chartData = {
    labels: chartActualData.map(item => item._id),
    datasets: [
      {
        label: 'Incidents',
        data: chartActualData.map(item => item.ageCount),
        backgroundColor: ['#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#ca6702', '#bb3e03', '#ae2012', '#9b2226'],
        borderColor: 'rgba(110, 110, 110, 0.8)',
        borderWidth: 1,
        
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
      <h5>Arrests By Age</h5>
      <Line data={chartData} options={chartOptions} />
    </>
  );
};

