import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { handleEmailResponse } from "../../../utils/resetPassword/handleSendingEmailResponse";
import ResetPasswordForm from "../resetPasswordForm.jsx";
import OnSuccess from "../onSuccess.jsx";
import Back from "../../../components/button/Back.jsx";
import Header from "../header.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

function ResetPassword(){
    const { sendingEmailError, sendingEmailSuccess, sendingEmailStart, userNotFound } = useSelector((state)=> state.resetPasswordState);
    useEffect(()=>{
        handleEmailResponse(sendingEmailError, userNotFound, sendingEmailSuccess, toast)
    },[sendingEmailSuccess, sendingEmailError, sendingEmailStart, userNotFound])
    return(
        <div className="resetPasswordContainer">
            <div>
                {sendingEmailSuccess === 200 ? (
                    <OnSuccess/>
                ):(
                    <>
                        <div className='formWarpper'>
                            <Header title={'Forgot password?'} subTitle={'No worries, we will send you reset instructions'}/>
                            <ResetPasswordForm/>
                        </div>
                        <Back title={'Back to login'}/>
                        <ToastContainer />
                    </>
                )}
            </div>
        </div>
    )
}
export default ResetPassword;