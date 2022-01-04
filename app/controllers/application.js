import { Controller } from 'lux-framework';
import { retreiveSession, saveSession } from 'app/middleware/usersession';

class ApplicationController extends Controller {
  beforeAction = [
    retreiveSession
  ];

  afterAction = [
    saveSession
  ];
}

export default ApplicationController;
