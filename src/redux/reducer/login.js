import { LOGIN_SUCCESS,LOGIN_START } from "../types";

const loginState = { loginSuccess: "" ,  loginFail: "", loginStart:false };

const loginReducer = (state = loginState, {type, payload})=> {
	switch (type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				loginSuccess: payload,
				
			};
		case LOGIN_START:
			return{
				...state,
				loginStart:payload
			};
		default:
			return state;
	}
}

export default loginReducer;
