export const handleEnableResponse = (enableSuccess, toast) => {
    if (enableSuccess?.status == 200) {
      toast.success("User enabled successfuly");
    } else if(enableSuccess?.status == 404){
      toast.error("User not found");
    }else if(enableSuccess?.status == "403"){
      toast.error("Access denied! You are not allowed to perform this operation.")
    }
};