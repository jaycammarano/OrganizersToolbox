import bcrypt from 'bcryptjs';
import Database from '../db/interface';
import IUser from './interface';

class User<Type extends Database<IUser>> {
  db: Type;

  constructor(db: Type) {
    this.db = db;
  }

  bcryptPassword = async (password: string) => {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    return bcrypt.hash(password, salt);
  };

  findOne = async (user_name: any): Promise<IUser> => {
    try {
      const users = await this.db.selectAll('users', { user_name });
      return users[0]
    } catch (err) {
      return err
    }
  };

  registerUser = async (
    username: string,
    password: string
  ): Promise<string | Error> => {
    const rows = { user_name: username, user_password: password };
    try {
      const user = await this.db.insertRow('users', rows);
      return user.user_name;
    } catch (err) {
      return new Error(err);
    }
  };

  validPassword = async (
    dbPassword: string,
    clientPassword: string
  ) => bcrypt.compare(clientPassword, dbPassword);

}
export default User;
