import { combineReducers } from 'redux';
import signupFormReducer from './signup-form/signup-form.reducer';
import verifyEmailReducer from './verify-email/verifyEmail.reducer';
import resetPasswordReducer from './reducer/resetPassword';
import loginReducer from './reducer/login';
import usersReducer from './users/usersReducer';
import rolesReducer from './roles/rolesReducer';
import homeDataReducer from './homeData.reducer';

const rootReducer = combineReducers({
	signupForm: signupFormReducer,
	verifyEmail: verifyEmailReducer,
	resetPasswordState: resetPasswordReducer,
	loginState: loginReducer,
	users: usersReducer,
	roles: rolesReducer,
	homeData: homeDataReducer,
});

export default rootReducer;
