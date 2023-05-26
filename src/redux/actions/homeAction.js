import {
	FETCH_CATEGORY_SUCCESS,
	FETCH_CATEGORY_ERROR,
	FETCH_CATEGORY,
} from "../types";
import axios from "axios";
const api = axios.create({
	baseURL:
		// eslint-disable-next-line no-undef
		process.env.BACKEND_URL ||
		"https://e-comm-team-amigos-bn-project.onrender.com",
	headers: {
		common: {
			"Content-Type": "application/json",
		},
	},
});

export const fetchCategory = () => {
	return async (dispatch) => {
		dispatch({
			type: FETCH_CATEGORY,
			payload: true,
		});
		try {
			let allProducts = [];
			let currentPage = 1;
			let totalPages = 1;

			while (currentPage <= totalPages) {
				const response = await fetch(
					`https://e-comm-team-amigos-bn-project.onrender.com/product?page=${currentPage}`,
					{
						headers: {
							"Content-Type": "application/json",
						},
					},
				);
				const data = await response.json();
				allProducts = [
					...allProducts,
					...data.responseData.listProduct,
				];
				currentPage++;
				totalPages = data.responseData.totalPages;
			}

			// Extract unique categories from the products
			const uniqueCategories = Array.from(
				new Set(allProducts.map((product) => product.category)),
			);

			dispatch({
				type: FETCH_CATEGORY_SUCCESS,
				payload: uniqueCategories,
			});
		} catch (error) {
			dispatch({ type: FETCH_CATEGORY_ERROR, payload: error });
		}
	};
};
