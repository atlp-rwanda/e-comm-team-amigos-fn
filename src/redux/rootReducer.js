import { combineReducers } from 'redux';
import signupFormReducer from './signup-form/signup-form.reducer';
import verifyEmailReducer from './verify-email/verifyEmail.reducer';
import resetPasswordReducer from './reducer/resetPassword';
import loginReducer from './reducer/login';
import productReducer from './reducer/create_product_reducer';
import homeDataReducer from './homeData.reducer';

const rootReducer = combineReducers({
	signupForm: signupFormReducer,
	verifyEmail: verifyEmailReducer,
	resetPasswordState: resetPasswordReducer,
	loginState: loginReducer,
	productState: productReducer,
	homeData: homeDataReducer,
});

export default rootReducer;
