import { FETCH_RELATED_PRODUCTS, FETCH_RELATED_PRODUCTS_ERROR } from "../types";

const relatedProductState = {
	relatedProducts: [],
};

const relatedProductReducer = (
	state = relatedProductState,
	{ type, payload },
) => {
	switch (type) {
		case FETCH_RELATED_PRODUCTS:
			return {
				...state,
				relatedProducts: payload,
			};
		case FETCH_RELATED_PRODUCTS_ERROR:
			return {
				...state,
				relatedProducts: payload,
			};
		default:
			return state;
	}
};

export default relatedProductReducer;
