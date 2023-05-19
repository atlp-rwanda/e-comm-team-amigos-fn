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
} from "../types";
import action from "./action";

export const login = (email, password) => {
	return async (dispatch) => {
		dispatch(action(LOGIN_START, true));
		try {
			const response = await fetch(`${
					process.env.BASE_URL ||
					"https://e-comm-team-amigos-bn-project.onrender.com"
				}/user/login`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			});
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
		const url = "https://e-comm-team-amigos-bn-project.onrender.com/user/forgotPassword/";
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
