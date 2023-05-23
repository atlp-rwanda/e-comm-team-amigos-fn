import axios from "axios";

const api = axios.create({
	baseURL:
		// eslint-disable-next-line no-undef
		process.env.BACKEND_URL ||
		"https://e-comm-team-amigos-bn-project.onrender.com",
	headers: {
		common: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	},
});

// ACTION TYPES
export const GET_PRODUCTS_START = "GET_PRODUCTS_START";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const LOAD_MORE_START = "LOAD_MORE_START";
export const LOAD_MORE_ERROR = "LOAD_MORE_ERROR";
export const LOAD_MORE_SUCCESS = "LOAD_MORE_SUCCESS";
export const FILTER_CATEGORY = "FILTER_CATEGORY";

// ACTIONS CREATORS
export const getAllProducts = () => ({
	type: GET_PRODUCTS_START,
});

export const getAllProductsError = () => ({
	type: GET_PRODUCTS_ERROR,
});

export const getAllProductsSuccess = (payload) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload,
});

export const loadMoreProducts = () => ({
	type: LOAD_MORE_START,
});

export const loadMoreProductsError = () => ({
	type: LOAD_MORE_ERROR,
});

export const loadMoreProductsSuccess = (payload) => ({
	type: LOAD_MORE_SUCCESS,
	payload,
});

export const filterCategory = (payload) => ({
	type: FILTER_CATEGORY,
	payload,
});

export function fetchAllProducts() {
	return async (dispatch) => {
		dispatch(getAllProducts());
		try {
			const path = "/product";
			const res = await api.get(path, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});

			if (res.status == 200) {
				dispatch(getAllProductsSuccess(res.data.responseData));
			} else dispatch(getAllProductsError());
		} catch (err) {
			dispatch(getAllProductsError());
		}
	};
}

export function fetchUpdateAllProducts(page) {
	return async (dispatch) => {
		dispatch(loadMoreProducts());
		try {
			const path = `/product?page=${page}`;
			const res = await api.get(path, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});

			if (res.status == 200) {
				dispatch(loadMoreProductsSuccess(res.data.responseData));
			} else dispatch(loadMoreProductsError());
		} catch (err) {
			dispatch(loadMoreProductsError());
		}
	};
}
