export const handleDisableResponse = (disableSuccess, toast) => {
    if (disableSuccess?.status == 200) {
      toast.success("User disabled successfuly");
    } else if(disableSuccess?.status == 404){
      toast.error("User not found");
    }else if(disableSuccess?.status == "403"){
      toast.error("Access denied! You are not allowed to perform this operation.")
    }
};
