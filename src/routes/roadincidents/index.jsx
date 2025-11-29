

//--- CUSTOM IMPORTS: CHARTS
//import { PageDataCharts } from './charts';

//--- CUSTOM IMPORTS: DATA TABLES
import { PageDataTable } from './table';

//--- CUSTOM IMPORTS: DATA MAP
import { PageDataMap } from './map';

//--- SET PAGE NAME
function PageName() {
  return "Road Incidents"
}

//--- BUILD PAGE
export default function RoadIncidentsPage() {

  //--- return the assembled page
  return (
    <div className="container-xl">
      <h1 className="display-6"><PageName /></h1>

      <div className="card">
        <div className="card-header">
          Map
        </div>
        <div className="card-body">
          <PageDataMap />
        </div>
      </div>

      <p></p>
      <div className="card">
        <div className="card-header">
          Data
        </div>
        <div className="card-body">
          <PageDataTable />
        </div>
      </div>
    </div>
  )
}


