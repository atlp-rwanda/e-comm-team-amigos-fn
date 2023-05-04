import { Routes, Route } from "react-router-dom";
import ResetPassword from "../views/resetPassword/resetPassword/index.jsx";
import ConfirmNewPassword from "../views/resetPassword/confirmNewPassword/index.jsx";
import SignUp from "../views/sign-up/SignUp.jsx";
import DashboardNav from "../views/dashboard/navigation/index.jsx";
import Authentication from "../views/login/Authentication.jsx";
import HomePage from '../views/HomePage.jsx';
import LoginPage from '../views/login/LoginPage.jsx';
import VerrifyAccPage from '../views/verify-account/VerrifyAccPage.jsx';
import SuccessPage from '../components/SuccessPage.jsx';
import Dashboard from '../views/dashboard/index.jsx';
import Product from '../views/dashboard/product/index.jsx';

import CreateProduct from "../views/create-product/CreateProduct.jsx";
const index = () => {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="/sign-up" element={<SignUp />} />
			<Route exact path="/login" element={<LoginPage />} />
			<Route exact path="/success" element={<SuccessPage />} />
			<Route exact path="/user/verify_email/:token" element={<VerrifyAccPage />} />
			<Route exact path="/reset-password" element={<ResetPassword />} />
			<Route exact path="/user/resetPassword/:token" element={<ConfirmNewPassword />} />
			<Route exact path='dashboard' element={<DashboardNav/>}>
				<Route index element={<Dashboard />} />
				<Route exact path="product" element={<Product/>} />
			</Route>
			<Route exact path="/authentication" element={<Authentication />} />
		</Routes>
	);
};

export default index;
