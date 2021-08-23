import * as yup from 'yup';

let schema = yup.object().shape({
    firstName: yup.string().required('Please provide the first name'),
    lastName: yup.string().required('Please provide the last name'),
    dob: yup.string().required('Please provide the dob'),
    designation: yup.string().required('Please provide the designation'),
    photoLink: yup.string().required('Please provide the photo url'),
    experience: yup.number('Please provide a valid experience number')
        .positive('Please provide a valid experience number')
        .required('Please provide the user experience'),
});

export default schema;