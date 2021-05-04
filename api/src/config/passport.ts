import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { PassportStatic } from 'passport';
import User from '../models/User';
import { pool } from './config';

const jwtConfig = {
  secretOrKey: process.env.SECRET_OR_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  jsonWebTokenOptions: {
    maxAge: '1d'
  }
};

const jwtStrat = new JwtStrategy(jwtConfig, (jwt_payload, done) => {
  const newUser = new User(pool);
  const user = newUser.findOne(jwt_payload.sub);
  if (user) {
    return done(null, user);
  }
  return done(null, false);

});

const passportJWT = (passport: PassportStatic) => {
  passport.use(jwtStrat);
};
export default passportJWT;
