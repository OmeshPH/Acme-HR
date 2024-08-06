import React from 'react';

function Employee({ employee }) {
  return (
    <div>
      <h3>{employee.name}</h3>
      <p>Is Admin: {employee.is_admin ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default Employee;