import { Field } from "formik";

export const InputField = ({ name, type, placeholder, value, onChange, errors }) => {
    return (
      <>
        <Field style={{ borderColor: errors ? 'red' : '' }} className="inputField" name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        {errors && <div className='errorMessage'>{errors}</div>}
      </>
    );
}