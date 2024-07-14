
import axios from "axios";

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

class EmployeeCommandService {

    save(employee) {
        return axiosInstance.post('', employee);
    }

    update(employee) {
        return axiosInstance.put('', employee);
    }

    delete(id) {
        return axiosInstance.delete(`${id}`);
    }
}

export default new EmployeeCommandService();
