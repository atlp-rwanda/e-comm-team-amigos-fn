import React, { useState, useEffect } from "react";
import "../../App.css";
import "./review.style.scss";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { getReviews } from "../../redux/reviews/actions";
import Button from "../Button/Button.jsx";

import {
	handleOnChange,
	handleOnClick,
	handleOnMouseEnter,
	handleOnMouseLeave,
	handleOnSubmit,
} from "./review.utils.js";
import { useDispatch, useSelector } from "react-redux";

const rates = ["1", "2", "3", "4", "5"];

const GenerateReviews = ({ reviews }) => {
	return (
		<div className="reviews">
			{reviews.map((review) => {
				return (
					<div className="user-review" key={review.id}>
						<div className="reviewer">
							<div className="review__image">
								<FaUserCircle className="user-profile" />
							</div>
							<span className="reviewer__name">
								{review.user.firstName +
									" " +
									review.user.lastName}
							</span>
						</div>

						<div className="review-container">
							<div className="rating-stars">
								<FaStar
									className={`rating-star ${
										review.rate >= 1 &&
										`rating-star--active`
									} `}
								/>
								<FaStar
									className={`rating-star ${
										review.rate >= 2 &&
										`rating-star--active`
									} `}
								/>
								<FaStar
									className={`rating-star ${
										review.rate >= 3 &&
										`rating-star--active`
									} `}
								/>
								<FaStar
									className={`rating-star ${
										review.rate >= 4 &&
										`rating-star--active`
									} `}
								/>
								<FaStar
									className={`rating-star ${
										review.rate === 5 &&
										`rating-star--active`
									} `}
								/>
							</div>
							<div className="review__text">
								<p>{review.feedback}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

const Star = ({ hoverRate, rate, value, setHoverRate, setRate }) => {
	return (
		<FaStar
			className={`rating-star ${
				(hoverRate >= Number(value) || rate >= Number(value)) &&
				`rating-star--active`
			} `}
			onMouseEnter={(e) => handleOnMouseEnter(e, setHoverRate)}
			onMouseLeave={() => handleOnMouseLeave(setHoverRate)}
			onClick={(e) => handleOnClick(e, setRate)}
			data-rate={value}
		/>
	);
};

export default function Reviews({ id }) {
	const dispatch = useDispatch();
	const { reviews, gettingReviews, userReviewed, reviewing } = useSelector(
		(state) => state.reviews,
	);
	const token = localStorage.getItem("token");
	const user = JSON.parse(localStorage.getItem("user"));
	const [hoverRate, setHoverRate] = useState(0);
	const [review, setReview] = useState("");
	const [rate, setRate] = useState(0);

	useEffect(() => {
		if (user) {
			dispatch(getReviews(user.id, id));
		} else {
			dispatch(getReviews(null, id));
		}
	}, [dispatch, id]);

	return (
		<div className="reviews_container">
			<h2 className="review__header">REVIEWS</h2>
			{!gettingReviews &&
				user &&
				user.userRoles.includes("Customer") &&
				!userReviewed && (
					<div className="review">
						<h3>Give Your Review</h3>
						<div className="review__rating">
							<span>Your Rating</span>
							<div className="rating-stars">
								{rates.map((value) => (
									<Star
										hoverRate={hoverRate}
										rate={rate}
										value={value}
										setHoverRate={setHoverRate}
										setRate={setRate}
									/>
								))}
							</div>
						</div>
						<form
							className="review__form"
							onSubmit={(e) =>
								handleOnSubmit(
									e,
									rate,
									review,
									id,
									token,
									user,
									dispatch,
								)
							}
						>
							<div className="input-group">
								<label
									htmlFor="review"
									className="review__label"
								>
									Your Review
								</label>
								<textarea
									id="review"
									cols="30"
									rows="10"
									value={review}
									minLength={10}
									maxLength={100}
									onChange={(e) =>
										handleOnChange(e, setReview)
									}
								></textarea>
							</div>
							<Button type="submit" disabled={reviewing && true}>
								{reviewing === true
									? "Processing..."
									: "Submit Review"}
							</Button>
						</form>
					</div>
				)}

			{!gettingReviews && reviews && (
				<GenerateReviews reviews={reviews} />
			)}
		</div>
	);
}
