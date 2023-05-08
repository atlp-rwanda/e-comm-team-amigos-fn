import * as actions from '../actions/homeDataActions';

export const initialState = {
	loading: false,
};

export default function homeDataReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_PRODUCTS:
			return { ...state, loading: true };
		default:
			return state;
	}
}
