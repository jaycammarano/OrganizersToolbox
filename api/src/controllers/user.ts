import { Request, Response } from 'express';
import { issueJWT } from '../lib/utils';
import User from '../models/User';

const register = async (req: Request, res: Response) => {
    try {
        const newUser = new User();
        const password = await newUser.bcryptPassword(req.body.password);
        const user = await newUser.registerUser(req.body.user_name, password);
        if(user.severity){
          res.json({ success: false, error: { severity: user.severity, code: user.code } });
          return false
        }
        const jwt = issueJWT(user);
  
        res.json({
          success: true,
          username: user.user_name,
          token: jwt.token,
          expiresIn: jwt.expires
        });
        return true
  
      } catch (error) {
        res.json({ success: false, error });
        return false
      };
}

export default register