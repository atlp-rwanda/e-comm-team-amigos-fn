export const handleUpdatePasswordResponse =(updatingPasswordSuccess, updatingPasswordError,updatingPasswordFail, toast, navigation)=>{
    if(updatingPasswordSuccess === 200){
        toast("Password updated successfully")
        setTimeout(()=>{
            navigation("/login")
        },3000)
    } else if(updatingPasswordError){
        toast("Enternal server error")
    } else if(updatingPasswordFail === 404){
       toast("Password failed")
    }
}