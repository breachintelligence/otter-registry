import { Controller } from 'lux-framework';
import { isAuthenticated } from '../utils/isAuthenticated';

class HabitatsController extends Controller {
  beforeAction = [
    isAuthenticated
  ];

  query = [ 'token' ];

  params = [
    'name',
    'address',
    'city',
    'state',
    'zip',
    'htype',
    'otters'
  ];
}

export default HabitatsController;
