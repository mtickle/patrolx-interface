//--- IMPORTS
import { GenericChart } from '@/components/charts/GenericChart';
import { ENDPOINTS } from '@/config/apiEndpoints';

export const PageDataCharts = () => {
    return (
        <div className="container">

            <div className="row mb-4">
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.TRAFFIC.COUNTS_BY_DESCRIPTION}
                        title="Descriptions"
                        type="bar"
                    />
                </div>
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.TRAFFIC.COUNTS_BY_GENDER}
                        title="Genders"
                        type="bar"
                    />
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.TRAFFIC.COUNTS_BY_MAKE}
                        title="Stops by Make"
                        type="bar"
                    />
                </div>
                <div className="col-md-6">
                    <GenericChart
                        endpoint={ENDPOINTS.TRAFFIC.COUNTS_BY_RACE}
                        title="Stops by Race"
                        type="line"
                        limit={25} // This chart needed a higher limit
                    />
                </div>
            </div>

        </div>
    );
};