import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteProductCall } from "../../redux/actions";
import LoadingSpin from "../LoadingSpin";

const ConfirmDeleteModal = ({ open, handleClose, onDelete, product }) => {
	const dispatch = useDispatch();
	const { loading, hasError } = useSelector(
		(state) => state.fetchProductState,
	);
	const handleDelete = async () => {
		try {
			await dispatch(deleteProductCall(product.id));
			await new Promise((resolve) => setTimeout(resolve, 0));
			if (!loading && !hasError) {
				toast.success("Product deleted successfully");
				onDelete(product.id);
				handleClose();
			} else {
				toast.error("Could not delete product");
			}
		} catch (error) {
			console.error(
				"An error occurred while deleting the product:",
				error,
			);
			toast.error("An error occurred while deleting the product");
			handleClose();
		}
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			keepMounted
			data-testid="delete-product-modal"
		>
			<ModalDiv>
				<Typography id="modal-modal-title" variant="h6" component="h6">
					Are you sure to delete this Product?
				</Typography>
				<Box
					sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}
				>
					<Button onClick={handleClose}>Cancel </Button>
					<DeleteButton
						onClick={handleDelete}
						disabled={loading ? true : false}
					>
						{loading ? (
							<LoadingSpin height={20} width={20} color="red" />
						) : (
							"Delete"
						)}
					</DeleteButton>
				</Box>
			</ModalDiv>
		</Modal>
	);
};

export default ConfirmDeleteModal;

export const DeleteButton = styled(Button)(({ theme }) => ({
	boxSizing: "border-box",
	":hover": {
		border: "1px solid red",
		color: "red",
	},
}));

export const ModalDiv = styled(Box)(({ theme }) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "400px",
	background: "white",
	border: "2px solid #000",
	boxShadow: "24px",
	padding: "20px",
	border: "none",
	borderRadius: "5px",
	[theme.breakpoints.down("sm")]: {
		width: "90%",
	},
}));
