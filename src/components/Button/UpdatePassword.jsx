import { useSelector } from "react-redux";

export default function PrimaryButton({values, title, errors}){
    const { updatingPasswordStart } = useSelector((state)=> state.resetPasswordState);
    const isValid = !values.password1 || !values.password2 || errors.password1 || errors.password2 || values.password1 !== values.password2;
    return(
        <button 
            style={{
                cursor:  isValid ? "not-allowed" : "pointer",
                opacity: isValid ? 0.5 : 1,
            }} 
            className="submitBtn" 
            type="submit"
            disabled={isValid}
        >
            {!updatingPasswordStart? `${title}` : 'Loading...'}
        </button>
    )
}