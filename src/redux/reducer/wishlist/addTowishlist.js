import {
    ADD_TO_WISHLIST_ERROR,
    ADD_TO_WISHLIST_START,
    ADD_TO_WISHLIST_SUCCESS,
  } from "../../types";
  const initialState = {
    wishlistSuccess: "",
    wishlistError: "",
    wishlistStart: false,
  };
  
  const addToWishlistReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_TO_WISHLIST_SUCCESS:
        return {
          ...state,
          wishlistSuccess: payload,
        };
      case ADD_TO_WISHLIST_ERROR:
        return {
          ...state,
          wishlistError: payload,
        };
      case ADD_TO_WISHLIST_START:
        return {
          ...state,
          wishlistStart: payload,
        };
      default:
        return state;
    }
  };
  
  export default addToWishlistReducer;
  