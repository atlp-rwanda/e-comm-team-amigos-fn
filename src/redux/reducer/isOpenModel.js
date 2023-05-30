import { OPEN_MODAL, CLOSE_MODAL } from "../types";
const initialState = {
	isOpen: false,
};
const isOpenReducer = (state = initialState, action) => {
	switch (action.type) {
		case CLOSE_MODAL:
			return {
                isOpen:false,
			};
		case OPEN_MODAL:
			return {
				isOpen: true,
			};
		default:
			return state;
	}
};
export default isOpenReducer;
