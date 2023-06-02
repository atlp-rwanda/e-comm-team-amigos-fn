import { EDIT_USER_PROFILE_START, EDIT_USER_PROFILE_SUCCESS } from "../../types";

const editUserProfileState = { editingSuccess: "" ,  editingFail: "", editingStart:false};
const editUserProfileReducer = (state = editUserProfileState, {type, payload}) => {
	switch (type) {
        case EDIT_USER_PROFILE_START:
            return{
                ...state,
                editingStart: payload
            };
        case EDIT_USER_PROFILE_SUCCESS:
            return{
                ...state,
                editingSuccess: payload
            }
		default:
			return state;
	}
}
export default editUserProfileReducer;