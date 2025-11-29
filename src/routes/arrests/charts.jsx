//--- IMPORTS
import { GenericChart } from '@/components/charts/GenericChart';
import { ENDPOINTS } from '@/config/apiEndpoints';

export const PageDataCharts = () => {
    return (
        <div className="container">

            {/* ROW 1: Agency & Incident Types */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.CALLS.COUNTS_BY_AGENCY}
                        title="Responding Agency"
                        type="bar"
                        // We can pass that inline function right here!
                        processLabel={(l) => l.replace("Department", "").replace("Dept", "")}
                    />
                </div>
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.CALLS.COUNTS_BY_TYPE}
                        title="Call Types"
                        type="bar"
                    />
                </div>
            </div>

            {/* ROW 2: Days & Hours */}
            <div className="row">
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.CALLS.COUNTS_BY_DAY}
                        title="Calls by Day"
                        type="bar"
                    />
                </div>
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.CALLS.COUNTS_BY_HOUR}
                        title="Calls by Hour"
                        type="line"
                        limit={25} // This chart needed a higher limit
                    />
                </div>
            </div>

        </div>
    );
};