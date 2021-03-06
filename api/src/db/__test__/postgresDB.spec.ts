import { config } from 'dotenv';
import PostgresDB from '../postgresDB';

config();

const connectionString = process.env.DATABASE_URL || '';

const db = new PostgresDB(connectionString);
it('inserts a row to a testDB', async () => {
  const rows = { user_name: 'test', user_password: 'testpassword' };
  expect(await db.insertRow('users', rows)).toMatchObject({
    user_id: expect.any(String),
    user_name: expect.any(String),
    user_password: expect.any(String)
  });
});

it('returns all selected rows from a  db', async () => {
  const rows = await db.selectAll('users', {user_name: 'test'})
  expect(rows[0]).toMatchObject({
    user_id: expect.any(String),
    user_name: expect.any(String),
    user_password: expect.any(String)
  });
})
