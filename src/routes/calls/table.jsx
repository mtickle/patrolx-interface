
import React from "react";
import { Link } from "react-router-dom";

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
                accessor: 'callDate',
            },
            {
                Header: 'Time',
                accessor: 'callTime',
            },
            {
                Header: 'Responding Agency',
                accessor: 'agency',
            },
            {
                Header: 'Incident',
                accessor: 'incidentType',
            },
            {
                Header: 'Location',
                accessor: 'location',
            },
            {
                Header: "",
                id: "",
                accessor: "_id",
                Cell: ({ row }) => (<Link className="btn-outline-primary btn-small" to={{
                    pathname: `/call`,
                    search: `?id=${row.original._id}`,
                }}>View</Link>)
            }
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