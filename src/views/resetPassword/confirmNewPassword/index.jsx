import { useEffect } from 'react';
import '../resetPassword/style.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from'react-redux';
import { useNavigate } from 'react-router-dom';
import UpdatePasswordForm from '../updatePasswordForm.jsx';
import { handleUpdatePasswordResponse } from '../../../utils/resetPassword/handleUpdatingPasswordResponse';

function ConfirmNewPassword(){
    const { updatingPasswordSuccess, updatingPasswordError, updatingPasswordFail } = useSelector((state)=> state.resetPasswordState);
    const navigation = useNavigate();
    useEffect(()=>{
        handleUpdatePasswordResponse(updatingPasswordSuccess, updatingPasswordError,updatingPasswordFail, toast, navigation);
    },[updatingPasswordSuccess, updatingPasswordError, updatingPasswordFail])
    return(
        <div className="resetPasswordContainer">
            <div className='resetPasswordConntent'>
                <div className="formWarpper">
                    <div className='titleSection'>
                        <h2 className="title">Confirm new password</h2>
                    </div>
                    <UpdatePasswordForm />
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}
export default ConfirmNewPassword;