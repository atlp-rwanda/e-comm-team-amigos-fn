import { FETCH_RELATED_PRODUCTS, FETCH_RELATED_PRODUCTS_ERROR } from "../types";

export const fetchRelatedProducts = (category) => {
	return async (dispatch) => {
		try {
			const token = localStorage.getItem("token");
			const related = await fetch(
				`https://e-comm-team-amigos-bn-project.onrender.com/product/category/${category}`,
				{
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				},
			);
			const related_items = await related.json();
			dispatch({
				type: FETCH_RELATED_PRODUCTS,
				payload: related_items.products,
			});
		} catch (error) {
			dispatch({
				type: FETCH_RELATED_PRODUCTS_ERROR,
				payload: error.message,
			});
		}
	};
};
