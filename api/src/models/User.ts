// import { VerifiedCallback } from 'passport-jwt';
import bcrypt from 'bcryptjs';
// import { pool } from "../config/config"
import Database from '../db/interface';

class User {
  db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  bcryptPassword = async (password: string) => {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    return bcrypt.hash(password, salt);
  };

  // findOne = async (id: any, done: VerifiedCallback) => {
  //   try {
  //     const user = await pool.query('SELECT * from users WHERE user_id = $1', [
  //       id
  //     ]);
  //     if (user) {
  //       return done(null, user.rows[0]);
  //     }
  //     return done(null, false);
  //   } catch (err) {
  //     return done(err, false);
  //   }
  // };

  registerUser = async (username: string, password: string) => {
    const rows = { user_name: username, user_password: password };
    try {
      const user = await this.db.insertRow('users', rows);
      if (user.severity) {
        return user;
      }
      return user.user_name;
    } catch (err) {
      return err;
    }
  };
}
export default User;
