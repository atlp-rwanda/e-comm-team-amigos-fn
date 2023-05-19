import axios from 'axios';
import { actionTypes } from './actionTypes.js';

const handleError = (error, dispatch) => {
	if (typeof error.response.data === 'string') {
		dispatch({
			type: actionTypes.SIGNUP_FAIL,
			payload: error.response.data,
		});
	} else {
		dispatch({
			type: actionTypes.SIGNUP_FAIL,
			payload: error.response.data.error,
		});
	}
};

export const signUp = (user) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: actionTypes.SIGNING_UP,
			});

			const res = await axios.post(
				`${
					process.env.BASE_URL ||
					"https://e-comm-team-amigos-bn-project.onrender.com"
				}/user/create`,
				user,
			);

			if (res.status === 201) {
				dispatch({
					type: actionTypes.SIGNUP_SUCCESS,
				});
			}
		} catch (error) {
			handleError(error, dispatch);
		}
	};
};
