import {
    VIEW_WISHLIST_SUCCESS,
    VIEW_WISHLIST_ERROR,
    VIEW_WISHLIST_START,
  } from "../../types";
  
  const initialState = {
    viewSuccess: [],
    viewError: "",
    viewStart: false,
  };
  
  const viewWishlistReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case VIEW_WISHLIST_SUCCESS:
        return {
          ...state,
          viewSuccess: payload,
        };
      case VIEW_WISHLIST_ERROR:
        return {
          ...state,
          viewError: payload,
        };
      case VIEW_WISHLIST_START:
        return {
          ...state,
          viewStart: payload,
        };
      default:
        return state;
    }
  };
  
  export default viewWishlistReducer;
  