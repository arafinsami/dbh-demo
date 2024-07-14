import axios from 'axios';

const API_URL = 'http://localhost:9999/dbh-api/employee/singup';

class SignupService {
  signup(employee) {
    return axios.post(API_URL, employee);
  }
}

export default new SignupService();
