export const handleremoveFromWishlistResponse = (removeFromWishlistSuccess, toast) => {
	if (removeFromWishlistSuccess === true) {
		toast("The product removed successfully from your wish list.");
		setTimeout(() => {}, 5000);
	} else if (removeFromWishlistSuccess == "500") {
		toast("Login Again");
		setTimeout(() => {}, 5000);
	}
};