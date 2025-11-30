//--- IMPORTS
import { GenericChart } from '@/components/charts/GenericChart';
import { ENDPOINTS } from '@/config/apiEndpoints';

export const PageDataCharts = () => {
    return (
        <div className="container">

            {/* COUNTS_BY_AGE: "getArrestAgeCounts",
        COUNTS_BY_AGENCY: "getArrestAgencyCounts",
        COUNTS_BY_CHARGE: "getArrestChargeCounts",
        COUNTS_BY_OFFICER: "getArrestOfficerCounts" */}

            <div className="row mb-4">
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.ARRESTS.COUNTS_BY_AGE}
                        title="Arrests by Age"
                        type="bar"

                    />
                </div>
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.ARRESTS.COUNTS_BY_AGENCY}
                        title="Arrests by Agency"
                        type="bar"
                    />
                </div>
            </div>

            {/* ROW 2: Days & Hours */}
            <div className="row">
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.ARRESTS.COUNTS_BY_CHARGE}
                        title="By Charge"
                        type="bar"
                    />
                </div>
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.ARRESTS.COUNTS_BY_OFFICER}
                        title="By Officer"
                        type="bar"
                        limit={25} // This chart needed a higher limit
                    />
                </div>
            </div>

        </div>
    );
};