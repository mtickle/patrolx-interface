import React from "react";

//--- IMPORTS: CHART ELEMENTS
import { Bar } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../../components/data/chart_data_library'
import Chart from 'chart.js/auto';



//--- SET THE CHART SCOPE
var chartScope = "getIncidentCountsByDayOfWeek";
var chartName = "Incidents by Day";

//--- BUILD CHART ELEMENT
export const IncidentCountsByDayBarChart = () => {

  var chartActualData = ChartDataLibrary(chartScope, 8);

  const chartData = {
    labels: chartActualData.map(item => item.itemname),
    datasets: [
      {
        label: { chartScope },
        data: chartActualData.map(item => item.itemcount),
        backgroundColor: ['#0766D1'],
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 1,
        indexAxis: 'y',
      },

    ],
  };

  const chartOptions = {
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

