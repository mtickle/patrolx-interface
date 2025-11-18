
import moment from "moment";
import React from "react";

//--- STANDARD IMPORTS: DATA
import { useDataEndpoint } from "../../hooks/olduseDataEndpoint";

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
                    return moment(d.incident_date)
                        .local()
                        .format("YYYY-MM-DD")
                }
            },
            {
                Header: 'Time',
                accessor: 'incident_time',
            },
            {
                Header: 'Crime Code',
                accessor: 'incident_crimecode',
            },
            {
                Header: 'Description',
                accessor: 'incident_type',
            },
            {
                Header: 'District',
                accessor: 'incident_district',
            },
            // {
            //     Header: "",
            //     id: "",
            //     accessor: "_id",
            //     Cell: ({ row }) => (<Link className="btn-outline-primary btn-small" to={{
            //         pathname: `/incident`,
            //         search: `?id=${row.original.callid}`,
            //     }}>View</Link>)
            // }
        ],
        []
    )
    return columns
}
export const PageDataTable = () => {

    //--- LOAD DATA
    var getAllName = "getAllIncidents"
    var tableColumns = TableColumns();
    const { data: tableData } = useDataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};