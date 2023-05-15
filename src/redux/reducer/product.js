import {
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_START,
	VIEW_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT,
	DELETE_PRODUCT_ERROR,
	DELETE_PRODUCT_SUCCESS,
} from "../types";

const fetchProductState = {
	products: {},
	fetchProductStart: false,
	loading: false,
	hasError: false,
	detailsProductId: "",
	updateProductId: "",
};

const fetchProductReducer = (state = fetchProductState, { type, payload }) => {
	switch (type) {
		case FETCH_PRODUCT_START:
			return {
				...state,
				fetchProductStart: payload,
			};
		case FETCH_PRODUCT_SUCCESS:
			return {
				...state,
				products: payload,
			};
		case VIEW_PRODUCT:
			return {
				...state,
				detailsProductId: payload,
			};
		case UPDATE_PRODUCT:
			return {
				...state,
				updateProductId: payload,
			};
		case DELETE_PRODUCT:
			return { ...state, loading: true };

		case DELETE_PRODUCT_SUCCESS:
			const deletedProductId = payload;
			const filteredProducts = state.products?.product.filter(
				(product) => product.id !== deletedProductId,
			);
			return {
				...state,
				loading: false,
				products: { ...state.products, product: filteredProducts },
				hasError: false,
			};

		case DELETE_PRODUCT_ERROR:
			return { ...state, loading: false, hasError: true };
		default:
			return state;
	}
};

export default fetchProductReducer;
