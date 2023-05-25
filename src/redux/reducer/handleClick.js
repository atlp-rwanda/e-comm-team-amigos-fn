import { IS_CLICKED } from "../types";

const menuState = { isClicked: false };

const handleClickReducer = (state = menuState, { type, payload }) => {
	switch (type) {
		case IS_CLICKED:
			return {
				...state,
				isClicked: payload,
			};
		default:
			return state;
	}
};

export default handleClickReducer;
