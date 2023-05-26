import { Routes, Route } from "react-router-dom";
import Root from "../components/orders/Root.jsx";
import ResetPassword from "../views/resetPassword/resetPassword/index.jsx";
import ConfirmNewPassword from "../views/resetPassword/confirmNewPassword/index.jsx";
import SignUp from "../views/sign-up/SignUp.jsx";
import DashboardNav from "../views/dashboard/navigation/index.jsx";
import Authentication from "../views/login/Authentication.jsx";
import HomePage from "../views/HomePage.jsx";
import LoginPage from "../views/login/LoginPage.jsx";
import VerrifyAccPage from "../views/verify-account/VerrifyAccPage.jsx";
import SuccessPage from "../components/SuccessPage.jsx";
import Users from "../components/users/Users.jsx";
import Roles from "../components/roles/Roles.jsx";
import Dashboard from "../views/dashboard/index.jsx";
import Product from "../views/dashboard/product/index.jsx";
import Unauthorized from "../views/protectedRoutes/unauthorized.jsx";
import Layout from "../views/protectedRoutes/layout.js";
import IsAuthorized from "../utils/auth/isAuthorized.js";
import ProductDetailsPage from "../views/ProductDetailsPage.jsx";
import SearchPage from "../views/SearchPage.jsx";
import ViewCart from "../views/addToCart/viewCart.jsx";
import AddToCart from "../views/addToCart/addtoCart.jsx";
import CheckoutPage from "../views/CheckoutPage.jsx";
import CheckoutSuccessPage from "../views/payment/checkoutSuccessPage.jsx";
import CancelPaymentPage from "../views/payment/checkoutCancel.jsx";
import UpdatePasswordPage from "../views/updatePassword/UpdatePasswordPage.jsx";
import WishlistPage from "../views/wishlist/Wishlist.jsx";
import Chat from "../views/chat/Chat.jsx";
import Orders from "../components/orders/Orders.jsx";
import Order from "../components/order/Order.jsx";
import CustomerProtected from "../utils/auth/CustomerProtected.js";

const index = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/sign-up" element={<SignUp />} />
				<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/success" element={<SuccessPage />} />
				<Route
					exact
					path="/checkout-success"
					element={<CheckoutSuccessPage />}
				/>
				<Route
					exact
					path="/checkout-cancel"
					element={<CancelPaymentPage />}
				/>
				<Route
					exact
					path="/user/verify_email/:token"
					element={<VerrifyAccPage />}
				/>
				<Route
					exact
					path="/reset-password"
					element={<ResetPassword />}
				/>
				<Route
					exact
					path="/user/resetPassword/:token"
					element={<ConfirmNewPassword />}
				/>
				<Route
					exact
					path="/dashboard"
					element={
						<IsAuthorized>
							<DashboardNav />
						</IsAuthorized>
					}
				>
					<Route index element={<Dashboard />} />
					<Route
						exact
						path="/dashboard/product"
						element={<Product />}
					/>
					<Route
						exact
						path="/dashboard/update-password"
						element={<UpdatePasswordPage />}
					/>
					<Route path="users" element={<Users />} />
					<Route exact path="roles" element={<Roles />} />
				</Route>

				<Route
					exact
					path="/customer/orders"
					element={
						<CustomerProtected>
							<Root />
						</CustomerProtected>
					}
				>
					<Route path="history" element={<Orders />} />
					<Route path=":orderId" element={<Order />} />
				</Route>

				<Route
					exact
					path="/authentication"
					element={<Authentication />}
				/>
				<Route exact path="unauthorized" element={<Unauthorized />} />
				<Route exact path="*" element={<div>Page Not Found!!</div>} />
			</Route>
			<Route exact path="/products" element={<SearchPage />}></Route>
			<Route
				exact
				path="/update-password"
				element={<UpdatePasswordPage />}
			/>
			<Route
				exact
				path="/product/:id"
				element={<ProductDetailsPage />}
			></Route>
			<Route exact path="/authentication" element={<Authentication />} />
			<Route exact path="/cart" element={<AddToCart />} />
			<Route
				exact
				path="/checkout"
				element={
					<IsAuthorized>
						<CheckoutPage />
					</IsAuthorized>
				}
			/>
			<Route
				exact
				path="/user/wishlist"
				element={
					<IsAuthorized>
						<WishlistPage />
					</IsAuthorized>
				}
			/>
			<Route
				exact
				path="/user/viewcart"
				element={
					<IsAuthorized>
						<ViewCart />
					</IsAuthorized>
				}
			/>

			<Route
				exact
				path="/chat"
				element={
					<IsAuthorized>
						<Chat />
					</IsAuthorized>
				}
			/>
		</Routes>
	);
};

export default index;
