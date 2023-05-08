import emailSchema from '../../utils/resetPassword/emailSchema';
import { passwordReset } from '../../redux/actions';
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import "../../views/resetPassword/resetPassword/style.scss";
import PrimaryButton from '../../components/Button/ResetPassword.jsx';

export default function ResetPasswordForm(){
    const dispatch = useDispatch();
    return(
        <Formik
        initialValues={{
            email: '',
        }}
        validationSchema={emailSchema}
        onSubmit={values => {
            dispatch(passwordReset(values.email));
        }}
        >
            {({ values, errors, touched, handleChange }) => (
                <Form className='form'>
                    <Field style={{borderColor: errors.email? 'red': ''}} className="inputField" name="email" type="email" placeholder="Enter your email" value={values.email} onChange={handleChange} />
                    {errors.email && touched.email ? <div className='errorMessage'>{errors.email}</div> : null}
                    <PrimaryButton values={values} title={'Submit'} errors={errors}/>
                </Form>
            )}
        </Formik>
    )
}