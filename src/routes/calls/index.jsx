import React, { useRef } from 'react';


//--- CUSTOM IMPORTS: CHARTS
import { CallCountsByAgencyBarChart } from './call_counts_by_agency';
import { CallCountsByIncidentBarChart } from './call_counts_by_incident';
import { CallCountsByEmdCodeBarChart } from './call_counts_by_emd_code';
import { CallCountsByHourLineChart } from './call_counts_by_hour';

//--- CUSTOM IMPORTS: DATA TABLES
import { CallDataTable } from './call_table';

//--- CUSTOM IMPORTS: DATA MAP
import { CallsMap } from './call_map';

//--- SET PAGE NAME
function PageName() {
  return "Calls"
}

//--- BUILD CHARTS
function PageCharts() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <CallCountsByAgencyBarChart />
          </div>
          <div className="col-md">
            <CallCountsByIncidentBarChart />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <CallCountsByEmdCodeBarChart />
          </div>
          <div className="col-md">
            <CallCountsByHourLineChart />
          </div>
        </div>
      </div>
    </>
  )
}

//--- BUILD PAGE
export default function CallsPage() {

  console.log("page loading ...")

  //--- return the assembled page
  return (
    <div className="container-xl">
      <h1 className="display-6"><PageName /></h1>

      <p></p>
      <div className="card">
        <div className="card-header">
          Charts
        </div>
        <div className="card-body">
          <PageCharts />
        </div>
      </div>

      <p></p>

      <div className="card">
        <div className="card-header">
          Maps
        </div>
        <div className="card-body">
          <CallsMap />
        </div>
      </div>

      <p></p>

      <div className="card">
        <div className="card-header">
          Data
        </div>
        <div className="card-body">
          <CallDataTable />
        </div>
      </div>
    </div>
  )
}


