//--- IMPORTS: CHART ELEMENTS
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';
import { Bar } from 'react-chartjs-2';

//--- SET THE CHART SCOPE
var chartScope = "getCallCountsByAgency";
var chartName = "Responding Agency";

//--- BUILD CHART ELEMENT
export const CallCountsByAgencyBarChart = () => {

  const { data: chartActualData } = useApiDataEndpoint(chartScope, 10);

  const chartData = {

    labels: chartActualData.map(item => item.item.replace("Department", "").replace("Dept", "")),

    datasets: [
      {
        label: { chartScope },
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
      <h5>{chartName}</h5>
      <Bar data={chartData} options={chartOptions} id={chartScope} />
    </>
  );
};

