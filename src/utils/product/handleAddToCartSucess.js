export const handleCartResponse = (CartSuccess, toast) => {
	if (CartSuccess === true) {
		toast("The product has been successfully added to your cart.");
		setTimeout(() => {}, 5000);
	} else if (CartSuccess == "Product in cart already. Please update the cart.") {
		toast("The product you have selected is already in your shopping cart. Please proceed to update the cart accordingly.");
		setTimeout(() => {}, 5000);
	} else if (CartSuccess === "Quantity not Available") {
		toast("Please select the desired quantity for your product.");
		setTimeout(() => {}, 5000);
	} else if (CartSuccess == "500") {
		toast("Login Again");
		setTimeout(() => {}, 5000);
	}
};