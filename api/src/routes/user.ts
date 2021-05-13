/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router, Request, Response } from 'express';
import { login, register } from '../controllers/user';
import authorizer from '../middleware/authorizer';

const router = Router();

// TODO
router.get('/protected', authorizer, (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    msg: 'You are successfully authenticated to this route!'
  });
});
// TODO
router.post('/login', login);

router.post('/register', register);

export default router;
