import { combineReducers } from 'redux';
import signupFormReducer from './signup-form/signup-form.reducer';
import verifyEmailReducer from './verify-email/verifyEmail.reducer';
import resetPasswordReducer from './reducer/resetPassword';
import loginReducer from './reducer/login';

const rootReducer = combineReducers({
	signupForm: signupFormReducer,
	verifyEmail: verifyEmailReducer,
	resetPasswordState: resetPasswordReducer,
	loginState: loginReducer,
});

export default rootReducer;