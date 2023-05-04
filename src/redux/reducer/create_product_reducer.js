import {
	PRODUCT_CREATE_FAIL,
	PRODUCT_CREATE_START,
	PRODUCT_CREATE_SUCCESS,
} from '../types';

const productState = {
	productSuccess: '',
	productFail: '',
	productStart: false,
};

const productReducer = (state = productState, { type, payload }) => {
	switch (type) {
		case PRODUCT_CREATE_SUCCESS:
			return {
				...state,
				productSuccess: payload,
			};
		case PRODUCT_CREATE_FAIL:
			return {
				...state,
				productFail: payload,
			};
		case PRODUCT_CREATE_START:
			return {
				...state,
				productStart: payload,
			};
		default:
			return state;
	}
};

export default productReducer;
