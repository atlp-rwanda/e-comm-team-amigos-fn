import { Routes, Route } from "react-router-dom";
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
					<Route path="users" element={<Users />} />
					<Route exact path="roles" element={<Roles />} />
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
				path="/product/:id"
				element={<ProductDetailsPage />}
			></Route>
			<Route exact path="/authentication" element={<Authentication />} />
			<Route exact path="/cart" element={
				<IsAuthorized>
					<AddToCart />
					</IsAuthorized>
				} />
			<Route exact path="/viewcart" element={
				<IsAuthorized>
					<ViewCart/>
					</IsAuthorized>
				} />
		</Routes>
	);
};

export default index;
