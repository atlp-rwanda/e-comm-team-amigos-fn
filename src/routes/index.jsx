import { Routes, Route } from 'react-router-dom';

import HomePage from '../views/HomePage.jsx';
import LoginPage from "../views/login/LoginPage.jsx";
import SignUp from '../views/sign-up/SignUp.jsx';
import VerrifyAccPage from '../views/verify-account/VerrifyAccPage.jsx';

const index = () => {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="/sign-up" element={<SignUp />} />
			<Route exact path="/login" element={<LoginPage />} />
			<Route
				exact
				path="/user/verify_email/:token"
				element={<VerrifyAccPage />}
			/>
		</Routes>
	);


};

export default index;
