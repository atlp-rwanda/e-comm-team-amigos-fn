export const handleProductResponse = (productSuccess, toast) => {
	if (productSuccess === true) {
		toast("Product Created Successfully");
		setTimeout(() => {}, 5000);
	} else if (productSuccess == "409") {
		toast("Product Already Exists");
		setTimeout(() => {}, 5000);
	} else if (productSuccess === "Please provide token first.") {
		toast(productSuccess);
		setTimeout(() => {}, 5000);
	} else if (productSuccess == "500") {
		toast("JWT token Expired");
		setTimeout(() => {}, 5000);
	}
};
