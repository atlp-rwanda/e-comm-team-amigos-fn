import {
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGIN_START,
	LOGIN_PAYLOAD,
	SENDING_EMAIL_ERROR,
	SENDING_EMAIL_SUCCESS,
	SENDING_EMAIL_START,
	UPDATING_PASSWORD_START,
	UPDATING_PASSWORD_FAIL,
	UPDATING_PASSWORD_SUCCESS,
	UPDATING_PASSWORD_ERROR,
	USER_NOT_FOUND,
	DISABLE_USER_START,
	DISABLE_USER_SUCCESS,
	DISABLE_USER_FAIL,
	ENABLE_USER_START,
	ENABLE_USER_SUCCESS,
	ENABLE_USER_FAIL,
} from "../types";
import axios from "axios";
import action from "./action";

export const login = (email, password) => {
	return async (dispatch) => {
		dispatch(action(LOGIN_START, true));
		try {
			const response = await fetch(
				`${
					// eslint-disable-next-line no-undef
					process.env.BASE_URL ||
					"https://e-comm-team-amigos-bn-project.onrender.com"
				}/user/login`,
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				},
			);
			const result = await response.json();
			localStorage.setItem("token", result.token);
			localStorage.setItem("user", JSON.stringify(result.user));
			localStorage.setItem("message", result.message);
			dispatch(action(LOGIN_SUCCESS, result));
			dispatch(action(LOGIN_PAYLOAD, result));
			dispatch(action(LOGIN_START, false));
		} catch (error) {
			dispatch(action(LOGIN_FAIL, error.message));
			dispatch(action(LOGIN_START, false));
		}
	};
};

const fetchData = async (
	url,
	method,
	body,
	successAction,
	failAction,
	notFoundAction,
	startAction,
	errorAction,
	dispatch,
) => {
	dispatch(action(startAction, true));
	try {
		const response = await fetch(url, {
			method,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		if (response.status === 404) {
			dispatch(action(notFoundAction, response.status));
		} else if (response.status === 200) {
			dispatch(action(successAction, response.status));
		} else {
			dispatch(action(failAction, response.status));
		}
		dispatch(action(startAction, false));
	} catch (error) {
		dispatch(action(errorAction, error.message));
		dispatch(action(startAction, false));
	}
};

export const passwordReset = (email) => {
	return async (dispatch) => {
		const url =
			"https://e-comm-team-amigos-bn-project.onrender.com/user/forgotPassword/";
		const method = "POST";
		const body = { email };
		const successAction = SENDING_EMAIL_SUCCESS;
		const failAction = null;
		const notFoundAction = USER_NOT_FOUND;
		const startAction = SENDING_EMAIL_START;
		const errorAction = SENDING_EMAIL_ERROR;

		await fetchData(
			url,
			method,
			body,
			successAction,
			failAction,
			notFoundAction,
			startAction,
			errorAction,
			dispatch,
		);
	};
};

export const updatePassword = (password1, password2, token) => {
	return async (dispatch) => {
		const url = `https://e-comm-team-amigos-bn-project.onrender.com/user/resetPassword/${token}`;
		const method = "PUT";
		const body = { password: password1, confirmPassword: password2 };
		const successAction = UPDATING_PASSWORD_SUCCESS;
		const failAction = UPDATING_PASSWORD_FAIL;
		const notFoundAction = null;
		const startAction = UPDATING_PASSWORD_START;
		const errorAction = UPDATING_PASSWORD_ERROR;

		await fetchData(
			url,
			method,
			body,
			successAction,
			failAction,
			notFoundAction,
			startAction,
			errorAction,
			dispatch,
		);
	};
};

export const updatePasswordTime = (email, oldPassword, newPassword) => {
	return async (dispatch) => {
		dispatch(action(UPDATING_PASSWORD_START, true));
		try {
			const res = await axios.put(
				"https://e-comm-team-amigos-bn-project.onrender.com/user/createPassword",
				{
					email: email,
					oldpassword: oldPassword,
					newpassword: newPassword,
				},
			);
			dispatch(action(UPDATING_PASSWORD_SUCCESS, res));
			updateErrorDisplay.innerHTML = "Password updated successfuly!";
			updateErrorDisplay.style.color = "#096F3E";
			dispatch(action(UPDATING_PASSWORD_START, false));
			if (res.status == 200) {
				window.location.href =
					"https://e-comm-team-amigos-fn-staging.netlify.app/login";
			}
		} catch (error) {
			dispatch(action(UPDATING_PASSWORD_START, false));
			if (error.response.status == 401) {
				updateErrorDisplay.innerHTML =
					"Incorect email or old password!";
				updateErrorDisplay.style.color = "red";
			} else if (error.response.status == 404) {
				updateErrorDisplay.innerHTML = "Email not found!";
				updateErrorDisplay.style.color = "red";
			}
		}
	};
};

export const DisableUser = (email, reason) => {
	return async (dispatch) => {
		dispatch(action(DISABLE_USER_START, true));
		try {
			const token = localStorage.getItem("token");
			const res = await fetch(
				"https://e-comm-team-amigos-bn-project.onrender.com/user/disable",
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						email: email,
						reason: reason,
					}),
				},
				
			);
			dispatch(action(DISABLE_USER_SUCCESS, res));
			setTimeout(() => {
				dispatch({
					type: DISABLE_USER_SUCCESS,
					payload: {},
				});
			}, 1000);
			dispatch(action(DISABLE_USER_START, false));
		} catch (error) {
			dispatch(action(DISABLE_USER_FAIL, error.message));
			dispatch(action(DISABLE_USER_START, false));
		}
	};
};

export const EnableUser = (email) => {
	return async (dispatch) => {
		dispatch(action(ENABLE_USER_START, true));
		try {
			const token = localStorage.getItem("token");
			const res = await fetch(
				"https://e-comm-team-amigos-bn-project.onrender.com/user/enable",
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						email: email,
					}),
				},
				
			);
			dispatch(action(ENABLE_USER_SUCCESS, res));
			setTimeout(() => {
				dispatch({
					type: ENABLE_USER_SUCCESS,
					payload: {},
				});
			}, 1000);
			dispatch(action(ENABLE_USER_START, false));
		} catch (error) {
			dispatch(action(ENABLE_USER_FAIL, error.message));
			dispatch(action(ENABLE_USER_START, false));
		}
	};
};