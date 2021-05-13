import MockDB from '../../db/mockDB';
import User from '../User';

const mockDB = new MockDB();
const newUser = new User(mockDB);
it('registers a new user', async () => {
  expect(
    await newUser.registerUser('test', 'test', 'test', 'test', 'testbio')
  ).toStrictEqual({"bio": "testbio", "first_name": "test", "last_name": "test", "user_name": "test", "user_password": "test"});
});

it('returns a user', async () => {
  const user = await newUser.findOne('test');
  expect(user).toMatchObject({ user_name: expect.any(String) });
});
