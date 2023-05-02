import * as Yup from "yup";
export default Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
   password:Yup.string()
      .required("password is required")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
 });