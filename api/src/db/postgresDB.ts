import { Pool } from 'pg';
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
  ): Promise<any> => {
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
    if (newRow.rows[0].severity) {
      const error = new Error(newRow.rows[0].code);
      throw error;
    }
    return newRow.rows[0];
  };

  selectAll = async (
    tableName: string,
    params: { [key: string]: any }
  ): Promise<any[]> => {
    const column = Object.keys(params)[0];
    const value = params.colummn;
    const query = await this.connector.query(
      `SELECT * from ${tableName} WHERE ${column} = $1`,
      [value]
    );
    return query.rows;
  };
}

export default PostgresDB;
