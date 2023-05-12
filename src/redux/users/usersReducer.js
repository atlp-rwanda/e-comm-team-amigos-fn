import { actionTypes } from './actionTypes.js';
const initialState = {
	fetchingUsers: false,
	currPage: 1,
	nextPage: null,
	prevPage: null,
	totalPages: null,
	users: null,
	errorMsg: '',
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case actionTypes.FETCHING_USERS_START:
			return {
				...state,
				fetchingUsers: true,
			};

		case actionTypes.FETCHING_USERS_SUCCEED:
			return {
				...state,
				fetchingUsers: false,
				users: payload.users,
				currPage: payload.currPage,
				nextPage: payload.nextPage,
				prevPage: payload.prevPage,
				totalPages: payload.totalPages,
			};

		case actionTypes.FETCHING_USERS_FAIL:
			return {
				...state,
				fetchingUsers: false,
				errorMsg: payload,
			};

		case actionTypes.CHANGE_PAGE:
			return {
				...state,
				fetchingUsers: true,
				currPage: payload,
				users: null,
			};

		default:
			return state;
	}
}
