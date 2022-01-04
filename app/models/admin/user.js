// Lux Framework example user model 
// https://github.com/postlight/lux/blob/master/examples/social-network/app/models/user.js
import { Model } from 'lux-framework';
import { hashPassword, comparePassword } from 'app/utils/password';

class User extends Model {

  static hooks = {
    async beforeSave(user) {
      if (user.isNew || user.dirtyAttributes.has('password')) {
        user.password = await hashPassword(user.password);
      }
    }
  };

  static scopes = {
    findByEmail(email) {
      return this.first().where({
        email
      });
    }
  };

  static validates = {
    name: v => /^[\w'-]{2,32}(( [\w'-]{1,32})? [\w'-]{2,32})?$/.test(v) && v.length > 0 && v.length < 255,
    email: v => /^[\w\.@-]{2,254}$/.test(v),
    password(password = '') {
      return password.length >= 8 && password.length < 100;
    }
  };

  static async authenticate(email, password) {
    const user = await this.findByEmail(email);

    if (user) {
      const isAuthenticated = await comparePassword(password, user.password);
      return isAuthenticated && user;
    }
  }
}

export default User;
