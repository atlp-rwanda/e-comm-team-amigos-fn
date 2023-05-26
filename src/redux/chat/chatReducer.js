import { GET_CHAT_SUCCESS, GET_CHAT_FAIL } from "../types";

const chatState = {
	allChats: [],
	errorMessage: "",
};

const chatReducer = (state = chatState, { type, payload }) => {
	switch (type) {
		case GET_CHAT_SUCCESS: {
			return {
				...state,
				allChats: payload,
			};
		}
		case GET_CHAT_FAIL: {
			return {
				...state,
				errorMessage: payload,
			};
		}
		default:
			return state;
	}
};

export default chatReducer;
