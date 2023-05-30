export const handleCartResponse = (CartSuccess, toast) => {
	if (CartSuccess === true) {
		toast.success("The product has been successfully added to your cart.");
	} else if (CartSuccess == "Product in cart already. Please update the cart.") {
		toast.info("The product you have selected is already in your shopping cart. Please proceed to update the cart accordingly.");
	} else if (CartSuccess === "Quantity not Available") {
		toast.error("Please select the desired quantity for your product.");
	} else if (CartSuccess == "500") {
		toast.info("Login Again");
	}
};

export const handleClearCartResponse = (clearcartsuccess, toast) => {
	if (clearcartsuccess === 200) {
		toast.success("The Cart cleared  successfully");
	}
};

export const handleRemoveItemCartResponse = (removeitemcartsuccess, toast) => {
	if (removeitemcartsuccess === 200) {
		toast.success(" The item in Cart removed  successfully");
	}
};