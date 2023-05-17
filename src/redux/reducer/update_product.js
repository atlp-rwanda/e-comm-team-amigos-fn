import {
	PRODUCT_UPDATE_FAIL,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_START,
	INTERNAL_SERVER_ERROR,
} from "../types";

const productState = {
	productUpdateSuccess: {},
	productUpdateFail: {},
	productUpdateStart: false,
	productUpdateInternalServerError: "",
};

const productUpdateReducer = (state = productState, { type, payload }) => {
	switch (type) {
		case PRODUCT_UPDATE_SUCCESS:
			return {
				...state,
				productUpdateSuccess: payload,
			};
		case PRODUCT_UPDATE_FAIL:
			return {
				...state,
				productUpdateFail: payload,
			};
		case PRODUCT_UPDATE_START:
			return {
				...state,
				productUpdateStart: payload,
			};
		case INTERNAL_SERVER_ERROR:
			return {
				...state,
				productUpdateInternalServerError: payload,
			};
		default:
			return state;
	}
};

export default productUpdateReducer;
