import { VerifiedCallback } from 'passport-jwt';
import bcrypt from 'bcryptjs';
import pool from '../config/db';

class User {
  bcryptPassword = async (password: string) => {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    return bcrypt.hash(password, salt);
  };

  findOne = async (id: any, done: VerifiedCallback) => {
    try {
      const user = await pool.query('SELECT * from users WHERE user_id = $1', [
        id
      ]);
      if (user) {
        return done(null, user.rows[0]);
      }
      return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  };

  registerUser = async (username: string, password: string) => {
    try {
      const user = await pool.query(
        'INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *',
        [username, password]
      );
      if(!user.rows[0].severity){
        return user.rows[0];
      }
      return user.rows[0].name
    } catch (err) {
      return err;
    }
  };
}
export default User;
