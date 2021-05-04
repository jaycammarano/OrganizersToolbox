// import { VerifiedCallback } from 'passport-jwt';
import bcrypt from 'bcryptjs';
import { VerifiedCallback } from 'passport-jwt';
// import { pool } from "../config/config"
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

  findOne = async (id: any, done: VerifiedCallback) => {
    try {
      const user = await this.db.selectAll('users', { id });
      if (user) {
        return done(null, user[0]);
      }
      return done(null, false);
    } catch (err) {
      return done(err, false);
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
}
export default User;
