import axios from "axios";
import { actionTypes } from "./actionTypes.js";

const checkUserReviewed = (userId, reviews) => {
	const reviewers = reviews.map((review) => review.user.id);
	return reviewers.includes(userId);
};

export const getReviews = (userId, id) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`${
					process.env.BASE_URL ||
					"https://e-comm-team-amigos-bn-project.onrender.com"
				}/reviews/${id}/review`,
			);
			if (res.status === 200) {
				dispatch({
					type: actionTypes.GETTING_REVIEWS_SUCCEED,
					payload: {
						reviews: res.data.reviews,
						...(userId && {
							userReviewed: checkUserReviewed(
								userId,
								res.data.reviews,
							),
						}),
					},
				});
			}
		} catch (error) {
			handleError(error, dispatch);
		}
	};
};

export const addReview = (rate, review, id, token, user) => {
	return async (dispatch) => {
		try {
			const feedback = {
				rate,
				feedback: review,
			};

			const reqHeaders = {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			};

			dispatch({
				type: actionTypes.ADDING__REVIEW,
			});

			const response = await fetch(
				`${
					process.env.BASE_URL ||
					"https://e-comm-team-amigos-bn-project.onrender.com"
				}/reviews/${id}/review`,
				{
					method: "POST",
					headers: reqHeaders,
					body: JSON.stringify(feedback),
				},
			);

			const data = await response.json();

			if (response.status === 201) {
				const payload = {
					...data.Review,
					user: {
						firstName: user.firstName,
						lastName: user.lastName,
						id: user.id,
					},
				};
				dispatch({
					type: actionTypes.REVIEW_ADDED,
					payload,
				});
			}
		} catch (error) {
		}
	};
};

const handleError = (error, dispatch) => {
	dispatch({
		type: actionTypes.GETTING_REVIEWS_FAIL,
		payload: "Error ocurrered",
	});
};
