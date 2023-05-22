const cartItems = (state = 0, action) => {
	switch (action.type) {
		case "CARTITEMS": {
			return action.payload || state;
		}
		default:
			return state;
	}
};

export default cartItems;
