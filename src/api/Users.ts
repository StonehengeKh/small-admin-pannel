import API from './API';

class Users extends API {
  getUsers = () => this.get('/users');
}

export default new Users();
