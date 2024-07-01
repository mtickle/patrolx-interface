
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
                Header: 'Date',
                accessor: 'dateOfArrest',
            },
            {
                Header: 'Time',
                accessor: 'timeOfArrest',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Charge',
                accessor: 'charge',
            },
            {
                Header: 'Agency',
                accessor: 'arrestingAgency',
            },
            {
                Header: "",
                id: "",
                accessor: "_id",
                Cell: ({ row }) => (<Link className="btn-outline-primary btn-small" to={{
                    pathname: `/arrest`,
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
    var getAllName = "getAllCcbiArrests"
    var tableColumns = TableColumns();
    var tableData = DataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};