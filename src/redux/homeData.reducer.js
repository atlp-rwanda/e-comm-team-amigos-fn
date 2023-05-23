import {
	FETCH_CATEGORY_SUCCESS,
	FETCH_CATEGORY_ERROR,
	FETCH_CATEGORY,
} from "./types";
export const initialState = {
	loading: false,
	categories: [],
	selectedCategory: null,
	error: "",
};

export default function homeDataReducer(
	state = initialState,
	{ type, payload },
) {
	switch (type) {
		case FETCH_CATEGORY:
			return { ...state, loading: true };
		case FETCH_CATEGORY_SUCCESS:
			return { ...state, categories: payload, loading: false };
		case FETCH_CATEGORY_ERROR:
			return { ...state, error: payload, loading: false };
		default:
			return state;
	}
}
