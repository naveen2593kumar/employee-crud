import React from "react";
import { Formik } from "formik";
import validationSchema from "./employee.validation";

const initialValues = {
    firstName: '',
    lastName: '',
    dob: '',
    designation: '',
    photoLink: '',
    experience: 0,
}

const AddEmployeeForm = ({ handleAddEmployee }) => {
    return (
        <section>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
                    values.id = Date.now();
                    handleAddEmployee(values);
                    setSubmitting(false);
                    setErrors({});
                    resetForm();
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    handleReset
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} onReset={handleReset}>
                        <div>
                            <label> First Name:
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                />
                                {errors.firstName && touched.firstName && errors.firstName}
                            </label>
                        </div>
                        <div>
                            <label> Last Name: <input
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                                {errors.lastName && touched.lastName && errors.lastName}
                            </label>
                        </div>
                        <div>
                            <label> DOB:  <input
                                type="text"
                                name="dob"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dob}
                            />
                                {errors.dob && touched.dob && errors.dob}
                            </label>
                        </div>
                        <div>
                            <label> Designation: <input
                                type="text"
                                name="designation"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.designation}
                            />
                                {errors.designation && touched.designation && errors.designation}
                            </label>
                        </div>
                        <div>
                            <label> Photo Link:  <input
                                type="text"
                                name="photoLink"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.photoLink}
                            />
                                {errors.photoLink && touched.photoLink && errors.photoLink}
                            </label>
                        </div>
                        <div>
                            <label> Experience:   <input
                                type="text"
                                name="experience"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.experience}
                            />
                                {errors.experience && touched.experience && errors.experience}</label>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </section>
    );
};

export default AddEmployeeForm;
