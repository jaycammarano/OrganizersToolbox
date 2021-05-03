/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router, Request, Response, NextFunction } from 'express';
import { issueJWT } from '../lib/utils';
import User from '../models/User';

const router = Router();

// TODO
router.get(
  '/protected',
  (_req: Request, _res: Response, _next: NextFunction) => {}
);

// TODO
router.post(
  '/login',
  (_req: Request, _res: Response, _next: NextFunction) => {}
);

// TODO
router.post(
  '/register',
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const newUser = new User();
      const password = await newUser.bcryptPassword(req.body.password);
      const user = await newUser.registerUser(req.body.user_name, password);
      const jwt = issueJWT(user);

      res.json({
        success: true,
        user,
        token: jwt.token,
        expiresIn: jwt.expires
      });
    } catch (error) {
      res.json({ success: false, error });
    }
  }
);

export default router;
