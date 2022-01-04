import { retreiveSession, saveSession } from 'app/middleware/usersession';
import ApplicationController from '../application';

class AdminApplicationController extends ApplicationController {
  beforeAction = [
    retreiveSession
  ];

  afterAction = [
    saveSession
  ];
}

export default AdminApplicationController;
