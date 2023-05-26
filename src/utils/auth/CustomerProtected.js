import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export function checkTokenValidity(token) {
	if (!token) {
		return false;
	}
	try {
		const decoded = jwt_decode(token);
		const currentTime = Date.now() / 1000;
		return decoded.exp >= currentTime;
	} catch (error) {
		return false;
	}
}

export function getUserRole() {
	const user = JSON.parse(localStorage.getItem("user"));
	return user?.userRoles || [];
}

const CustomerProtected = ({ children }) => {
	const token = localStorage.getItem("token");
	const validToken = checkTokenValidity(token);
	const userRoles = getUserRole();
	if (!validToken) {
		return <Navigate to="/login" />;
	} else if (!userRoles.includes("Customer")) {
		return <Navigate to="/" />;
	} else {
		return children;
	}
};

export default CustomerProtected;
