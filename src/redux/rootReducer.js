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
import relatedProductReducer from "./RelatedProducts/reducer";
import profileReducer from "./profile/reducer";
import paymentReducer from "./reducer/payment";
import ordersReducers from "./orders/ordersReducer";
import viewcartReducer from "./reducer/viewcartReducer";
import viewWishlistReducer from "./reducer/wishlist/viewWishlist";
import removeFromWishlistReducer from "./reducer/wishlist/removeFromWishlist";
import addToWishlistReducer from "./reducer/wishlist/addTowishlist";
import clearCartReducer from "./reducer/clearCartReducer";
import UpdatePasswordReducer from "./reducer/updatePassword";
import allproductsReducer from "./allProducts/reducer";
import UpdateCartReducer from "./reducer/updateCartReducer";
import notificationReducer from "./reducer/notification";
import cartItems from "./reducer/cartItems";
import chatReducer from "./chat/chatReducer";
import disableUserReducer from "./reducer/disableUser/disableUser";
import enableUserReducer from "./reducer/disableUser/enableUser";

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
	items: cartItems,
	cart: addToCartReducer,
	openModel: isOpenReducer,
	viewCart: viewcartReducer,
	relatedProductState: relatedProductReducer,
	profile: profileReducer,
	payment: paymentReducer,
	wishlist: viewWishlistReducer,
	removeWishlist: removeFromWishlistReducer,
	addToWishlist: addToWishlistReducer,
	chatState: chatReducer,
	clearCart: clearCartReducer,
	updateCartState: UpdateCartReducer,
	updatePasswordState: UpdatePasswordReducer,
	orders: ordersReducers,
	notification: notificationReducer,
	products: allproductsReducer,
	disableUserState: disableUserReducer,
	enableUserState: enableUserReducer,
});

export default rootReducer;
