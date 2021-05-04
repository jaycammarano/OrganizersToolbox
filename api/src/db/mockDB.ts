import Database from './interface';

class MockDB implements Database {
  connector: string;

  constructor() {
    this.connector = '';
  }

  insertRow = (
    tableName: string,
    row: { [key: string]: any }
  ): { [key: string]: any } => {
    if (tableName && row) {
      return row;
    }
    return { error: 'either tableName or Row unspecified' };
  };

  selectAll = (
    tableName: string,
    params: { [key: string]: any }
  ): [{ [key: string]: any }] => {
    if (tableName && params) {
      return [{}];
    }
    return [{ error: 'either tableName or params is unspecified' }];
  };
}

export default MockDB;
