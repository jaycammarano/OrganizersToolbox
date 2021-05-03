import crypto from 'crypto';
import jsonwebtoken from 'jsonwebtoken';
import { SECRET } from '../config/config';
/**
 * -------------- HELPER FUNCTIONS ----------------
 */

/**
 *
 * @param {*} password - The plain text password
 * @param {*} hash - The hash stored in the database
 * @param {*} salt - The salt stored in the database
 *
 * This function uses the crypto library to decrypt the hash using the salt and then compares
 * the decrypted hash/salt with the password that the user provided at login
 */
function validPassword(
  password: crypto.BinaryLike,
  hash: string,
  salt: crypto.BinaryLike
) {
  const hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');
  return hash === hashVerify;
}

/**
 * @param {*} user - The user object.  We need this to set the JWT `sub` payload property to the MongoDB user ID
 */
function issueJWT(user: { id: any }) {
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

export { issueJWT, validPassword };
