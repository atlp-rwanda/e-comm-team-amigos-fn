import {
    VIEW_USER_PROFILE_ERROR,
    VIEW_USER_PROFILE_START,
    VIEW_USER_PROFILE_SUCCESS,
  } from "../../types";
  const initialState = {
    profileViewSuccess: {},
    profileViewError: "",
    profilViewStart: false,
  };

  const viewProfileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case VIEW_USER_PROFILE_SUCCESS:
        return {
          ...state,
          profileViewSuccess: payload,
        };
      case VIEW_USER_PROFILE_ERROR:
        return {
          ...state,
          profileViewError: payload,
        };
      case VIEW_USER_PROFILE_START:
        return {
          ...state,
          profilViewStart: payload,
        };
      default:
        return state;
    }
  };

  export default viewProfileReducer;

