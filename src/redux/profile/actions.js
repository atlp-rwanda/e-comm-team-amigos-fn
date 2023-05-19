import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
	baseURL:
		// eslint-disable-next-line no-undef
		process.env.BACKEND_URL ||
		"https://e-comm-team-amigos-bn-project.onrender.com",
	headers: {
		common: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	},
});

// ACTION TYPES
export const FETCH_START = "FETCH_START";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const UPDATE_START = "UPDATE_START";
export const UPDATE_ERROR = "UPDATE_ERROR";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";

// ACTIONS CREATORS
export const getProfile = () => ({
	type: FETCH_START,
});

export const getProfileError = () => ({
	type: FETCH_ERROR,
});

export const getProfileSuccess = (payload) => ({
	type: FETCH_SUCCESS,
	payload,
});

export const updateProfile = () => ({
	type: UPDATE_START,
});

export const updateProfileError = () => ({
	type: UPDATE_ERROR,
});

export const updateProfileSuccess = (payload) => ({
	type: UPDATE_SUCCESS,
	payload,
});

export function fetchProfile() {
	return async (dispatch) => {
		dispatch(getProfile());
		try {
			const path = "/user/profile";
			const res = await api.get(path, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});

			if (res.status == 200) {
				dispatch(getProfileSuccess(res.data.profile));
			} else dispatch(getProfileError());
		} catch (err) {
			dispatch(getProfileError());
		}
	};
}

export function fetchUpdateProfile(data) {
	return async (dispach) => {
		dispach(updateProfile());
		try {
			/**
* OBJECT TO SEND WHILE UPDATING PROFILE
{
"firstName": "cyusa",
"lastName": "kheven",
"address": "kigali",
"telephone": "0783903252",
"preferredLanguage": "English",
"birthdate": "2001-02-11",
"billingAddress": "kigali",
"gender": "Male",
"preferredCurrency": "Frw"
}
*/
			const path = "/user/updateMe";
			const res = await api.patch(path, data);
			if (res.status === 200) {
				dispach(updateProfileSuccess(res.data.profile));
				toast.success("Profile Updated");
			} else {
				dispach(updateProfileError());
				toast.error("Could not update profile");
			}
		} catch (err) {
			dispach(updateProfileError());
			toast.error("Could not update profile");
		}
	};
}
