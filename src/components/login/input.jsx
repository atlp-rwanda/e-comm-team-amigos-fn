import "../../views/login/login.style.scss";
import { Field } from "formik";
export const InputField=({values,errors,touched,handleChange,handleBlur, type, name,placeholder,fieldError})=>{
    return(
        <div className="form-input-group">
        <label  className={`${errors ? "error" : "input-label"}`}>{touched && errors ? errors:fieldError}</label>
        <Field type={type} name={name}  className={"form-input "} placeholder={placeholder}  onChange={handleChange} value={values} onBlur={handleBlur }/>
        </div>
    );
};