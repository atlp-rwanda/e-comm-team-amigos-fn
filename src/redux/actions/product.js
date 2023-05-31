import {
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_ERROR,
	FETCH_PRODUCT_START,
	DELETE_PRODUCT,
	DELETE_PRODUCT_SUCCESS,
	DELETE_PRODUCT_ERROR,
	VIEW_PRODUCT,
	UPDATE_PRODUCT,
} from "../types";
import action from "./action";
import axios from "axios";
import authHeader from "../authHeader";

const api = axios.create({
	baseURL: "https://e-comm-team-amigos-bn-project.onrender.com",
	headers: {
		common: {
			"Content-Type": "application/json",
		},
	},
});

const ENDPOINT = "https://e-comm-team-amigos-bn-project.onrender.com";

export const fetchProduct = (page) => {
	const token = localStorage.getItem("token");
	return (dispatch) => {
		dispatch(action(FETCH_PRODUCT_START, true));
		api.get(`/product/collection?page=${page}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				dispatch(action(FETCH_PRODUCT_SUCCESS, response.data.items));
				dispatch(action(FETCH_PRODUCT_START, false));
			})
			.catch((error) => {
				dispatch(action(FETCH_PRODUCT_START, false));
				dispatch(action(FETCH_PRODUCT_ERROR, error));
			});
	};
};

export const viewSingleProduct = (productId) => ({
	type: VIEW_PRODUCT,
	payload: productId,
});

export const updateProductAction = (id) => ({
	type: UPDATE_PRODUCT,
	payload: id,
});

export const deleteProduct = () => ({
	// start loading
	type: DELETE_PRODUCT,
});

export const deleteProductSuccess = (id) => ({
	//stop loading, payload products[]
	type: DELETE_PRODUCT_SUCCESS,
	payload: id,
});

export const deleteProductFailure = () => ({
	type: DELETE_PRODUCT_ERROR,
});

export function deleteProductCall(id) {
	return async (dispatch) => {
		dispatch(deleteProduct()); // loading:true
		try {
			const path = `/product/delete/${id}`;
			const res = await axios.delete(`${ENDPOINT}${path}`, {
				headers: authHeader(),
			});
			if (res.status == 200) dispatch(deleteProductSuccess(id));
			// loading:false, hasError:false
			else dispatch(deleteProductFailure()); // loading: false, hasError: true
		} catch (err) {
			dispatch(deleteProductFailure());
		}
	};
}
