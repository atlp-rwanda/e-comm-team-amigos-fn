import {
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_ERROR,
	FETCH_PRODUCT_START,
} from "../types";
import action from "./action";
import axios from "axios";

const api = axios.create({
	baseURL: "https://e-comm-team-amigos-bn-project.onrender.com",
	headers: {
		common: {
			"Content-Type": "application/json",
		},
	},
});

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
