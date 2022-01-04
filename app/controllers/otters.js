import { Controller } from 'lux-framework';
import { isAuthenticated } from '../utils/isAuthenticated';

class OttersController extends Controller {
  beforeAction = [
    isAuthenticated
  ];
  
  query = [ 'token' ];

  params = [
    'name',
    'age',
    'habitat'
  ];
}

export default OttersController;
