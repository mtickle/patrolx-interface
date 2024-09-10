
import React from "react";
import { Link } from "react-router-dom";

//--- STANDARD IMPORTS: DATA
import { DataEndpoint } from '../../components/data/adsb_data_endpoint';

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
                Header: "Flight",
                accessor: "Flight",
            },
            {
                Header: "Operator",
                accessor: "operator",
            },
            {
                Header: 'ICAO24',
                accessor: 'HexCode',
            },
            {
                Header: 'Model',
                accessor: 'Model',
            },
            {
                Header: 'Cat',
                accessor: 'category',
            },
            {
                Header: 'Manufacturer',
                accessor: 'manufacturerName',
            },
            {
                Header: "Registration",
                id: "",
                accessor: "registration",

                Cell: ({
                    cell: { value },
                    row: { original } }) => <Link to={`https://registry.faa.gov/AircraftInquiry/Search/NNumberResult?nNumberTxt=${original.registration}`}>{value}</Link>
            },
            {
                Header: 'Count',
                accessor: 'FlightCount',
            }
        ],
        []
    )
    return columns
}

export const UniqueFlightsDataTable = () => {

    //--- LOAD DATA
    var getAllName = "getAllUniqueAircraft"
    var tableColumns = TableColumns();
    var tableData = DataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};