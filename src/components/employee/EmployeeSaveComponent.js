import React, {useState, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import EmployeeCommandService from "../../services/command/EmployeeCommandService";
import EmployeeQueryService from '../../services/query/EmployeeQueryService';

const EmployeeSaveComponent = ()=> {


    const [employee, setEmployee] = useState({name : '', email : '', password : ''});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        fetchEmployee(id);
    }, [id]);


    const fetchEmployee = async (id) => {
        try {
          const response = await EmployeeQueryService.findById(id);
          setEmployee(response.data.data);
        } catch (error) {
          console.error('Error fetching employee:', error);
        }
      };


      const handleSubmit = async (e) => {
        e.preventDefault();

        if(!employee.name || !employee.email || !employee.password) {
            alert('please fillul the form !!!');
            return;
        } 

        if(id){
            await EmployeeCommandService.update(employee);
        } else {
            await EmployeeCommandService.save(employee);
        }
        navigate('/');
      };

      const handleChange = (e) => {
        setEmployee( { ...employee, [e.target.name]: e.target.value });
      };

      return (
        <div>
            <h2> {id ? 'Update Employee' : 'Save Employee' }</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" name="name" value={employee.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" name="email" value={employee.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" name="password" value={employee.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>&nbsp;<Link to="/" className="btn btn-primary mt-2">Back to List</Link>
            </form>
        </div>
      );
};

export default EmployeeSaveComponent;