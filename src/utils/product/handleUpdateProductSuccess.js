import { useDispatch, useSelector } from "react-redux";
import { updateProductAction } from "../../redux/actions";
import { toast } from "react-toastify";
export const handleUpdateProductResponse = () => {
	const { productUpdateSuccess, productUpdateStart } = useSelector(
		(state) => state.productUpdateState,
	);
	const updateSuccess = productUpdateSuccess;
	const dispatch = useDispatch();
	if (updateSuccess === true) {
		toast.success("Product Updated Successfully");
		setTimeout(() => {
			// setUpdateProduct(false);
			dispatch(updateProductAction(""));
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
