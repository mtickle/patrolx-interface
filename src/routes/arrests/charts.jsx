//--- CUSTOM IMPORTS: CHARTS
import { ArrestCountsByChargeBarChart } from './charts/arrest_counts_by_charge';
import { ArrestCountsByAgencyBarChart } from './charts/arrest_counts_by_agency';
import { ArrestCountsByOfficerBarChart } from './charts/arrest_counts_by_officer';


export const PageDataCharts = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <ArrestCountsByChargeBarChart />
                    </div>
                    <div className="col-md">
                        <ArrestCountsByAgencyBarChart />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <ArrestCountsByOfficerBarChart />
                    </div>
                </div>
            </div>
        </>
    )

}