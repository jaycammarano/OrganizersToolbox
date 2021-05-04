import { Pool, QueryResult } from 'pg';
import Database from './interface';

class PostgresDB implements Database {
  connector: Pool;

  constructor(connectionString: string) {
    if (connectionString === '') {
      const error = new Error('connectionString must be defined');
      throw error;
    }
    this.connector = new Pool({
      connectionString
    });
  }

  insertRow = async (
    tableName: string,
    row: { [key: string]: any }
  ): Promise<QueryResult<any>> => {
    const columns = Object.keys(row).filter((key) => key !== 'id');
    let i: number = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const valueMap = columns.map((_key) => {
      i += 1;
      return `$${i}`;
    });
    const values = columns.map((key) => row[key]);
    const newRow = await this.connector.query(
      `INSERT INTO ${tableName} (${columns}) VALUES (${valueMap}) RETURNING *`,
      values
    );
    return newRow.rows[0];
  };
}

export default PostgresDB;
