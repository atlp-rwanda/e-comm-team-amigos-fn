import * as actions from "./actions";

const initialState = {
	response: null,
	loading: false,
	hasError: false,
	loadMoreLoading: false,
	filteredCategory: "",
};

export default function allproductsReducer(
	state = initialState,
	{ type, payload },
) {
	switch (type) {
		case actions.GET_PRODUCTS_START:
			return { ...state, loading: true };

		case actions.GET_PRODUCTS_SUCCESS:
			return { ...state, loading: false, response: payload };

		case actions.GET_PRODUCTS_ERROR:
			return { ...state, loading: false, hasError: true };

		case actions.LOAD_MORE_START:
			return { ...state, loadMoreLoading: true };

		case actions.LOAD_MORE_ERROR:
			return { ...state, loadMoreLoading: false, hasError: true };

		case actions.LOAD_MORE_SUCCESS:
			return {
				...state,
				loading: false,
				loadMoreLoading: false,
				response: {
					...state.response,
					currentPage: payload.currentPage,
					totalPages: payload.totalPages,
					previousPage: payload.previousPage,
					nextPage: payload.nextPage,
					listProduct: [
						...state.response.listProduct,
						...payload.listProduct,
					],
				},
			};

		case actions.FILTER_CATEGORY:
			return { ...state, filteredCategory: payload };

		default:
			return state;
	}
}
