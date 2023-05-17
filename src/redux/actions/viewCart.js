import { VIEW_CART_SUCCESS, VIEW_CART_ERROR, VIEW_CART_START } from "../types";

function filterCookies(cokiename) {
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i].trim();
		var separatorIndex = cookie.indexOf("=");
		var name = cookie.substring(0, separatorIndex).trim();
		var value = cookie.substring(separatorIndex + 1).trim();

		if (name === cokiename) {
			// Return the parsed element
			return decodeURIComponent(value);
		}
		// Return null if the element was not found
		return null;
	}
}
const viewCart = () => {
	filterCookies("session");
	return async (dispatch) => {
		dispatch({
			type: VIEW_CART_START,
			payload: true,
		});
		try {
			const token = localStorage.getItem("token");
			const response = await fetch(
				"http://localhost:4000/cart/view-cart",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				},
			);
			// const result = await response.json();
			const result = response;
			console.log("VIEW CART RESULT", result);
			if (response.status == 200) {
				dispatch({
					type: VIEW_CART_SUCCESS,
					payload: response.ok,
				});
				dispatch({
					type: VIEW_CART_START,
					payload: false,
				});
			} else if (response.status == 401) {
				dispatch({
					type: VIEW_CART_SUCCESS,
					payload: result.error,
				});
				dispatch({
					type: VIEW_CART_START,
					payload: false,
				});
			} else if (response.status == 404) {
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
