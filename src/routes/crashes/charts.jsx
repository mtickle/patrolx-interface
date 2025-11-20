//--- IMPORTS
import { GenericChart } from '@/components/charts/GenericChart';
import { ENDPOINTS } from '@/config/apiEndpoints';

export const PageDataCharts = () => {
    return (
        <div className="container">

            <div className="row mb-4">
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.CRASHES.COUNTS_BY_LOCATION}
                        title="Location"
                        type="bar"
                    />
                </div>
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.CRASHES.COUNTS_BY_TYPE}
                        title="Crash Types"
                        type="bar"
                    />
                </div>
            </div>


        </div>
    );
};