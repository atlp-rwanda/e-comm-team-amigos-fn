import "../../views/updatePassword/updatePassword.style.scss";
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updatePasswordTime } from "../../redux/actions/auth";
import {handleUpdatePasswordResponse} from "../../utils/UpdatePassword/handleUpdatePasswordResponse";
import { SubmitSection } from "../../components/updatePassword/sendingButton.jsx";

const validationSchema = Yup.object().shape({
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
  
const UpdatePasswordForm = () => {
    const {updatingSuccess} = useSelector((state) => state.updatePasswordState);
    const dispatch = useDispatch();
    const navigation = useNavigate();
  	useEffect(() => {
		  handleUpdatePasswordResponse(updatingSuccess, navigation, toast);
	  }, [updatingSuccess?.message, updatingSuccess?.error]);
    const formik = useFormik({
      initialValues: {
        email: '',
        oldPassword: '',
        newPassword: '',
      },
      validationSchema: validationSchema,
      onSubmit:async (values) => {
        dispatch(updatePasswordTime(values.email, values.oldPassword, values.newPassword));
      },
    });
  
    return (
      <div className='changePasswordContainer'>
        <div className='formContainer'>
          <h3 className='changePasswordLabel'>Update password</h3>
          <form className='form' onSubmit={formik.handleSubmit}>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              onChange={formik.handleChange}
              value={formik.values.email}
              className='inputField'
            />
            {formik.errors.email && formik.touched.email && <div className='error'>{formik.errors.email}</div>}
  
            <input
              type='password'
              name='oldPassword'
              placeholder='Enter old password'
              onChange={formik.handleChange}
              value={formik.values.oldPassword}
              className='inputField'
            />
            {formik.errors.oldPassword && formik.touched.oldPassword && (
              <div className='error'>{formik.errors.oldPassword}</div>
            )}
            <input
              type='password'
              name='newPassword'
              placeholder='Enter new password'
              onChange={formik.handleChange}
              value={formik.values.newPassword}
              className='inputField'
            />
            {formik.errors.newPassword && formik.touched.newPassword && (
              <div className='error'>{formik.errors.newPassword}</div>
            )}
            <span className="errorDisplay" id="updateErrorDisplay"></span>
            <SubmitSection />
          </form>
        </div>
      </div>
    );
};
  export default UpdatePasswordForm;