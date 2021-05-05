import { NextFunction, Request, Response } from 'express';
import { pool } from '../config/config';
import issueJWT from '../lib/utils';
import User from '../models/User';

const register = async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const newUser = new User(pool);
    const password = await newUser.bcryptPassword(req.body.password);
    const user = await newUser.registerUser(req.body.user_name, password, req.body.first_name, req.body.last_name);
    
    if (user) {
      const jwt = issueJWT(user);

      res.json({
        success: true,
        user,
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

const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<boolean> => {
  try {
    const newUser = new User(pool);
    const user = await newUser.findOne(req.body.user_name);
    if (!user) {
      res.status(401).json({ success: false, msg: 'User not found' });
      return false;
    }

    const isValidPW = newUser.validPassword(
      user.user_password,
      req.body.user_password
    );
    if (isValidPW) {
      const jwt = issueJWT(user.user_name);
      res.json({
        success: true,
        username: user.user_name,
        token: jwt.token,
        expiresIn: jwt.expires
      });
      return true;
    }
    res
      .status(401)
      .json({ success: false, msg: 'Incorrect username or password' });
    return false;
  } catch (error) {
    next(error);
    return false;
  }
};

export { register, login };
