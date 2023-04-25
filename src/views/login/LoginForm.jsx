<<<<<<< HEAD
import "./login.style.scss";
import {InputField} from "../../components/login/input.jsx";
import { login } from "../../redux/actions";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form,Formik } from "formik";
import loginValidation from "../../utils/Login/InputValidation";
import { handleLoginResponse } from "../../utils/Login/handleLoginResponse";
import { SubmitSection } from "../../components/login/submit.jsx";
export default function LoginForm() {
  const dispatch = useDispatch();
  const {loginSuccess}= useSelector((state)=>state.authState);
  const navigation = useNavigate();
  useEffect(()=>{
    handleLoginResponse(loginSuccess,navigation,toast);
  },[loginSuccess?.message,loginSuccess?.error]);
  return (
		<>
			<h1 className="login-heading">Login</h1>
      <Formik
      initialValues={{email:"", password:""}}
      validationSchema={loginValidation}
      onSubmit= {values=>{dispatch(login(values.email, values.password));}}
      >
        {({values,errors,touched,handleChange,handleBlur})=>(
                <Form className="login-form" >
                  <InputField values={values.email} errors={errors.email} touched={ touched.email} handleChange={handleChange} handleBlur={handleBlur}  type={"email"}  name={"email"} placeholder={"Your Email Address..."} fieldError={"Email"} />
                  <InputField values={values.password} errors={errors.password} touched={ touched.password} handleChange={handleChange} handleBlur={handleBlur}  type={"password"}  name={"password"} placeholder={"Enter your password"} fieldError={"Password"}/>
                  <SubmitSection />
                  </Form>
        )}
      </Formik>
		</>
	);
}
=======
import "./login.style.css";
import axios from "axios";

import{useFormik} from "formik";
import * as Yup from "yup";
export default function LoginForm() {

// const router =userRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password:""
    },
    //validate form
    validationSchema:Yup.object({
       email: Yup.string()
         .email("Invalid email address")
         .required("Email is required"),
      password:Yup.string()
         .required("password is required")
         .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),
      //submit form
  onSubmit:async (values) =>{
    
    try{
      const res = await axios.post("https://e-comm-team-amigos-bn-project.onrender.com/user/login", {email:values.email,password:values.password});
      localStorage.setItem("token",res.data.token);
    console.log("success",res.data);
    }catch(error){
console.log(error);
    }

    // console.log(values);
    // router.push({pathname: "/success",query: values});
  }
  });
  




	return (
		<>
			<h1 className="login-heading">Login</h1>
			<form className="login-form"  onSubmit={formik.handleSubmit}>
				{/* Email */}
				<div className="form-input-group">
					<label htmlFor="email" className={`${formik.errors.email ? "error" : "input-label"}`}

          >
            {formik.touched.email && formik.errors.email ? formik.errors.email:"Email"}
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className={"form-input "}
						placeholder="Your Email Address..."
						required
						onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur }
					/>
					
				</div>

				{/* Password */}
				<div className="form-input-group">
					<label htmlFor="password" className={`${formik.errors.password ? "error" : "input-label"}`}>
          {formik.touched.password && formik.errors.password ? formik.errors.password:"Password"}
					</label>
					<input
						type="password"
						name="password"
						id="password"
						className={"form-input"}
						placeholder="Password..."
						required
            onChange={formik.handleChange  }
            value= {formik.values.password}
            onBlur={formik.handleBlur }
					/>
				</div>
        <div className="form-footer">
				<button
					type="submit"
					className="primary-btn"
				>
					Login
				</button>

          <div className="no-account">
          <a href="#"  className="reset_password">
              Forgot Password?
            </a>


            <div className="sign-up">
              <p>No account?</p>
            <a href="#" target="_blank" className="reset_password" >
              Sign up
            </a>

            </div>
          </div>
        </div>
			</form>
		</>
	);
}
>>>>>>> feat(login): Create login page
