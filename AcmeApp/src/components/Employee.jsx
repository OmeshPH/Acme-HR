import React from 'react';
import styles from '../styles/Employee.module.css';

function Employee({ employee }) {
  return (
    <div className={styles.employee}>
      <h3 className={styles.employeeName}>{employee.name}</h3>
      <p className={styles.employeeAdmin}>Is Admin: {employee.is_admin ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default Employee;