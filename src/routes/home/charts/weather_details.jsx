import React from "react";

//--- IMPORTS: CHART ELEMENTS
import { Line } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../../components/data/chart_data_library'
import { DataSingleEndpoint } from "../../../components/data/data_single_endpoint";
import Chart from 'chart.js/auto';
//--- SET THE CHART SCOPE
var chartScope = "getCurrentWeather";
var chartName = "Current Weather";


//--- BUILD CHART ELEMENT
export const WeatherDetails = () => {

    var chartActualData = DataSingleEndpoint(chartScope);
    console.log(chartActualData)
   
    return (
        <>
            {/* <p>{chartActualData[0]['temperature']}°F</p> */}
        </>
    );
};

