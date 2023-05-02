import { combineReducers } from 'redux';
import signupFormReducer from './signup-form/signup-form.reducer';
import verifyEmailReducer from './verify-email/verifyEmail.reducer';

const rootReducer = combineReducers({
	signupForm: signupFormReducer,
	verifyEmail: verifyEmailReducer,
});

export default rootReducer;
