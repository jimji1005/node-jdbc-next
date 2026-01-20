export interface IResultSetMetaData {
    getColumnCountSync(): number;
    getColumnNameSync(columnIndex: number): string;
    getColumnLabelSync(columnIndex: number): string;
    getColumnTypeSync(columnIndex: number): number;
}
export type IColumnType = {
    index: number;
    name: string;
};
export type IColumnMetaData = {
    columnIndex: number;
    name: string;
    label: string;
    type: IColumnType;
};
export declare class ResultSetMetaData {
    private resultSetMetaData;
    private types;
    private holdabilities;
    constructor(resultSetMetaData: IResultSetMetaData);
    getColumnCount(): number;
    getColumnName(columnIndex: number): string;
    getColumnLabel(columnIndex: number): string;
    getColumnType(columnIndex: number): IColumnType;
    getTypeName(typeIndex: number): string;
    getAllColumnMeta(): IColumnMetaData[];
}
