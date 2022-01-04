// Lux Framework example password utility
// https://github.com/postlight/lux/blob/master/examples/social-network/app/utils/password.js
import bcrypt from 'bcryptjs';

export function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return reject(err);
      }

      resolve(hash);
    });
  });
}

export function comparePassword(password, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        return reject(err);
      }

      resolve(result);
    });
  });
}