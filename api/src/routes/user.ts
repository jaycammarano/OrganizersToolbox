/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router, Request, Response, NextFunction } from 'express';
import {login, register} from '../controllers/user';

const router = Router();

// TODO
router.get(
  '/protected',
  (_req: Request, _res: Response, _next: NextFunction) => {}
);

// TODO
router.post('/login',login);

router.post('/register', register);

export default router;
