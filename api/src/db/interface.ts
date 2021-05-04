import { Pool } from 'pg';

export interface IError {
  severity: string;
  error_code: string;
}

type MockRow = {
  [key: string]: any;
};

interface Database<TData = unknown> {
  connector: Pool | string;
  insertRow: (tableName: string, row: MockRow) => Promise<TData> | MockRow;
  selectAll: (
    tableName: string,
    params: MockRow
  ) => Promise<TData[]> | MockRow[];
}

export default Database;
