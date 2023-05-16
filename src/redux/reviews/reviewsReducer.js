import { CardActions } from "@mui/material";
import { actionTypes } from "./actionTypes.js";
const initialState = {
	reviews: null,
	gettingReviews: true,
	userReviewed: null,
	reviewing: false,
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case actionTypes.GETTING_REVIEWS_SUCCEED:
			return {
				...state,
				reviews: payload.reviews,
				gettingReviews: false,
				userReviewed: payload.userReviewed || false,
			};

		case actionTypes.GETTING_REVIEWS_FAIL:
			return {
				...state,
				gettingReviews: false,
			};

		case actionTypes.ADDING__REVIEW:
			return {
				...state,
				reviewing: true,
			};

		case actionTypes.REVIEW_ADDED:
			return {
				...state,
				reviews: [payload, ...state.reviews],
				userReviewed: true,
				reviewing: false,
			};

		default:
			return state;
	}
}
