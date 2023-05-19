import { combineReducers } from "redux";
import signupFormReducer from "./signup-form/signup-form.reducer";
import verifyEmailReducer from "./verify-email/verifyEmail.reducer";
import resetPasswordReducer from "./reducer/resetPassword";
import loginReducer from "./reducer/login";
import usersReducer from "./users/usersReducer";
import rolesReducer from "./roles/rolesReducer";
import productReducer from "./reducer/create_product_reducer";
import homeDataReducer from "./homeData.reducer";
import fetchProductReducer from "./reducer/product";
import handleClickReducer from "./reducer/handleClick";
import productUpdateReducer from "./reducer/update_product";
import reviewsReducer from "./reviews/reviewsReducer";
import counterReducer from "./reducer/counter";
import addToCartReducer from "./reducer/addToCartReducer";
import isOpenReducer from "./reducer/isOpenModel";
import viewcartReducer from "./reducer/viewcartReducer";
import relatedProductReducer from "./RelatedProducts/reducer";

const rootReducer = combineReducers({
	signupForm: signupFormReducer,
	verifyEmail: verifyEmailReducer,
	resetPasswordState: resetPasswordReducer,
	loginState: loginReducer,
	productState: productReducer,
	homeData: homeDataReducer,
	fetchProductState: fetchProductReducer,
	handleClickState: handleClickReducer,
	roles: rolesReducer,
	users: usersReducer,
	productUpdateState: productUpdateReducer,
	reviews: reviewsReducer,
	counter: counterReducer,
	cart: addToCartReducer,
	openModel: isOpenReducer,
	viewCart: viewcartReducer,
	relatedProductState: relatedProductReducer,
});

export default rootReducer;
