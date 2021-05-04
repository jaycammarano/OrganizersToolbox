/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router, Request, Response, NextFunction } from 'express';
import register from '../controllers/user';

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

router.post('/register', register);

export default router;
