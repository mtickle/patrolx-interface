
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
    var tableColumns = TableColumns();

    var getAllName = "getAllCalls"
    const { data: tableData, isLoading } = useApiDataEndpoint(getAllName, 100);
    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};