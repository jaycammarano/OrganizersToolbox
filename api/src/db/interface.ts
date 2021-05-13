import { Pool } from 'pg';

export interface IError {
  severity: string;
  error_code: string;
}

interface Database<TData = unknown> {
  connector: Pool | string;
  insertRow: (tableName: string, row: TData) => Promise<TData> | TData;
  selectAll: (
    tableName: string,
    params: { [key: string]: any }
  ) => Promise<TData[]> | TData[];
}

export default Database;
