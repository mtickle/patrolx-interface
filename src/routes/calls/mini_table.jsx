import moment from "moment";
import React from "react";
import Spinner from 'react-bootstrap/Spinner';

//--- STANDARD IMPORTS
import { ENDPOINTS } from '@/config/apiEndpoints';
import { useApiDataEndpoint } from "@/hooks/useApiDataEndpoint";
import MiniDataTable from '../../components/layout/mini_data_table';

export const CallsMiniTable = () => {

    // 1. FETCH DATA
    const { data: tableData, isLoading } = useApiDataEndpoint(ENDPOINTS.CALLS.GET_ALL, 100);

    // 2. DEFINE COLUMNS (Directly inside the component)
    // React.useMemo is required here so the table doesn't re-render on every keystroke.
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
        [] // Dependency array (empty = create once)
    );

    // 3. LOADING STATE
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center p-5">
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    // 4. ERROR/EMPTY CHECK
    if (!tableData) return null;

    // 5. RENDER (Using proper JSX syntax)
    return (
        <MiniDataTable columns={columns} data={tableData} />
    );
};