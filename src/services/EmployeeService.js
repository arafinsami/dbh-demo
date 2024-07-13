

import axios from "axios";

const API_URL = 'http://localhost:9999/dbh-api/employee';

class EmployeeService {

    save(employee){
        return axios.post(API_URL, employee);
    }

    update(employee){
        return axios.put(API_URL, employee);
    }

    findById(id){
        return axios.get(`${API_URL}/${id}`);
    }

    delete(id){
        return axios.delete(`${API_URL}/${id}`);
    }

    findAll(){
        return axios.get(`${API_URL}`);
    }
} 


export default new EmployeeService();