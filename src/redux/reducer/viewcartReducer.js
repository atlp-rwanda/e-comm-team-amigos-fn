import {
	VIEW_CART_SUCCESS,
	VIEW_CART_ERROR,
	VIEW_CART_START,
	REMOVE_ONE_ITEM_CART,
	REMOVE_ONE_ITEM_CART_SUCCESS,
} from "../types";

function removeCartItem(id, cartItems) {
	const newCartItems = cartItems.filter((item) => item.id !== id);
	return newCartItems;
}
const initialState = {
	viewsuccess: "",
	viewerror: "",
	viewstart: false,
	removeitemcartsuccess: "",
	removeitemcartstart: false,
};

const viewcartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case VIEW_CART_START:
			return {
				...state,
				viewstart: payload,
			};
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
		case REMOVE_ONE_ITEM_CART_SUCCESS:
			return {
				...state,
				viewsuccess: {
					...state.viewsuccess,
					cartItems: removeCartItem(
						payload,
						state.viewsuccess.cartItems,
					),
				},
				removeitemcartsuccess: payload,
			};
		case REMOVE_ONE_ITEM_CART:
			return {
				...state,
				removeitemcartstart: payload,
			};
		default:
			return state;
	}
};
export default viewcartReducer;
