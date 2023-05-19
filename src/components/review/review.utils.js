import { addReview } from "../../redux/reviews/actions";

function handleOnMouseEnter(e, setHoverRate) {
	setHoverRate(Number(e.target.dataset.rate));
}

function handleOnMouseLeave(setHoverRate) {
	setHoverRate(0);
}

function handleOnClick(e, setRate) {
	setRate(Number(e.currentTarget.dataset.rate));
}

function handleOnSubmit(
	e,
	rate,
	review,
	id,
	token,
	user,
	dispatch
) {
	e.preventDefault();
	dispatch(addReview(rate, review, id, token, user));
}

function handleOnChange(e, setReview) {
	setReview(e.target.value);
}

export {
	handleOnChange,
	handleOnClick,
	handleOnMouseEnter,
	handleOnMouseLeave,
	handleOnSubmit,
};
