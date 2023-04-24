import { actionTypes } from './actionTypes';

const INITIAL_STATE = {
	accVerified: false,
	verError: '',
};

const verifyEmailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.VERIFYING_SUCCESS:
			return {
				...state,
				accVerified: true,
			};
		case actionTypes.VERIFYING_FAIL:
			return {
				...state,
				accVerified: false,
				verError: action.payload,
			};

		default:
			return state;
	}
};
export default verifyEmailReducer;
