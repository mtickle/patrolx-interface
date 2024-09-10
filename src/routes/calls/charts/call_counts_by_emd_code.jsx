import React from "react";

//--- IMPORTS: CHART ELEMENTS
import { Bar } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../../components/data/chart_data_library'

//--- SET THE CHART SCOPE
var chartScope = "getCallCountsByEmdCode";
var chartName = "Calls by EMD Code";

//--- BUILD CHART ELEMENT
export const CallCountsByEmdCodeBarChart = () => {

  var chartActualData = ChartDataLibrary(chartScope, 10);

  const chartData = {
    labels: chartActualData.map(item => item._id),
    datasets: [
      {
        label: { chartScope },
        data: chartActualData.map(item => item.EmdCodeCount),
        backgroundColor: ['#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#ca6702', '#bb3e03', '#ae2012', '#9b2226'],
        borderColor: 'rgba(51, 0, 213, 1)',
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

