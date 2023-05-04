import { 
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_START,
 } from "../types";

const fetchProductState = {
    products: {},
    fetchProductStart: false,
}

const fetchProductReducer =  (state = fetchProductState, {type, payload})=>{
    switch(type){
        case FETCH_PRODUCT_START:
            return {
                ...state,
                fetchProductStart: payload
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }
}

export default fetchProductReducer;