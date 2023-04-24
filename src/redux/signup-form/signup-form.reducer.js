import { initialFormState as user } from './form-user-initial-state.js';
import { actionTypes } from './actionTypes.js';
const INITIAL_STATE = {
	formDataValid: false,
	creatingAcc: false,
	accCreated: false,
	errorMsg: '',
	user,
};

const handleOnchange = (state, action) => {
	return {
		...state,
		user: {
			...state.user,
			[action.payload.name]: {
				...state.user[action.payload.name],
				value: action.payload.value,
				valid: action.payload.valid || false,
			},
		},
		formDataValid: action.payload.formValid,
	};
};

const signupFormReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.SIGNING_UP:
			return { ...state, creatingAcc: true, errorMsg: '' };
		case actionTypes.SIGNUP_SUCCESS:
			return {
				...state,
				creatingAcc: false,
				accCreated: true,
			};
		case actionTypes.SIGNUP_FAIL:
			return { ...state, errorMsg: action.payload, creatingAcc: false };
		case actionTypes.ON_CHANGE:
			return handleOnchange(state, action);

		default:
			return state;
	}
};
export default signupFormReducer;
