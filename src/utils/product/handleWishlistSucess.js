export const handleWishlistResponse = (wishlistSuccess, toast) => {
	if (wishlistSuccess === true) {
		toast("The product has been successfully added to your wish list.");
		setTimeout(() => {}, 5000);
	} else if (wishlistSuccess === "Product already in wishlist") {
		toast("The product you have selected is already in your wish list. Please check your wish list.");
		setTimeout(() => {}, 5000);
	} else if (wishlistSuccess == "500") {
		toast("Login Again");
		setTimeout(() => {}, 5000);
	}
};