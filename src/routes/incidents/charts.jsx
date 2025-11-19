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
                        endpoint={ENDPOINTS.INCIDENTS.COUNTS_BY_DISTRICT}
                        title="Districts"
                        type="bar"
                        // We can pass that inline function right here!
                        processLabel={(l) => l.replace("Department", "").replace("Dept", "")}
                    />
                </div>
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.INCIDENTS.COUNTS_BY_TYPE}
                        title="Incident Types"
                        type="bar"
                    />
                </div>
            </div>

            {/* ROW 2: Days & Hours */}
            <div className="row">
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.INCIDENTS.COUNTS_BY_DAY}
                        title="Incidents by Day"
                        type="bar"
                    />
                </div>
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.INCIDENTS.COUNTS_BY_HOUR}
                        title="Incidents by Hour"
                        type="line"
                        limit={25} // This chart needed a higher limit
                    />
                </div>
            </div>

        </div>
    );
};