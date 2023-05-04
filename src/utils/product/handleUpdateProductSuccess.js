export const handleUpdateProductResponse = (
	updateSuccess,
	toast,
	setUpdateProduct,
) => {
	if (updateSuccess === true) {
		toast.success("Product Updated Successfully");
		setTimeout(() => {
			setUpdateProduct(false);
		}, 5000);
	} else if (updateSuccess === 500) {
		toast.error("Internal server error");
		setTimeout(() => {}, 5000);
	} else if (updateSuccess === 401) {
		toast.warn("Unauthorized");
		setTimeout(() => {}, 5000);
	} else if (updateSuccess === 400) {
		toast.warn("Bad request");
		setTimeout(() => {}, 5000);
	}
};
