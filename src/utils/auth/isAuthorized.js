import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import DashboardNav from "../../views/dashboard/navigation/index.jsx";

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

const IsAuthorized = ({ children }) => {
	const token = localStorage.getItem("token");
	const validToken = checkTokenValidity(token);
	if (!validToken) {
		return < Navigate to="/login" />;
	}
	return children;
};

export function IsAdmin() {
	const user = JSON.parse(localStorage.getItem("user"));
	const role = getUserRole();
	for (var i = 0; i < role.length; i++) {
	   if (role[i] !== "Admin") {
		  return <Navigate to="/" />;
	   }
	}
	return <Navigate to="/login" />;
}

export default IsAuthorized;