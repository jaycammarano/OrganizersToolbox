import Database from './interface';

class MockDB implements Database {
  connector: string;

  constructor() {
    this.connector = '';
  }

  insertRow = (tableName: string, row: any) => {
    if (tableName && row) {
      return row;
    }
    return { error: 'either tableName or Row unspecified' };
  };

  selectAll = (tableName: string, params: { [key: string]: any }): any => {
    if (tableName && params) {
      return [params];
    }
    return [{ error: 'either tableName or params is unspecified' }];
  };
}

export default MockDB;
