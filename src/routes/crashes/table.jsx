
import React from "react";

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
                accessor: 'dateOfCrash',
            },
            {
                Header: 'Time',
                accessor: 'timeOfCrash',
            },
            {
                Header: 'Road Name',
                accessor: 'locationRoadName',
            },
            {
                Header: 'Cross Street',
                accessor: 'locationRoadNameAt',
            },
            {
                Header: 'Crash Event',
                accessor: 'mostHarmfulEvent',
            }
        ],
        []
    )
    return columns
}

export const PageDataTable = () => {

    //--- LOAD DATA
    var getAllName = "getAllCrashLocations"
    var tableColumns = TableColumns();
    var tableData = DataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};