
import { VIEW_NOTIFICATION_START, VIEW_NOTIFICATION_SUCCESS, VIEW_NOTIFICATION_ERROR} from '../types';
import action from "./action";
import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:4000",
});
  

export const fetchNotification =() => {
	const token = localStorage.getItem("token");
	return (dispatch) => {
		dispatch(action(VIEW_NOTIFICATION_START, true));
		api.get(`/notification`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				dispatch(action(VIEW_NOTIFICATION_SUCCESS, response));
			})
			.catch((error) => {
				dispatch(action(VIEW_NOTIFICATION_START, false));
				dispatch(action(VIEW_NOTIFICATION_ERROR, error));
			});
	};
};