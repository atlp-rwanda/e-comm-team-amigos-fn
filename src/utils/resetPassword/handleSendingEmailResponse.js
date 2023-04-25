export const handleEmailResponse = (sendingEmailError, userNotFound, sendingEmailSuccess, toast)=>{
    if(sendingEmailSuccess === 200){
        toast('Email sent successfully');
    }else if(userNotFound === 404){
        toast("User not found");
    }else if(sendingEmailError){
        toast("Enternal server error");
    }
};