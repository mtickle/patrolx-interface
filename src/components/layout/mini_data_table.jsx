//-- TABLE
import { usePagination, useSortBy, useTable } from 'react-table';

// 1. FIX: Destructure props with curly braces { columns, data }
export default function MiniDataTable({ columns, data }) {

    // 2. DELETED: generateUUID function (It causes performance issues in keys)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        // Unused pagination props kept for future use
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        useSortBy,
        usePagination,
    )

    return (
        <>
            <table {...getTableProps()} className="table table-striped">
                <thead>
                    {headerGroups.map(headerGroup => {
                        // 3. FIX: Extract key correctly from getHeaderGroupProps
                        const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                        return (
                            <tr key={key} {...restHeaderGroupProps}>
                                {headerGroup.headers.map(column => {
                                    const { key, ...restColumnProps } = column.getHeaderProps();
                                    return (
                                        <th className='small' key={key} {...restColumnProps}>
                                            {column.render('Header')}
                                        </th>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        // 4. FIX: Add row.getRowProps() to the <tr>
                        // (Contains the key and logic for row selection)
                        const { key, ...restRowProps } = row.getRowProps();

                        return (
                            <tr key={key} {...restRowProps}>
                                {row.cells.map(cell => {
                                    // 5. FIX: Use cell.getCellProps() for the key
                                    // Do NOT use UUIDs here.
                                    const { key, ...restCellProps } = cell.getCellProps();

                                    return (
                                        <td className='small' key={key} {...restCellProps}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}