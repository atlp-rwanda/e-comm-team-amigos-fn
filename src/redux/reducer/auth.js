import { LOGIN_SUCCESS,LOGIN_START } from "../types";

const initialState = { loginSuccess: "" ,  loginFail: "", loginStart:false };
export default function (state = initialState, {type, payload}) {
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
