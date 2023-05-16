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
			const response = await fetch("https://e-comm-team-amigos-bn-project.onrender.com/cart", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					productId: id,
					quantity,
				}),
			});

			const result = await response.json();
			if (response.status == 201) {
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
