import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EmployeeQueryService from '../services/query/EmployeeQueryService';

const EmployeeDetailsComponent = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await EmployeeQueryService.findById(id);
      setEmployee(response.data.data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  return (
    <div>
      <h2>Employee Detail</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>ID:</strong> {employee.id}</li>
        <li className="list-group-item"><strong>Name:</strong> {employee.name}</li>
        <li className="list-group-item"><strong>Email:</strong> {employee.email}</li>
      </ul>
      <Link to="/" className="btn btn-primary mt-2">Back to List</Link>
    </div>
  );
};

export default EmployeeDetailsComponent;