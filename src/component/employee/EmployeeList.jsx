import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = (props) => {
    const { employeeList, handleDeleteEmployee, handleEditEmployee } = props;
    return (
        <section>
            {employeeList && employeeList.length > 0 ? <section>
                {employeeList.map(employee => <EmployeeCard
                    handleEditEmployee={handleEditEmployee}
                    handleDeleteEmployee={handleDeleteEmployee}
                    key={employee.id}
                    employee={employee} />)}
            </section> : <section></section>}
        </section>
    );
}

export default EmployeeList;