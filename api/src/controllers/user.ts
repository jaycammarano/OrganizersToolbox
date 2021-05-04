import { Request, Response } from 'express';
import { pool } from '../config/config';
import { issueJWT } from '../lib/utils';
import User from '../models/User';

const register = async (req: Request, res: Response) => {
  try {
    const newUser = new User(pool);
    const password = await newUser.bcryptPassword(req.body.password);
    const user = await newUser.registerUser(req.body.user_name, password);

    if (typeof user === 'string') {
      const jwt = issueJWT(user);

      res.json({
        success: true,
        username: user,
        token: jwt.token,
        expiresIn: jwt.expires
      });
      return true;
    }
    res.json({
      success: false,
      error: { user }
    });
    return false;
  } catch (error) {
    res.json({ success: false, error });
    return false;
  }
};

export default register;
