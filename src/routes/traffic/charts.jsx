import React from "react";

//--- CUSTOM IMPORTS: CHARTS
import { TrafficStopsCountsByDescriptionBarChart } from './charts/trafficstop_counts_by_description';
import { TrafficStopsCountsByMakeBarChart } from './charts/trafficstop_counts_by_make';
import { TrafficStopsCountsByRaceBarChart } from './charts/trafficstop_counts_by_race';
import { TrafficStopsCountsByGenderBarChart } from './charts/trafficstop_counts_by_gender';


export const PageDataCharts = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <TrafficStopsCountsByDescriptionBarChart />
                    </div>
                    <div className="col-md">
                        <TrafficStopsCountsByMakeBarChart />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <TrafficStopsCountsByRaceBarChart />
                    </div>
                    <div className="col-md">
                        <TrafficStopsCountsByGenderBarChart />
                    </div>
                </div>
            </div>
        </>
    )

}