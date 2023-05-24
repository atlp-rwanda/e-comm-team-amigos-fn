import { actionTypes } from './actionTypes';

const initialState = {
	fetchingUser: false,
	addOrRemovingRole: false,
	roles: null,
	user: null,
	errorMsg: '',
	addRoleSuccessInfo: null,
	removeRoleSuccessInfo : null,
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case actionTypes.FETCHING_ROLES_SUCCEED:
			return {
				...state,
				roles: payload,
			};

		case actionTypes.FETCHING_ROLES_FAIL:
			return {
				...state,
				errorMsg: payload,
			};

		case actionTypes.FETCHING_USER_START:
			return {
				...state,
				fetchingUser: true,
			};

		case actionTypes.FETCHING_USER_SUCCEED:
			return {
				...state,
				fetchingUser: false,
				user: payload,
			};

		case actionTypes.FETCHING_USER_FAIL:
			return {
				...state,
				fetchingUser: false,
				errorMsg: payload,
			};

		case actionTypes.ADDING_ROLE:
			return {
				...state,
				addOrRemovingRole: true,
			};

		case actionTypes.ADDING_SUCCEED:
			const { name } = state.roles.find((role) => role.id === payload);
			return {
				...state,
				addOrRemovingRole: false,
				user: {
					...state.user,
					userRoles: [...state.user.userRoles, name.toLowerCase()],
				},
			};

		case actionTypes.ADD_ROLE_SUCCESS_INFO:
			return {
				...state,
				addRoleSuccessInfo: payload,
			};

		case actionTypes.ADDING_FAIL:
			return {
				...state,
				addOrRemovingRole: false,
				errorMsg: payload,
			};

		case actionTypes.REMOVING_ROLE:
			return {
				...state,
				addOrRemovingRole: true,
			};

		case actionTypes.REMOVING_SUCCEED:
			return {
				...state,
				addOrRemovingRole: false,
				user: {
					...state.user,
					userRoles: [...state.user.userRoles].filter(
						(role) =>
							role !==
							state.roles
								.find((role) => role.id === payload)
								.name.toLowerCase(),
					),
				},
			};
		
		case actionTypes.REMOVING_SUCCEED_INFO:
			return {
				...state,
				removeRoleSuccessInfo: payload,
			};

		case actionTypes.REMOVING_FAIL:
			return {
				...state,
				addOrRemovingRole: false,
				errorMsg: payload,
			};

		default:
			return state;
	}
}
