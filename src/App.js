import logo from './logo.svg';
import './App.css';



import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EmployeeListComponent from './components/employee/EmployeeListComponent';
import EmployeeDetailsComponent from './components/employee/EmployeeDetailsComponent';
import EmployeeSaveComponent from './components/employee/EmployeeSaveComponent';
import LoginComponent from './components/auth/LoginComponent';
import LogoutComponent from './components/auth/LogoutComponent';
import SingupComponent from './components/auth/SingupComponent';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/logout" element={<LogoutComponent />} />
            <Route path="/singup" element={<SingupComponent />} />
            <Route path="/" element={<PrivateRoute><EmployeeListComponent/></PrivateRoute>} />
            <Route path="/employee/details/:id" element={<PrivateRoute><EmployeeDetailsComponent/></PrivateRoute>} />
            <Route path="/employee/save" element={<PrivateRoute><EmployeeSaveComponent/></PrivateRoute>} />
            <Route path="/employee/edit/:id" element={<PrivateRoute><EmployeeSaveComponent/></PrivateRoute>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
