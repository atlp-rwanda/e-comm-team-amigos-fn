import { UPDATING_PASSWORD_START, UPDATING_PASSWORD_SUCCESS } from "../types";

const updatePasswordState = { updatingSuccess: "" ,  updatingFail: "", updatingStart:false};
const UpdatePasswordReducer = (state = updatePasswordState, {type, payload}) => {
	switch (type) {
        case UPDATING_PASSWORD_START:
            return{
                ...state,
                updatingStart: payload
            };
        case UPDATING_PASSWORD_SUCCESS:
            return{
                ...state,
                updatingSuccess: payload
            }
		default:
			return state;
	}
}
export default UpdatePasswordReducer;