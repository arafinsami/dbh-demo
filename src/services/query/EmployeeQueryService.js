import axios from 'axios';

const API_URL = 'http://localhost:9999/dbh-api/employee';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

class EmployeeQueryService {

    findById(id) {
        return axiosInstance.get(`${id}`);
    }

    findAll() {
        return axiosInstance.get('');
    }
}

export default new EmployeeQueryService();
