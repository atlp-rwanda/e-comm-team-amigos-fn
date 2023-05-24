import { actionTypes } from "./actionTypes";

const initialState = {
	fetchingOrders: false,
	orders: null,
	order: null,
	errorMsg: "",
};

const selectOrder = (orderId, orders) => {
	return orders.find((order) => order.id === orderId);
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case actionTypes.FETCHING_ORDERS_START:
			return {
				...state,
				fetchingOrders: true,
			};
		case actionTypes.FETCHING_ORDERS_SUCCEED:
			return {
				...state,
				fetchingOrders: false,
				orders: payload,
			};
		case actionTypes.FETCHING_ORDERS_FAIL:
			return {
				...state,
				fetchingOrders: false,
				errorMsg: payload,
			};
		case actionTypes.SELECT_ORDER:
			return {
				...state,
				order: selectOrder(payload, state.orders),
			};
		default:
			return state;
	}
}
