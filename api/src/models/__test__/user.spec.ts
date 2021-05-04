import MockDB from '../../db/mockDB';
import User from '../User';

const mockDB = new MockDB();
const newUser = new User(mockDB);
it('registers a new user', async () => {
  expect(await newUser.registerUser('test', 'test')).toBe('test');
});

it('returns a user', async () => {
  const user = await newUser.findOne('test')
  expect(user).toMatchObject({user_name: expect.any(String),})
})