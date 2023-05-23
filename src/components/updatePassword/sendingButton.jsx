import { useSelector } from "react-redux";
export const SubmitSection =()=>{
    const {updatingStart}= useSelector((state)=>state.updatePasswordState);
    return(
        <button className='submitBtn' type='submit' >{ updatingStart? "Loading..." : "Update Password"  }</button>
    );
};