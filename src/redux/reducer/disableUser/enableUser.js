import { ENABLE_USER_START, ENABLE_USER_SUCCESS } from "../../types";

const enableUserState = { enableSuccess: {} ,  enableFail: "", enableStart:false};
const enableUserReducer = (state = enableUserState, {type, payload}) => {
	switch (type) {
        case ENABLE_USER_START:
            return{
                ...state,
                enableStart: payload
            };
        case ENABLE_USER_SUCCESS:
            return{
                ...state,
                enableSuccess: payload
            }
		default:
			return state;
	}
}
export default enableUserReducer;