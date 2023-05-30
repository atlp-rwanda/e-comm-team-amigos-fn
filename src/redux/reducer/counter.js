const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			if (state > 0) {
				return state - 1;
			} else {
				return state;
			}
		case "NEUTRAL":
			return 0;
		default:
			return state;
	}
};
export default counterReducer;
