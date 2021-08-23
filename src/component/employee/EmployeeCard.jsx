import React from "react";

const EmployeeCard = ({ employee, handleDeleteEmployee, handleEditEmployee }) => {

    const handleDeleteEmployeeInner = (employee) => {
        const result = window.confirm('Are you sur to delete the Employee?');
        if (result) {
            handleDeleteEmployee(employee);
        }
    }

    return (
        <div style={{ padding: 16, backgroundColor: '#eee', margin: 16, display: 'flex' }}>
            <img alt={`${employee.firstName} ${employee.lastName}`} src={employee.photoLink} />
            <div style={{ paddingLeft: 16, flex: 1 }}>
                <h3>{employee.firstName} {employee.lastName}</h3>
                {employee.dob}
                <br />
                Experience: {employee.designation} ({employee.experience} years)
            </div>
            <div>
                <button onClick={() => handleDeleteEmployeeInner(employee)}>Delete</button>
                <button onClick={() => handleEditEmployee(employee)}>Edit</button>
            </div>
        </div>
    );
}

export default EmployeeCard;