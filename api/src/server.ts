import express, { json, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import config, { SERVER_NAMESPACE } from './config/config';
import logging from './config/logging';
import router from './routes/user';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  logging.info(
    `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`,
    SERVER_NAMESPACE
  );

  next();
});

/** Middleware */
app.use(json());
app.use(cors());

/** Routes go here */
app.use('/users', router);

app.listen(config.server.port, () => {
  logging.info(
    SERVER_NAMESPACE,
    `Server is running ${config.server.hostname}:${config.server.port}`
  );
});
