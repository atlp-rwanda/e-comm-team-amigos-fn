import {
	UPDATE_TO_CART_ERROR,
	UPDATE_TO_CART_START,
	UPDATE_TO_CART_SUCCESS,
} from "../types";

export const updateCart = (quantity, id) => {
	return async (dispatch) => {
		dispatch({
			type: UPDATE_TO_CART_START,
			payload: true,
		});
		try {
			const token = localStorage.getItem("token");
			console.log(token);
			console.log(id);
			const response = await fetch(
				`https://e-comm-team-amigos-bn-project.onrender.com/cart/updateCart/{${id}}`,
				{
					method: "PUT",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						productId: id,
						quantity,
					}),
				},
			);
			console.log(response);
			const result = response.json();
			console.log(result);
			if (response.status == 201) {
				dispatch({
					type: UPDATE_TO_CART_SUCCESS,
					payload: response.ok,
				});
				dispatch({
					type: UPDATE_TO_CART_START,
					payload: false,
				});
			} else if (response.status == 400) {
				dispatch({
					type: UPDATE_TO_CART_SUCCESS,
					payload: result.error,
				});
				dispatch({
					type: UPDATE_TO_CART_START,
					payload: false,
				});
			} else if (response.status == 401) {
				dispatch({
					type: UPDATE_TO_CART_SUCCESS,
					payload: response.status,
				});
				dispatch({
					type: UPDATE_TO_CART_START,
					payload: false,
				});
			}
		} catch (error) {
			dispatch({ type: UPDATE_TO_CART_ERROR, payload: error.message });
			dispatch({ type: UPDATE_TO_CART_START, payload: false });
		}
	};
};
