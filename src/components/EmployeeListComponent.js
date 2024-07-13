
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";


const EmployeeListComponent =() => {
    const [employees, setEmployees] = useState([]);

    useEffect( () => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try{
            const response = await EmployeeService.findAll();
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
            await EmployeeService.delete(id);
            fetchEmployees();
        } catch(error){
            console.error('error from response !!!', error);
        }
    };

     return (
        <div>
            <h2>All Employees</h2>
            <Link to="/employee/save" className="btn btn-primary">Add Employee</Link>
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
                                    {/* <Link to={`/employee/${employee.id}`} className="btn btn-secondary">Edit</Link>&nbsp; &nbsp;
                                    <button className="btn btn-danger"   onClick={() => deleteById(employee.id)}>Delete</button> */}
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