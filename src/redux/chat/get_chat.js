import { GET_CHAT_SUCCESS, GET_CHAT_FAIL } from "../types";
export const fetchChats = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				"https://e-comm-team-amigos-bn-project.onrender.com/chat",
			);
			const result = await response.json();
			const { Chats } = result;
			dispatch({
				type: GET_CHAT_SUCCESS,
				payload: Chats,
			});
		} catch (error) {
			dispatch({
				type: GET_CHAT_FAIL,
				payload: error.message,
			});
		}
	};
};
