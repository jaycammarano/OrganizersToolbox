import { Pool } from 'pg';

interface Database {
  connector: Pool | string;
  insertRow: (
    tableName: string,
    row: { [key: string]: any }
  ) => Promise<any> | { [key: string]: any; };
}

export default Database;
