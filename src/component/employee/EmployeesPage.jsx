import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import AddEmployeeForm from "./AddEmployeeForm";
import EditEmployeeForm from "./EditEmployeeForm";
import employees from "./employees.model";

const EmployeesPage = () => {
    const [employeeList, setEmployeeList] = useState(employees);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleAddEmployee = (employee) => {
        setEmployeeList([...employeeList, employee]);
    }

    const handleDeleteEmployee = (employee) => {
        const newList = employeeList.filter(emp => emp.id !== employee.id);
        setEmployeeList(newList);
    }

    const handleEditEmployee = (employee) => {
        setSelectedEmployee(employee);
    }

    const handleUpdateEmployee = (employee) => {
        const findAt = employeeList.findIndex(emp => emp.id === employee.id);
        const newList = [...employeeList.slice(0, findAt), employee, ...employeeList.slice(findAt + 1)];
        setEmployeeList(newList);
    }

    const handleAddNewEmpClick = (employee) => {
        setSelectedEmployee(null);
    }


    return (
        <main>
            <nav><NavLink to="/">Home Page</NavLink></nav>

            {selectedEmployee ?
                <EditEmployeeForm
                    handleUpdateEmployee={handleUpdateEmployee}
                    handleAddNewEmpClick={handleAddNewEmpClick}
                    selectedEmployee={selectedEmployee} /> :
                <AddEmployeeForm
                    handleAddEmployee={handleAddEmployee}
                />}
            <EmployeeList handleEditEmployee={handleEditEmployee} handleDeleteEmployee={handleDeleteEmployee} employeeList={employeeList} />
        </main>
    );
};

export default EmployeesPage;