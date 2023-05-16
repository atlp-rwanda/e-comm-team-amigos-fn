import axios from 'axios';
import { actionTypes } from './actionTypes';

const handleError = (error, dispatch) => {
	if (error.response.data.message) {
		dispatch({
			type: actionTypes.VERIFYING_FAIL,
			payload: error.response.data.message,
		});
	} else {
		dispatch({
			type: actionTypes.VERIFYING_FAIL,
			payload: error.response.data.error,
		});
	}
};

export const verifyEmail = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`${
					process.env.BASE_URL ||
					"https://e-comm-team-amigos-bn-project.onrender.com"
				}/user/verify_email/${token}`,
			);

			if (res.status === 200) {
				dispatch({
					type: actionTypes.VERIFYING_SUCCESS,
				});
			}
		} catch (error) {
			handleError(error, dispatch);
		}
	};
};
