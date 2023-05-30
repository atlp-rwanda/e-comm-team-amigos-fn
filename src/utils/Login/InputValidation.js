import * as Yup from "yup";
export default Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
   password:Yup.string()
      .required("password is required")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
       "Must have 8 Characters:1Upper,1Lower,1Number,1Special"),
 });