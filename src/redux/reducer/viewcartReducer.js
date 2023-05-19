import {
	VIEW_CART_SUCCESS,
	VIEW_CART_ERROR,
    VIEW_CART_START,
} from "../types";

const initialState = {
	viewsuccess: "",
	viewerror: "",
	viewstart: false,
};

const viewcartReducer = (state = initialState, {type, payload }) => {
    switch (type) {
		case VIEW_CART_SUCCESS:
			return {
				...state,
				viewsuccess: payload,
			};
		case VIEW_CART_ERROR:
			return {
				...state,
				viewerror: payload,
			};
		case VIEW_CART_START:
			return {
				...state,
				viewstart: payload,
			};
			default:
				return state; 
		}
};
export default viewcartReducer;