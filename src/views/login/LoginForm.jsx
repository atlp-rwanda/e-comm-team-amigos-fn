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