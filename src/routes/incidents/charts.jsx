
//--- CUSTOM IMPORTS: CHARTS
import { IncidentCountsByTypeBarChart } from './charts/incident_counts_by_type';
import { IncidentCountsByDistrictBarChart } from './charts/incident_counts_by_district';
import { IncidentsCountsByHourLineChart } from './charts/incident_counts_by_hour';
import { IncidentsCountsByDayLineChart } from './charts/incident_counts_by_day';

export const PageDataCharts = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <IncidentCountsByTypeBarChart />
                    </div>
                    <div className="col-md">
                        <IncidentCountsByDistrictBarChart />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <IncidentsCountsByHourLineChart />
                    </div>
                    <div className="col-md">
                        <IncidentsCountsByDayLineChart />
                    </div>
                </div>
            </div>
        </>
    )

}