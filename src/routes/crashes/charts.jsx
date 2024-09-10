//--- CUSTOM IMPORTS: CHARTS
import { CrashCountsByTypeBarChart } from './charts/crash_counts_by_type';
import { CrashCountsByLocationBarChart } from './charts/crash_counts_by_location';


export const PageDataCharts = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <CrashCountsByTypeBarChart />
                    </div>
                    <div className="col-md">
                        <CrashCountsByLocationBarChart />
                    </div>
                </div>
            </div>
        </>
    )

}