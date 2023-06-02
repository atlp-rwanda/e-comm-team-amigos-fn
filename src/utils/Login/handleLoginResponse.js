import { getUserRole } from "../auth/isAuthorized";

export const handleLoginResponse = (loginSuccess, navigation, toast) => {
	if (loginSuccess?.message === "User Logged Successfully") {
		toast(loginSuccess?.message);
		setTimeout(() => {
			const role = getUserRole();
			const customer=role?.filter(role => role === "Customer");
			for (var i = 0; i < role.length; i++) {
			   if (role[i]!== "Admin") {
				   navigation("/");
		    	}
			    else {
				   navigation("/dashboard");
			    }
	     	}

		}, 5000);
	} else {
		toast(loginSuccess?.message || loginSuccess?.error);
		setTimeout(() => {
			// navigation("/login");
		}, 5000);
	}
	if (loginSuccess?.message === "Enter OTP to be be verified") {
		toast(loginSuccess?.error);
		setTimeout(() => {
      navigation("/authentication", { state:{ loginSuccess } });
		}, 5000);
	}
};