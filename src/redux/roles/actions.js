import axios from 'axios';
import { actionTypes } from './actionTypes.js';

export const getRoles = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`${
					process.env.LIVE_API_URL ||
					'https://e-comm-team-amigos-bn-project.onrender.com'
				}/roles`,
			);

			const roles = res.data.response.roles.map((role) => {
				return { id: role.id, name: role.name };
			});

			if (res.status === 200) {
				dispatch({
					type: actionTypes.FETCHING_ROLES_SUCCEED,
					payload: roles,
				});
			}
		} catch (error) {
			handleError(error, dispatch);
		}
	};
};

const url =
	process.env.LIVE_API_URL ||
	'https://e-comm-team-amigos-bn-project.onrender.com';

const generatePayload = (res) => {
	return {
		...res.data.response,
		userRoles: res.data.response.userRoles.reduce((acc, role) => {
			return [...acc, role.Role.name.toLowerCase()];
		}, []),
	};
};

export const getUser = (email) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: actionTypes.FETCHING_USER_START,
			});

			const res = await axios.get(`${url}/roles/user-roles/${email}`);

			const payload = generatePayload(res);
			if (res.status === 200) {
				dispatch({
					type: actionTypes.FETCHING_USER_SUCCEED,
					payload,
				});
			}
		} catch (error) {
			dispatch({
				type: actionTypes.FETCHING_USER_FAIL,
				payload: 'Error ocurrered',
			});
		}
	};
};

export const addRole = (userId, roleId) => {
	return async (dispatch) => {
		dispatch({
			type: actionTypes.ADDING_ROLE,
		});
		try {
			const res = await axios.post(
				`${
					process.env.LIVE_API_URL ||
					'https://e-comm-team-amigos-bn-project.onrender.com'
				}/role/set`,
				{ userId, roleId },
			);

			if (res.status === 201) {
				dispatch({
					type: actionTypes.ADDING_SUCCEED,
					payload: roleId,
				});
			}
		} catch (error) {
			dispatch({
				type: actionTypes.FETCHING_USER_FAIL,
				payload: 'Error ocurrered',
			});
		}
	};
};

export const removeRole = (userId, roleId) => {
	return async (dispatch) => {
		dispatch({
			type: actionTypes.REMOVING_ROLE,
		});
		try {
			const res = await axios.delete(`${url}/role/remove-role`, {
				data: {
					userId,
					roleId,
				},
			});

			if (res.status === 200) {
				dispatch({
					type: actionTypes.REMOVING_SUCCEED,
					payload: roleId,
				});
			}
		} catch (error) {
			dispatch({
				type: actionTypes.FETCHING_USER_FAIL,
				payload: 'Error ocurrered',
			});
		}
	};
};

const handleError = (error, dispatch) => {
	dispatch({
		type: actionTypes.FETCHING_ROLES_FAIL,
		payload: 'Error ocurrered',
	});
};
