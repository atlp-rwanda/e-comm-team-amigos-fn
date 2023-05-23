export const  handleUpdatePasswordResponse=(updatingSuccess,navigation,toast)=>{
    if(updatingSuccess?.message === "Password successifully Updated"){
        toast(updatingSuccess?.message );
        setTimeout(()=>{
          navigation("/login");
      },5000);
      }
};