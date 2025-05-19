
import React from "react";
import { Link } from "react-router-dom";
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
                id: "callDate",
                Header: 'Date',
                accessor: d => {
                    return moment(d.call_date)
                        .local()
                        .format("YYYY-MM-DD")
                }
            },
            {
                Header: 'Time',
                accessor: 'call_time',
            },
            {
                Header: 'Responding Agency',
                accessor: 'call_agency',
            },
            {
                Header: 'Incident',
                accessor: 'call_type',
            },
            {
                Header: 'Location',
                accessor: 'call_address',
            },
        ],
        []
    )

    return columns
}

export const PageDataTable = () => {

    //--- LOAD DATA
    var getAllName = "getAllCalls"
    var tableColumns = TableColumns();
    var tableData = DataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};