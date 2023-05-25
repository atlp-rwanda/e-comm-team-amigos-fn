import { toast } from "react-toastify";

export default function logout() {
	try {
		localStorage.clear();
		window.location = "/";
		toast.success("Sign out Successful");
	} catch (e) {
		toast.error("Could not sign out");
	}
}
