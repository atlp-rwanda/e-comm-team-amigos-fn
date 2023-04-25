import { InputField } from '../../components/input.jsx';

export const renderInputField = (name, type, placeholder, value, onChange, error) => {
    return (
        <InputField name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} errors={error} />
    );
}