import jwtDecode from "jwt-decode";

export default function getUserId() {
	const token = localStorage.getItem("token");
	if (!token) return "";
	else {
		const user = jwtDecode(token);
		return user.userId;
	}
}
