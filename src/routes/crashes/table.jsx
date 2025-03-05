
import React from "react";
import moment from "moment";

//--- STANDARD IMPORTS: DATA
import { DataEndpoint } from '../../components/data/data_endpoint';

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
                Header: 'Crash Event',
                accessor: 'crash_mostharmfulevent',
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
    var tableData = DataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};