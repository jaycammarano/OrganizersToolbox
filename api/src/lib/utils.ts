import jsonwebtoken from 'jsonwebtoken';
import { SECRET } from '../config/config';
/**
 * -------------- HELPER FUNCTIONS ----------------
 */

/**
 * @param {*} user - The user object.  We need this to set the JWT `sub` payload property to the MongoDB user ID
 */
function issueJWT(user: any) {
  const { id } = user;

  const expiresIn = '1d';

  const payload = {
    sub: id,
    iat: Date.now()
  };

  const signedToken = jsonwebtoken.sign(payload, SECRET, {
    expiresIn
  });

  return {
    token: `Bearer ${signedToken}`,
    expires: expiresIn
  };
}

export default issueJWT
