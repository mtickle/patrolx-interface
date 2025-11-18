
import moment from "moment";
import React from "react";

//--- STANDARD IMPORTS: DATA
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';
//import { useDataEndpoint } from "../../hooks/data_endpoint";
//import { useDataEndpoint } from "../../hooks/data_endpoint";

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
    const { data: tableData } = useApiDataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};