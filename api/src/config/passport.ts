import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { PassportStatic } from 'passport';
import User from '../models/User';

const jwtConfig = {
  secretOrKey: process.env.SECRET_OR_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  jsonWebTokenOptions: {
    maxAge: '1d'
  }
};

const jwtStrat = new JwtStrategy(jwtConfig, (jwt_payload, done) => {
  const user = new User();
  return user.findOne(jwt_payload.sub, done);
});

const passportJWT = (passport: PassportStatic) => {
  passport.use(jwtStrat);
};
export default passportJWT;