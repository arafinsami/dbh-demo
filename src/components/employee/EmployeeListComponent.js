
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import EmployeeQueryService from '../../services/query/EmployeeQueryService';


const EmployeeListComponent =() => {
    const [employees, setEmployees] = useState([]);

    useEffect( () => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try{
            const response = await EmployeeQueryService.findAll();
            if(Array.isArray(response.data.data)) {
                setEmployees(response.data.data);
            } else {
                //console.error('error from response !!!', response.data);
            }
        } catch (error){
            console.error('error from response !!!', error);
        }
    };

    const deleteById = async (id) => {
        try{
            await EmployeeQueryService.delete(id);
            fetchEmployees();
        } catch(error){
            console.error('error from response !!!', error);
        }
    };

     return (
        <div>
            <h2>All Employees</h2>
            <Link to="/employee/save" className="btn btn-primary">Add Employee</Link>
            <Link to="/logout" className="btn btn-danger ml-2">Logout</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <Link to={`/employee/details/${employee.id}`} className="btn btn-info">Details</Link> &nbsp; &nbsp;
                                    <Link to={`/employee/edit/${employee.id}`} className="btn btn-secondary">Edit</Link>&nbsp;
                                    <button className="btn btn-danger"   onClick={() => deleteById(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}


export default EmployeeListComponent;