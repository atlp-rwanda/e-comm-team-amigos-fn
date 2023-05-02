import "../../views/login/login.style.scss";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const SubmitSection =()=>{
    const {loginStart}= useSelector((state)=>state.authState);
    return(
        <div className="form-footer">
        <button type="submit" className="primary-btn" >{ loginStart? "Loading..." : "Login"  }</button>
        <div className="no-account">
        <Link to="/user/resetPassword/:token" className="reset_password">Forgot Password?</Link>
        <div className="sign-up">
          <p>No account?</p>
          <Link to="/sign-up" className="sign-up-link" >Sign up</Link>
          <ToastContainer />
          </div>
        </div>
      </div>
    );
};