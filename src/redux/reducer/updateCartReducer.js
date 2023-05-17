import {
	UPDATE_TO_CART_ERROR,
	UPDATE_TO_CART_START,
	UPDATE_TO_CART_SUCCESS,
} from "../types";

const initialState = {
	cartUpdateSuccess: "",
	cartUpdateError: "",
	cartUpdateStart: false,
};

const UpdateCartReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case UPDATE_TO_CART_SUCCESS:
			return {
				...state,
				cartUpdateSuccess: payload,
			};
		case UPDATE_TO_CART_ERROR:
			return {
				...state,
				cartUpdateError: payload,
			};
		case UPDATE_TO_CART_START:
			return {
				...state,
				cartUpdateStart: payload,
			};
			default:
				return state; 
		}
};
export default UpdateCartReducer;