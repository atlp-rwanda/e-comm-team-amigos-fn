export const  handleLoginResponse=(loginSuccess,navigation,toast)=>{
    if(loginSuccess?.message === "User Logged Successfully"){
        toast(loginSuccess?.message );
        setTimeout(()=>{
          navigation("/dashboard");
      },5000);
      }
      else {
        toast(loginSuccess?.message || loginSuccess?.error);
        setTimeout(()=>{
          navigation("/login");
      },5000);
      }
};