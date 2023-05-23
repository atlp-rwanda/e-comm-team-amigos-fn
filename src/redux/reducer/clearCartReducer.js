import {
	CLEAR_CART,
	CLEAR_CART_SUCCESS,
	CLEAR_CART_ERROR,

} from "../types";

const initialState = {
	clearcartsuccess: null,
	clearcarterror: "",
	clearcartstart: false
};

const clearCartReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case CLEAR_CART_SUCCESS:
			return {
				...state,
				clearcartsuccess: payload,
			};
		case CLEAR_CART:
			return{
				...state,
				clearcartstart: payload
			};
		case CLEAR_CART_ERROR:
			return {
				...state,
				clearcarterror: payload,
			};

			default:
				return state; 
		}
};
export default clearCartReducer;