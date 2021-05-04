import { Pool, QueryResult } from 'pg';

interface Database {
  connector: Pool;
  insertRow: (
    tableName: string,
    row: { [key: string]: any }
  ) => Promise<QueryResult<any>> | void;
}

export default Database;
