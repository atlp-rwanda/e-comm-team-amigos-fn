import { useState } from "react";
import UpdateAddressCard from "./UpdateAddressCard";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import UpdateAddressModal from "./UpdateAddressModal";
import ProductList from "./ProductList";
import ContinueToPay from "./ContinueToPay";

const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	paddingLeft: "60px",
	paddingRight: "60px",
	marginTop: "110px",
	marginBottom: "70px",
	position: "relative",
	display: "flex",
	justifyContent: "space-between",
	[theme.breakpoints.up("1336")]: {
		marginTop: "180px",
	},
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		paddingLeft: "10px",
		paddingRight: "10px",
	},
}));

export default function Checkout() {
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Container>
			<Box>
				<UpdateAddressCard setOpen={setOpen} />
				<UpdateAddressModal handleClose={handleClose} open={open} />
				<ProductList />
			</Box>
			<ContinueToPay />
		</Container>
	);
}
