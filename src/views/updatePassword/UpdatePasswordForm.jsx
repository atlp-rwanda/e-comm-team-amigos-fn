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
import MainCard from "../../components/main-card/index.jsx";
import jwt_decode from "jwt-decode";

const validationSchema = Yup.object().shape({
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
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
  	useEffect(() => {
		  handleUpdatePasswordResponse(updatingSuccess, navigation, toast);
	  }, [updatingSuccess?.message, updatingSuccess?.error]);
    const formik = useFormik({
      initialValues: {
        oldPassword: '',
        newPassword: '',
      },
      validationSchema: validationSchema,
      onSubmit:async (values) => {
        dispatch(updatePasswordTime(decoded.userEmail, values.oldPassword, values.newPassword));
      },
    });
    return (
      <div className='changePasswordContainer'>
        <div className='formContainer'>
          <h3 style={{color:"green", padding:"3rem"}}>Update password</h3>
          <MainCard>
            <form className='form' onSubmit={formik.handleSubmit}>
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
          </MainCard>
        </div>
      </div>
    );
};
  export default UpdatePasswordForm;