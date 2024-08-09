
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
                Header: "ICAO24",
                id: "",
                accessor: "hex_code",
                Cell: ({ row }) => (<Link className="btn-outline-primary btn-small" to={{
                    pathname: `/adsb/icao24`,
                    search: `?icao24=${row.original.hex_code}`,
                }}>{row.original.hex_code}</Link>)
            },
            {
                Header: "Flight",
                //id: "",
                accessor: "flight",
                // Cell: ({ row }) => (<Link className="btn-outline-primary btn-small" to={{
                //    pathname: `/adsb/flight`,
                //     //search: `?id=${row.original._id}`,
                //     search: `?flight=${row.original.flight}`,
                // }}>{row.original.flight}</Link>)
            },

            {
                Header: 'Cat',
                accessor: 'category',
            },
            {
                Header: 'When',
                accessor: 'flight_time',
            },
            {
                Header: 'Altitude',
                accessor: 'alt_baro',
            },
            {
                Header: 'Ground Speed',
                accessor: 'gs',
            }
        ],
        []
    )
    return columns
}

export const PageDataTable = () => {

    //--- LOAD DATA
    var getAllName = "getAllFlights"
    var tableColumns = TableColumns();
    var tableData = DataEndpoint(getAllName, 100);

    return (
        <>
            <h5>Data Table</h5>
            <PageTable columns={tableColumns} data={tableData} />
        </>
    );
};