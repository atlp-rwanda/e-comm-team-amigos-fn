import { 
    SENDING_EMAIL_ERROR, 
    SENDING_EMAIL_SUCCESS, 
    SENDING_EMAIL_START,
    UPDATING_PASSWORD_START,
    UPDATING_PASSWORD_FAIL,
    UPDATING_PASSWORD_SUCCESS,
    UPDATING_PASSWORD_ERROR,
    USER_NOT_FOUND,
 } from "../types";

const resetPasswordState = {
    sendingEmailError: null,
    sendingEmailSuccess: null,
    sendingEmailStart: false,
    updatingPasswordStart: false,
    updatingPasswordFail: null,
    updatingPasswordSuccess: null,
    updatingPasswordError: null,
    userNotFound: null,
}

const resetPasswordReducer =  (state = resetPasswordState, {type, payload})=>{
    switch(type){
        case SENDING_EMAIL_START:
            return {
                ...state,
                sendingEmailStart: payload
            }
        case SENDING_EMAIL_ERROR:
            return {
               ...state,
                sendingEmailError: payload
            }
        case SENDING_EMAIL_SUCCESS:
            return {
              ...state,
                sendingEmailSuccess: payload
            }
        case UPDATING_PASSWORD_START:
            return {
               ...state,
                updatingPasswordStart: payload
            }
        case UPDATING_PASSWORD_FAIL:
            return {
              ...state,
                updatingPasswordFail: payload
            }
        case UPDATING_PASSWORD_SUCCESS:
            return {
             ...state,
                updatingPasswordSuccess: payload
            }
        case UPDATING_PASSWORD_ERROR:
            return {
              ...state,
                updatingPasswordError: payload
            }
        case USER_NOT_FOUND:
            return {
                ...state,
                userNotFound: payload
            }
        default:
            return state;
    }
}

export default resetPasswordReducer;