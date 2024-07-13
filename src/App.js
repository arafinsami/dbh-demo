import logo from './logo.svg';
import './App.css';



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeListComponent from './components/EmployeeListComponent';
import EmployeeDetailsComponent from './components/EmployeeDetailsComponent';
import EmployeeSaveComponent from './components/EmployeeSaveComponent';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<EmployeeListComponent/>}/>
          <Route path="/employee/details/:id" element=  {<EmployeeDetailsComponent/>}/>
          <Route path="/employee/edit/:id" element=  {<EmployeeSaveComponent/>}/>
          <Route path="/employee/save" element=  {<EmployeeSaveComponent/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
