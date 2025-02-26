
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
                Header: 'Date',
                accessor: d => {
                    return moment(d.traffic_dateofstop)
                        .local()
                        .format("YYYY-MM-DD")
                }
            },
            {
                Header: 'Time',
                accessor: 'traffic_timeofstop',
            },
            {
                Header: 'Violation',
                accessor: 'traffic_violationtype',
            },
            {
                Header: 'Description',
                accessor: 'traffic_description',
            }
        ],
        []
    )
    return columns
}

export const PageDataTable = () => {

    //--- LOAD DATA
    var getAllName = "getAllTraffic"
    var tableColumns = TableColumns();
    var tableData = DataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};