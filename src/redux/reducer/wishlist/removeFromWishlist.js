import {
    REMOVE_FROM_WISHLIST_ERROR,
    REMOVE_FROM_WISHLIST_START,
    REMOVE_FROM_WISHLIST_SUCCESS,
  } from "../../types";
  
  const initialState = {
    removeFromWishlistStart: false,
    removeFromWishlistSuccess: "",
    removeFromWishlistError: "",
  };
  
  const removeFromWishlistReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case REMOVE_FROM_WISHLIST_START:
        return {
          ...state,
          removeFromWishlistStart: payload,
        };
      case REMOVE_FROM_WISHLIST_SUCCESS:
        return {
          ...state,
          removeFromWishlistSuccess: payload,
        };
      case REMOVE_FROM_WISHLIST_ERROR:
        return {
          ...state,
          removeFromWishlistError: payload,
        };
      default:
        return state;
    }
  };
  
  export default removeFromWishlistReducer;
  