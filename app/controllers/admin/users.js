import { isAuthenticated } from "../../utils/isAuthenticated";
import UsersController from "../users";

class AdminUsersController extends UsersController {
  params = [
    'name',
    'email',
    'password'
  ];
  
  query = [ 'token' ];

  beforeAction = [
    isAuthenticated
  ];
  
}

export default AdminUsersController;
