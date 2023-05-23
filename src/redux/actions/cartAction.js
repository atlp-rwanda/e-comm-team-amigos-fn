import {
	ADD_TO_CART_ERROR,
	ADD_TO_CART_START,
	ADD_TO_CART_SUCCESS,
	CLEAR_CART,
	CLEAR_CART_ERROR,
	CLEAR_CART_SUCCESS,
	REMOVE_ONE_ITEM_CART,
	REMOVE_ONE_ITEM_CART_ERROR,
	REMOVE_ONE_ITEM_CART_SUCCESS,
} from '../types';
import {
	UPDATE_TO_CART_ERROR,
	UPDATE_TO_CART_START,
	UPDATE_TO_CART_SUCCESS,
} from '../types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const increment = () => {
	return {
		type: 'INCREMENT',
	};
};
export const decrement = () => {
	return {
		type: 'DECREMENT',
	};
};

export const addToCart = (quantity, id) => {
	return async (dispatch) => {
		dispatch({
			type: ADD_TO_CART_START,
			payload: true,
		});
		try {
			const token = localStorage.getItem('token');
			const response = await fetch(
				'https://e-comm-team-amigos-bn-project.onrender.com/cart',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						productId: id,
						quantity,
					}),
				},
			);

			const result = await response.json();
			if (response.status == 201) {
				dispatch({
					type: ADD_TO_CART_SUCCESS,
					payload: response.ok,
				});

				setTimeout(() => {
					dispatch({
						type: ADD_TO_CART_SUCCESS,
						payload: '',
					});
				}, 3000);
				dispatch({
					type: ADD_TO_CART_START,
					payload: false,
				});
			} else if (response.status == 400) {
				dispatch({
					type: ADD_TO_CART_SUCCESS,
					payload: result.error,
				});
				setTimeout(() => {
					dispatch({
						type: ADD_TO_CART_SUCCESS,
						payload: '',
					});
				}, 3000);
				dispatch({
					type: ADD_TO_CART_START,
					payload: false,
				});
			} else if (response.status == 401) {
				dispatch({
					type: ADD_TO_CART_SUCCESS,
					payload: response.status,
				});
				setTimeout(() => {
					dispatch({
						type: ADD_TO_CART_SUCCESS,
						payload: '',
					});
				}, 3000);
				dispatch({
					type: ADD_TO_CART_START,
					payload: false,
				});
			}
		} catch (error) {
			dispatch({ type: ADD_TO_CART_ERROR, payload: error.message });
			dispatch({ type: ADD_TO_CART_START, payload: false });
		}
	};
};

export const clearCart = () => {
	return async (dispatch) => {
		dispatch({
			type: CLEAR_CART,
			payload: true,
		});
		try {
			const token = localStorage.getItem('token');
			const response = await fetch(
				'https://e-comm-team-amigos-bn-project.onrender.com/cart/clean-up-cart',
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				},
			);
			dispatch({
				type: CLEAR_CART_SUCCESS,
				payload: response.status,
			});
			setTimeout(() => {
				dispatch({
					type: CLEAR_CART_SUCCESS,
					payload: null,
				});
			}, 3000);
			dispatch({
				type: CLEAR_CART,
				payload: false,
			});
		} catch (error) {
			dispatch({ type: CLEAR_CART_ERROR, payload: error.message });
			dispatch({
				type: CLEAR_CART,
				payload: false,
			});
		}
	};
};

export const removeItemCart = (productId) => {
	return async (dispatch) => {
		dispatch({
			type: REMOVE_ONE_ITEM_CART,
			payload: true,
		});
		try {
			const token = localStorage.getItem('token');
			const response = await fetch(
				`https://e-comm-team-amigos-bn-project.onrender.com/cart/delete-cart/${productId}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				},
			);
			dispatch({
				type: REMOVE_ONE_ITEM_CART_SUCCESS,
				payload: response.status,
			});
			setTimeout(() => {
				dispatch({
					type: REMOVE_ONE_ITEM_CART_SUCCESS,
					payload: '',
				});
			}, 3000);
			dispatch({
				type: REMOVE_ONE_ITEM_CART,
				payload: false,
			});
		} catch (error) {
			dispatch({
				type: REMOVE_ONE_ITEM_CART_ERROR,
				payload: error.message,
			});
			dispatch({
				type: REMOVE_ONE_ITEM_CART,
				payload: false,
			});
		}
	};
};
export const updateCart = (quantity, id) => {
	return async (dispatch) => {
		dispatch({
			type: UPDATE_TO_CART_START,
			payload: true,
		});
		try {
			console.log('You want to update something');
			const token = localStorage.getItem('token');
			const response = await fetch(
				`https://e-comm-team-amigos-bn-project.onrender.com/cart/updateCart/${id}`,
				{
					method: 'PUT',
					headers: {
						'Content-type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						productId: id,
						quantity,
					}),
				},
			);
			const result = await response.json();
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
					type: UPDATE_TO_CART_ERROR,
					payload: result.error,
				});
				dispatch({
					type: UPDATE_TO_CART_START,
					payload: false,
				});
				dispatch({
					type: UPDATE_TO_CART_START,
					payload: false,
				});
				toast.error(result.error); // Toast the error message
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
			toast.error(error.message); // Toast the error message
		}
	};
};
