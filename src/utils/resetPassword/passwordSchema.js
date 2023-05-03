import * as Yup from 'yup';

export default Yup.object().shape({
    password1: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, 'Password should contain at least one letter, one special character, and one capital letter.'),

    password2: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, 'Password should contain at least one letter, one special character, and one capital letter.')
   });