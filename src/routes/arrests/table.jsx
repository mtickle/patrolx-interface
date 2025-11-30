
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
                Header: 'Date',
                accessor: 'dateOfArrest',
            },
            {
                Header: 'Time',
                accessor: 'time_of_arrest',
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
            // {
            //     Header: 'Location',
            //     accessor: 'arrestLocation',
            // },
            // {
            //     Header: "",
            //     id: "",
            //     accessor: "_id",
            //     Cell: ({ row }) => (<Link className="btn-outline-primary btn-small" to={{
            //         pathname: `/arrest`,
            //         search: `?id=${row.original._id}`,
            //     }}>View</Link>)
            // }
        ],
        []
    )
    return columns
}

export const PageDataTable = () => {

    //--- LOAD DATA
    var getAllName = "getAllArrests"
    var tableColumns = TableColumns();
    const { data: tableData } = useApiDataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};