import { useSelector } from "react-redux";

export default function PrimaryButton({values, title, errors}){
    const { sendingEmailStart } = useSelector((state)=> state.resetPasswordState);
    return(
        <button
            style={{
            cursor: values.email === "" || errors.email ? "not-allowed" : "pointer",
            opacity: values.email === "" || errors.email ? 0.5 : 1,marginTop:'.5rem'
            }}
            className="submitBtn"
            type="submit"
        >
            {!sendingEmailStart ? `${title}` : "Loading..."}
        </button>
    )
}