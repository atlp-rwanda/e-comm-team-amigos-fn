import {
	PRODUCT_CREATE_FAIL,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_START,
} from '../types';
import action from './actions';

export const create_product = (
	name,
	price,
	quantity,
	bonus,
	expiryDate,
	ec,
	category,
	imageUrl,
) => {
	return async (dispatch) => {
		dispatch({
			type: PRODUCT_CREATE_START,
			payload: true,
		});
		try {
			const token = localStorage.getItem('token');
			const response = await fetch(
				'https://e-comm-team-amigos-bn-project.onrender.com/product/create',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						name: name,
						quantity: quantity,
						price: price,
						category: category,
						expiryDate: expiryDate,
						bonus: bonus,
						ec: ec,
						available: 'True',
						images: imageUrl,
					}),
				},
			);
			const result = await response.json();
			if (response.status == 201) {
				dispatch({
					type: PRODUCT_CREATE_SUCCESS,
					payload: response.ok,
				});
				dispatch({
					type: PRODUCT_CREATE_START,
					payload: false,
				});
			} else if (response.status == 409) {
				dispatch({
					type: PRODUCT_CREATE_SUCCESS,
					payload: response.status,
				});
				dispatch({
					type: PRODUCT_CREATE_START,
					payload: false,
				});
			} else if (response.status == 401) {
				console.log(result);
				dispatch({
					type: PRODUCT_CREATE_SUCCESS,
					payload: result.error,
				});
				dispatch({
					type: PRODUCT_CREATE_START,
					payload: false,
				});
			} else if (response.status) {
				dispatch({
					type: PRODUCT_CREATE_SUCCESS,
					payload: response.status,
				});
				dispatch({
					type: PRODUCT_CREATE_START,
					payload: false,
				});
			}
		} catch (error) {
			dispatch({ type: PRODUCT_CREATE_FAIL, payload: error.message });
			dispatch({ type: PRODUCT_CREATE_START, payload: false });
		}
	};
};
