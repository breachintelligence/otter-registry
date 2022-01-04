import { Controller } from 'lux-framework';

import User from 'app/models/user';
import crypto from 'crypto';

class UsersController extends Controller {
  params = [
    'name',
    'email',
    'password'
  ];

  async login(req) {
    const {
      params: {
        data: {
          attributes: {
            email,
            password
          }
        }
      }
    } = req;

    const authenticated = await User.authenticate(email, password);
    if( authenticated ){
        const token = crypto.createHash('md5').update(email+Math.random()).digest('hex');
        req.session = { email, token };

        return {
          data: {
            token,
            email
          }
        };
    }

    return false;
  }
}

export default UsersController;
