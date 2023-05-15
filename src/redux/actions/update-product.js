import {
	PRODUCT_UPDATE_FAIL,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_START,
	INTERNAL_SERVER_ERROR,
} from "../types";
import action from "./action.js";

export const update_product = (productDetails, { productId }) => {
	return async (dispatch) => {
		dispatch(action(PRODUCT_UPDATE_START, true));
		try {
			const token = localStorage.getItem("token");
			const response = await fetch(
				`https://e-comm-team-amigos-bn-project.onrender.com/product/${productId}`,
				{
					method: "PATCH", // or 'PATCH' depending on your API endpoint
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify(productDetails),
				},
			);
			if (response.status == 200) {
				// update the success status code to 200 or whichever code your API returns on success
				dispatch(action(PRODUCT_UPDATE_SUCCESS, response.ok));
				dispatch(action(PRODUCT_UPDATE_START, false));
				setTimeout(() => {
					dispatch(action(PRODUCT_UPDATE_SUCCESS, false));
				}, 5000);
			} else if (response.status == 409) {
				dispatch(action(PRODUCT_UPDATE_SUCCESS, response.status));
				setTimeout(() => {
					dispatch(action(PRODUCT_UPDATE_SUCCESS, {}));
				}, 5000);
				dispatch(action(PRODUCT_UPDATE_START, false));
			} else if (response.status == 500) {
				dispatch(action(INTERNAL_SERVER_ERROR, "jwt expired"));
			} else if (response.status) {
				dispatch(action(PRODUCT_UPDATE_SUCCESS, response.status));
				dispatch(action(PRODUCT_UPDATE_START, false));
			}
		} catch (error) {
			dispatch(action(PRODUCT_UPDATE_FAIL, error.message));
			dispatch(action(PRODUCT_UPDATE_START, false));
		}
	};
};
