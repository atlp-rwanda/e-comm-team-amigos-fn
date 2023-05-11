import { LOGIN_SUCCESS,LOGIN_START, LOGIN_PAYLOAD } from "../types";

const loginState = { loginSuccess: "" ,loginPayload:{},  loginFail: "", loginStart:false };

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
		case LOGIN_PAYLOAD:
			return{
				...state,
				loginPayload:payload
			};
		default:
			return state;
	}
};

export default loginReducer;
