import { DISABLE_USER_START, DISABLE_USER_SUCCESS } from "../../types";

const disableUserState = { disableSuccess: {} ,  sidableFail: "", disableStart:false};
const disableUserReducer = (state = disableUserState, {type, payload}) => {
	switch (type) {
        case DISABLE_USER_START:
            return{
                ...state,
                disableStart: payload
            };
        case DISABLE_USER_SUCCESS:
            return{
                ...state,
                disableSuccess: payload
            }
		default:
			return state;
	}
}
export default disableUserReducer;