import {
	ADD_TO_CART_ERROR,
	ADD_TO_CART_START,
	ADD_TO_CART_SUCCESS,
} from "../types";

export const increment = () => {
	return {
		type: "INCREMENT",
	};
};
export const decrement = () => {
	return {
		type: "DECREMENT",
	};
};

export const addToCart = (quantity, id) => {
	return async (dispatch) => {
		dispatch({
			type: ADD_TO_CART_START,
			payload: true,
		});
		try {
			const token = localStorage.getItem("token");
			const response = await fetch(                    
				`http://localhost:4000/cart?productId=42b26aee-f18f-483b-876c-484a90ae20ba&quantity=${quantity}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				},
			);

			const result = await response.json();
			console.log("ADDED", result);
			if (response.status == 200) {
				dispatch({
					type: ADD_TO_CART_SUCCESS,
					payload: response.ok,
				});
				dispatch({
					type: ADD_TO_CART_START,
					payload: false,
				});
			} else if (response.status == 400) {
				dispatch({
					type: ADD_TO_CART_SUCCESS,
					payload: result.error,
				});
				dispatch({
					type: ADD_TO_CART_START,
					payload: false,
				});
			} else if (response.status == 401) {
				dispatch({
					type: ADD_TO_CART_SUCCESS,
					payload: response.status,
				});
				dispatch({
					type: ADD_TO_CART_START,
					payload: false,
				});
			}
		} catch (error) {
			dispatch({ type: ADD_TO_CART_ERROR, payload: error.message });
			dispatch({ type: ADD_TO_CART_START, payload: false });
		}
	};
};
