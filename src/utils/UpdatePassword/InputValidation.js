import * as Yup from "yup";

export default Yup.object().shape({
    email: Yup.string().email('Invalid email').required('No email provided'),

    oldPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('No old password provided')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, 'Password should contain at least one letter, one special character, and one capital letter.'),

    newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('No new password provided')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, 'Password should contain at least one letter, one special character, and one capital letter.'),
  });