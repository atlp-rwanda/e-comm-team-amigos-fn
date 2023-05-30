import { getUserRole } from "../auth/isAuthorized";

	
export const handleLoginResponse = (loginSuccess, navigation, toast) => {
	if (loginSuccess?.message === "User Logged Successfully") {
		toast.success(loginSuccess?.message);
		setTimeout(() => {
			const role = getUserRole();
			const customer=role?.filter(role => role === "Customer");
			if (customer[0]) {
				navigation("/");
			}
			else {
				navigation("/dashboard");
			}
		}, 5000);
	
	} 
	else if (loginSuccess?.message === "Enter OTP to be be verified") {
		toast.success(loginSuccess?.message);
		setTimeout(() => {
      navigation("/authentication", { state:{ loginSuccess } });
		}, 5000);
	}
	else {
		toast.error(loginSuccess?.message || loginSuccess?.error);
		setTimeout(() => {
			navigation("/login");
		}, 5000);
	}

};
