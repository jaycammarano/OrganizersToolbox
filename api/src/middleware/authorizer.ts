import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET } from '../config/config';

export const verifyJWT = (token: string) => verify(token, SECRET);

const authorizer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('token');
  if (!token) {
    res.status(403).send('Not Authorized');
  }else{
    try {
      const payload: Object = verifyJWT(token);
      if (payload) {
        req.user = payload;
      }
      next();
    } catch (err) {
      console.error(err.message);
      res.status(403).send('Not Authorized');
      next();
    }
  }
};

export default authorizer