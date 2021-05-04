import MockDB from '../../db/mockDB';
import User from '../User';

const mockDB = new MockDB()
it('registers a new user', async () => {
  const newUser = new User(mockDB);
  expect(await newUser.registerUser('test', 'test')).toBe('test');
});
