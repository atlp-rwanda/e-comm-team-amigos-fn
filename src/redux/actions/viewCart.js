import { VIEW_CART_SUCCESS, VIEW_CART_ERROR, VIEW_CART_START } from "../types";

const viewCart = () => {
	return async (dispatch) => {
		dispatch({
			type: VIEW_CART_START,
			payload: true,
		});
		try {
			const token = localStorage.getItem("token");
			const response = await fetch(
				"https://e-comm-team-amigos-bn-project.onrender.com/cart/view-cart",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				},
			);
			const result = await response.json();
			if (response.status === 200) {
				dispatch({
					type: VIEW_CART_SUCCESS,
					payload: result,
				});
				dispatch({
					type: VIEW_CART_START,
					payload: false,
				});
			} else if (response.status === 401) {
				dispatch({
					type: VIEW_CART_SUCCESS,
					payload: result.error,
				});
				dispatch({
					type: VIEW_CART_START,
					payload: false,
				});
			} else if (response.status === 404) {
				dispatch({
					type: VIEW_CART_SUCCESS,
					payload: response.status,
				});
				dispatch({
					type: VIEW_CART_START,
					payload: false,
				});
			}
		} catch (error) {
			dispatch({ type: VIEW_CART_ERROR, payload: error.message });
			dispatch({ type: VIEW_CART_START, payload: false });
		}
	};
};

export default viewCart;
