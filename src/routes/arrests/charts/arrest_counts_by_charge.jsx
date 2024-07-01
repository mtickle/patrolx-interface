import React from "react";
import { Bar } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../../components/data/chart_data_library'

export const ArrestCountsByChargeBarChart = () => {

  var chartActualData = ChartDataLibrary("getArrestChargeCounts", 10);

  const chartData = {
    labels: chartActualData.map(item => item._id),
    datasets: [
      {
        label: 'Incidents',
        data: chartActualData.map(item => item.ItemCount),
        backgroundColor: ['#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#ca6702', '#bb3e03', '#ae2012', '#9b2226'],
        borderColor: 'rgba(110, 110, 110, 0.8)',
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
      <h5>Arrests By Charge</h5>
      <Bar data={chartData} options={chartOptions} />
    </>
  );
};

