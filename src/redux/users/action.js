import axios from 'axios';
import { actionTypes } from './actionTypes.js';

const generatePayload = (res) => {
	return {
		users: res.data.response.users,
		currPage: res.data.response.currentPage,
		nextPage: res.data.response.nextPage,
		prevPage: res.data.response.previousPage,
		totalPages: res.data.response.totalPages,
	};
};

export const getUsers = (page = 1) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: actionTypes.FETCHING_USERS_START,
			});

			const res = await axios.get(
				`${
					process.env.BASE_URL ||
					"https://e-comm-team-amigos-bn-project.onrender.com"
				}/users?page=${page}`,
			);

			if (res.status === 200) {
				dispatch({
					type: actionTypes.FETCHING_USERS_SUCCEED,
					payload: generatePayload(res),
				});
			}
		} catch (error) {
			handleError(error, dispatch);
		}
	};
};

const handleError = (error, dispatch) => {
	dispatch({
		type: actionTypes.FETCHING_USERS_FAIL,
		payload: 'Error ocurrered',
	});
};
