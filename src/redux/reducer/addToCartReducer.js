import {
	ADD_TO_CART_ERROR,
	ADD_TO_CART_START,
	ADD_TO_CART_SUCCESS,
} from "../types";

const initialState = {
	cartsuccess: "",
	carterror: "",
	cartstart: false,
};

const addToCartReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ADD_TO_CART_SUCCESS:
			return {
				...state,
				cartsuccess: payload,
			};
		case ADD_TO_CART_ERROR:
			return {
				...state,
				carterror: payload,
			};
		case ADD_TO_CART_START:
			return {
				...state,
				cartstart: payload,
			};
			default:
				return state; 
		}
};
export default addToCartReducer;