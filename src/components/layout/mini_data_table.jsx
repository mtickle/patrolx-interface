

//-- TABLE
import { useTable, usePagination, useSortBy } from 'react-table'

export default function MiniDataTable(columns, data) {

    const generateUUID = () => {
        let
            d = new Date().getTime(),
            d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
    };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
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
                        const { key, ...mtHeaderGroupProps } = headerGroup.getHeaderGroupProps()
                        return (
                            <tr key={key} {...mtHeaderGroupProps}>
                                {headerGroup.headers.map(column => {
                                    const { key, ...mtColumn } = column.getHeaderProps()
                                    return (
                                        <th className='small' key={key} {...mtColumn}>
                                            {column.render('Header')}
                                        </th>
                                    )
                                })}
                            </tr>
                        )
                    })}

                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((mtRow, i) => {
                        prepareRow(mtRow)
                        return (<tr key={i}>
                            {mtRow.cells.map(mtCell => {
                                const { key, ...mtCellProps } = mtRow.getRowProps()
                                return <td className='small' key={generateUUID()} {...mtCellProps}>
                                    {mtCell.render('Cell')}
                                </td>
                            })}
                        </tr>)
                    })}
                </tbody>
            </table>
            
            {/* <div>
                <button className="btn btn-outline-dark" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button className="btn btn-outline-dark" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button className="btn btn-outline-dark" onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button className="btn btn-outline-dark px-2" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}

                <div className="btn align-baseline">
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </div>
               
               
            </div> */}
        </>
    )


}
