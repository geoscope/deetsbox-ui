interface DataTableColumn {
    title: string;
    dataType?: string;
    isVisible?: boolean;
}

interface DataTableRow {
    value: string;
}

export interface DataTableProps {
    data: DataTableRow[];
    columns: DataTableColumn[];
}