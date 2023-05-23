import { toast } from "react-toastify";

import {
	ADD_TO_WISHLIST_ERROR,
	ADD_TO_WISHLIST_START,
	ADD_TO_WISHLIST_SUCCESS,
	VIEW_WISHLIST_START,
	VIEW_WISHLIST_SUCCESS,
	REMOVE_FROM_WISHLIST_ERROR,
	REMOVE_FROM_WISHLIST_START,
	REMOVE_FROM_WISHLIST_SUCCESS,
} from "../types";

export const addToWishlist = (id) => {
	return async (dispatch) => {
		dispatch({
			type: ADD_TO_WISHLIST_START,
			payload: true,
		});

		try {
			const token = localStorage.getItem("token");
			const response = await fetch(
				`https://e-comm-team-amigos-bn-project.onrender.com/wishlist/add/${id}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				},
			);

			const result = await response.json();
			if (response.status === 200) {
				dispatch({
					type: ADD_TO_WISHLIST_SUCCESS,
					payload: response.ok,
				});
				dispatch(viewWishlist());
				dispatch({
					type: ADD_TO_WISHLIST_START,
					payload: true,
				});
				dispatch({
					type: ADD_TO_WISHLIST_START,
					payload: false,
				});
				toast.success("Added to wishlist.");
			} else if (response.status === 409) {
				dispatch({
					type: ADD_TO_WISHLIST_SUCCESS,
					payload: result.message,
				});
				dispatch({
					type: ADD_TO_WISHLIST_START,
					payload: false,
				});
				toast.info("Product already to the wishlist..");
			} else if (response.status === 401) {
				dispatch({
					type: ADD_TO_WISHLIST_SUCCESS,
					payload: response.status,
				});
				dispatch({
					type: ADD_TO_WISHLIST_START,
					payload: false,
				});
				toast.error(
					"Could not add this product to the wishlist. Not authenticated..",
				);
			} else if (response.status === 500) {
				dispatch({
					type: ADD_TO_WISHLIST_SUCCESS,
					payload: response.status,
				});
				dispatch({
					type: ADD_TO_WISHLIST_START,
					payload: false,
				});
				toast.error(
					"Could not add this product to the wishlist. Login first",
				);
			}
		} catch (error) {
			dispatch({ type: ADD_TO_WISHLIST_ERROR, payload: error.message });
			dispatch({ type: ADD_TO_WISHLIST_START, payload: false });
			toast.error(
				"Could not add this product to the wishlist. Network error!",
			);
		}
	};
};

export const viewWishlist = () => {
	const authToken = localStorage.getItem("token");
	return async (dispatch) => {
		dispatch({
			type: VIEW_WISHLIST_START,
			payload: true,
		});
		const apiUrl =
			"https://e-comm-team-amigos-bn-project.onrender.com/wishlist/all";
		fetch(apiUrl, {
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Request failed.");
				}
				return response.json();
			})
			.then((data) => {
				dispatch({
					type: VIEW_WISHLIST_SUCCESS,
					payload: data.wishlistItems,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};
};

export const removeFromWishlist = (id) => {
	const authToken = localStorage.getItem("token");
	return async (dispatch) => {
		dispatch({
			type: REMOVE_FROM_WISHLIST_START,
			payload: true,
		});

		try {
			const response = await fetch(
				`https://e-comm-team-amigos-bn-project.onrender.com/wishlist/remove/${id}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${authToken}`,
					},
				},
			);

			if (response.status === 200) {
				dispatch({
					type: REMOVE_FROM_WISHLIST_SUCCESS,
					payload: id,
				});
				dispatch({
					type: REMOVE_FROM_WISHLIST_START,
					payload: true,
				});
				dispatch({
					type: REMOVE_FROM_WISHLIST_START,
					payload: false,
				});
			} else {
				const errorData = await response.json();
				dispatch({
					type: REMOVE_FROM_WISHLIST_ERROR,
					payload: errorData.message,
				});
			}
		} catch (error) {
			dispatch({
				type: REMOVE_FROM_WISHLIST_ERROR,
				payload: error.message,
			});
		}
	};
};
