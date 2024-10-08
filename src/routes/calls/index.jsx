 

//--- CUSTOM IMPORTS: CHARTS
import { PageDataCharts } from './charts';

//--- CUSTOM IMPORTS: DATA TABLES
import { PageDataTable } from './table';

//--- CUSTOM IMPORTS: DATA MAP
import { PageDataMap } from './map';

//--- SET PAGE NAME
function PageName() {
  return "Calls"
}

//--- BUILD PAGE
export default function CallsPage() {

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
          <PageDataCharts />
        </div>
      </div>

      <p></p>

      <div className="card">
        <div className="card-header">
          Maps
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


