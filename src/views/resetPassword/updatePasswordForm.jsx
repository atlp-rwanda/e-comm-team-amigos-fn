import { useParams } from 'react-router-dom';
import '../../views/resetPassword/resetPassword/style.scss';
import { Formik, Form } from 'formik';
import { updatePassword } from '../../redux/actions';
import { useDispatch } from'react-redux';
import passwordSchema from '../../utils/resetPassword/passwordSchema';
import PrimaryButton from '../../components/Button/UpdatePassword.jsx';
import { renderInputField } from '../../utils/resetPassword/renderInputField';

export default function UpdatePasswordForm(){
    const dispatch = useDispatch();
    const { token } = useParams();
    return (
        <Formik
            initialValues={{
                password1: '',
                password2: '',
            }}
            validationSchema={passwordSchema}
            onSubmit={values => {
                dispatch(updatePassword(values.password1, values.password2, token));
            }}>
            {({ errors, values, handleChange }) => (
                <Form className='form'>
                    {renderInputField('password1', 'password', 'New password', values.password1, handleChange, errors.password1)}
                    {renderInputField('password2', 'password', 'Confirm password', values.password2, handleChange, errors.password2)}
                    {values.password2 !== '' && values.password1 !== values.password2 ? <div className='errorMessage' style={{marginTop:".5rem"}}>Password did not matches</div>: null}
                    <PrimaryButton title={'Confirm reset password'} values={values} errors={errors}/>
                </Form>
            )}
        </Formik>
    )
}