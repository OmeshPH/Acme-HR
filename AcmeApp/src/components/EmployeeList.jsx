import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Employee from './Employee';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(()   => {
    const fetchEmployees = async () => {
      try {
        const response = await   
 axios.get('/api/v1/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>   

      {employees.map(employee => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;