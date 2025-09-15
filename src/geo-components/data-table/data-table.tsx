import type { FC } from 'react';
import type { DataTableProps } from './datatable-props';

const DataTable: FC<DataTableProps> = (props: DataTableProps) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {props.columns.map((column, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {column.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.data.map((item, index) => (
                            <td key={index} className="px-6 py-4">
                                {item.value}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
