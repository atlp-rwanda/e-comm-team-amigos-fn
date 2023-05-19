import * as actions from "./actions";

const initialState = {
	user: null,
	loading: false,
	hasError: false,
};

export default function profileReducer(
	state = initialState,
	{ type, payload },
) {
	switch (type) {
		case actions.FETCH_START:
			return { ...state, loading: true };

		case actions.FETCH_SUCCESS:
			return { ...state, loading: false, user: payload };

		case actions.FETCH_ERROR:
			return { ...state, loading: false, hasError: true };

		case actions.UPDATE_START:
			return { ...state, loading: true };

		case actions.UPDATE_ERROR:
			return { ...state, loading: false, hasError: true };

		case actions.UPDATE_SUCCESS:
			return {
				...state,
				loading: false,
				user: { ...state.user, ...payload },
			};

		default:
			return state;
	}
}
