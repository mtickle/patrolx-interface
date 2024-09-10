

//--- CUSTOM IMPORTS: CHARTS
import { CallCountsByAgencyBarChart } from './charts/call_counts_by_agency';
import { CallCountsByIncidentBarChart } from './charts/call_counts_by_incident';
import { CallCountsByEmdCodeBarChart } from './charts/call_counts_by_emd_code';
import { CallCountsByHourLineChart } from './charts/call_counts_by_hour';

export const PageDataCharts = () => {
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