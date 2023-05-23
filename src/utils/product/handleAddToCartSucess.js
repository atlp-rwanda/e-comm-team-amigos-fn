export const handleCartResponse = (CartSuccess, toast) => {
	if (CartSuccess === true) {
		toast("The product has been successfully added to your cart.");
	} else if (CartSuccess == "Product in cart already. Please update the cart.") {
		toast("The product you have selected is already in your shopping cart. Please proceed to update the cart accordingly.");
	} else if (CartSuccess === "Quantity not Available") {
		toast("Please select the desired quantity for your product.");
	} else if (CartSuccess == "500") {
		toast("Login Again");
	}
};

export const handleClearCartResponse = (clearcartsuccess, toast) => {
	if (clearcartsuccess === 200) {
		toast("The Cart cleared  successfully");
	}
};

export const handleRemoveItemCartResponse = (removeitemcartsuccess, toast) => {
	if (removeitemcartsuccess === 200) {
		toast(" The item in Cart removed  successfully");
	}
};