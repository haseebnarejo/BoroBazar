import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';

const MyTable = () => {
    // Sample Data
    const data = React.useMemo(
        () => [
            { orderNumber: '8631', orderDate: '3 years ago', status: 'Delivered', deliveryTime: '25 May, 2021', totalPrice: '$867.00' },
            { orderNumber: '8631', orderDate: '3 years ago', status: 'Delivered', deliveryTime: '25 May, 2021', totalPrice: '$867.00' },
            { orderNumber: '4000', orderDate: '3 years ago', status: 'Delivered', deliveryTime: '25 May, 2021', totalPrice: '$867.00' },
            { orderNumber: '8631', orderDate: '3 years ago', status: 'Delivered', deliveryTime: '25 May, 2021', totalPrice: '$867.00' },
            { orderNumber: '8631', orderDate: '3 years ago', status: 'Delivered', deliveryTime: '25 May, 2021', totalPrice: '$867.00' },
            { orderNumber: '8631', orderDate: '3 years ago', status: 'Delivered', deliveryTime: '25 May, 2021', totalPrice: '$867.00' },
            { orderNumber: '8631', orderDate: '3 years ago', status: 'Delivered', deliveryTime: '25 May, 2021', totalPrice: '$867.00' },
            { orderNumber: '8631', orderDate: '3 years ag   o', status: 'Delivered', deliveryTime: '25 May, 2021', totalPrice: '$867.00' },
        ],
        []
    );

    // Define Columns
    const columns = React.useMemo(
        () => [
            { Header: 'Order Number', accessor: 'orderNumber' },
            { Header: 'Order Date', accessor: 'orderDate' },
            { Header: 'Status', accessor: 'status' },
            { Header: 'Delivery Time', accessor: 'deliveryTime' },
            { Header: 'Total Price', accessor: 'totalPrice' },
        ],
        []
    );

    // Create table instance
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        page,
        nextPage,
        previousPage,
        setPageSize,
        gotoPage,
        pageCount,
    } = useTable(
        { columns, data, initialState: { pageSize: 5 } },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <div>
            {/* Search Filter */}
            <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-4'>
                <h3 className='font-bold text-2xl xxl:text-4xl'>
                    My Order List
                </h3>
                <form>
                    <div className='relative'>
                        <input
                            type="search"
                            value={globalFilter || ''}
                            onChange={(e) => setGlobalFilter(e.target.value)}
                            className="mt-2 w-full text-sm p-3 border border-gray-300 rounded-md h-[48px] focus:outline-none focus:ring-1 focus:ring-[#02b290]"
                            placeholder='Seacch order list'
                        />
                        <Icon icon="material-symbols-light:search" width="30" height="30" className="absolute right-2 top-4 text-gray-600" />
                    </div>
                </form>
            </div>

            <div className='overflow-auto'>
                <table {...getTableProps()} className="min-w-full border-collapse whitespace-nowrap">
                    <thead className="bg-gray-100">
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="px-4 py-3 text-left  text-sm border-b text-[#00000080] font-semibold border-gray-300"
                                    >
                                        {column.render('Header')}
                                        {/* Sorting Indicator */}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="bg-white">
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                                    {row.cells.map((cell) => (
                                        <td
                                            {...cell.getCellProps()}
                                            className="px-4 py-3 border-b text-sm border-gray-300"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className="px-2 py-1 text-white theme-btn rounded-md disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageCount}
                    </strong>
                </span>
                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="px-2 py-1 text-white theme-btn rounded-md disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            {/* Page Size */}
            <div className="mt-4">
                <label>
                    Show{' '}
                    <select
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                        className="border rounded-md"
                    >
                        {[5, 10, 20].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>{' '}
                    rows
                </label>
            </div>
        </div>
    );
};

export default MyTable;
