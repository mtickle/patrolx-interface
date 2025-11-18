
import moment from "moment";
import React from "react";
import { Badge } from "react-bootstrap";

//--- STANDARD IMPORTS: DATA
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';

//-- STANDARD IMPORTS: TABLE
import DataTable from '../../components/layout/data_table';

//--- BUILD TABLE
function PageTable({ columns, data }) {
  return DataTable(columns, data)
}

//--- ADD THE BADGES FOR SEVERITY
const getBadgeVariant = (severity) => {
  switch (severity) {
    case 1:
      return 'danger';
    case 2:
      return 'warning';
    case 3:
      return 'success';
    default:
      return 'secondary';
  }
};


//--- BUILD TABLE COLUMNS
function TableColumns() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Sev',
        accessor: 'severity',
        Cell: ({ value }) => (
          <Badge bg={getBadgeVariant(value)}>
            {value}
          </Badge>
        ),
      },
      {
        Header: 'Starts',
        accessor: d => {
          return moment(d.start_time)
            .local()
            .format("YYYY-MM-DD")
        }
      },
      {
        Header: 'Ends',
        accessor: d => {
          return moment(d.end_time)
            .local()
            .format("YYYY-MM-DD")
        }
      },
      {
        Header: 'Condition',
        accessor: 'condition',
      },
      {
        Header: 'Description',
        accessor: 'incident_type',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
    ],
    []
  )
  return columns
}
export const PageDataTable = () => {

  //--- LOAD DATA
  var getAllName = "getAllRoadIncidents"
  var tableColumns = TableColumns();
  const { data: tableData } = useApiDataEndpoint(getAllName, 100);

  return (
    <>
      <h5>Data Table</h5>
      <PageTable columns={tableColumns} data={tableData} />
    </>
  );
};