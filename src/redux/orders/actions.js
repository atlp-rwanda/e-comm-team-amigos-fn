import { actionTypes } from "./actionTypes";

export const getOrders = (token) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: actionTypes.FETCHING_ORDERS_START,
			});

			const reqHeaders = {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			};

			const res = await fetch(
				`${
					process.env.BASE_URL ||
					"https://e-comm-team-amigos-bn-project.onrender.com"
				}/order`,
				{
					method: "GET",
					headers: reqHeaders,
				},
			);

			const data = await res.json()

			if (res.status === 200) {
				dispatch({
					type: actionTypes.FETCHING_ORDERS_SUCCEED,
					payload: data.data.orders,
				});
			}
		} catch (error) {
			handleError(error, dispatch);
		}
	};
};

const handleError = (error, dispatch) => {
	console.log(error);
	dispatch({
		type: actionTypes.FETCHING_ORDERS_FAIL,
		payload: "Error ocurrered",
	});
};
