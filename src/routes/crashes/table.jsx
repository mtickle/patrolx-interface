
import moment from "moment";
import React from "react";

//--- STANDARD IMPORTS: DATA
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';


//-- STANDARD IMPORTS: TABLE
import DataTable from '../../components/layout/data_table';

//--- BUILD TABLE
function PageTable({ columns, data }) {
    return DataTable(columns, data)
}

//--- BUILD TABLE COLUMNS
function TableColumns() {

    const columns = React.useMemo(
        () => [
            {
                id: "crashDate",
                Header: 'Date',
                accessor: d => {
                    return moment(d.crash_date)
                        .local()
                        .format("YYYY-MM-DD")
                }
            },
            {
                Header: 'Time',
                accessor: 'crash_time',
            },
            {
                Header: 'Road Name',
                accessor: 'crash_locationroadname',
            },
            {
                Header: 'City',
                accessor: 'crash_locationcity',
            },
            {
                Header: 'Crash Event',
                accessor: 'crash_mostharmfulevent',
            },
            {
                Header: 'Drivers',
                accessor: 'crash_drivers',
            }
        ],
        []
    )
    return columns
}

export const PageDataTable = () => {

    //--- LOAD DATA
    var getAllName = "getAllCrashes"
    var tableColumns = TableColumns();
    const { data: tableData } = useApiDataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};