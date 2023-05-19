import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import colors from "../../constants/colors";
import Stepper from "./Stepper";
import Button from "../Button";

const Container = styled(Box)(({ theme }) => ({
	width: "400px",
	height: "203px",
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "column",
	position: "sticky",
	left: "auto",
	right: "auto",
	top: "190px",
	background: "white",
	[theme.breakpoints.down("xl")]: {
		width: "300px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "90%",
		top: "auto",
		bottom: "10px",
		padding: "15px",
		marginLeft: "auto",
		marginRight: "auto",
		border: "2px solid #C5C5C5",
		height: "auto",
		marginTop: "20px",
		borderRadius: "20px",
	},
}));
const ActionContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "73px",
	display: "flex",
	justifyContent: "center",
	[theme.breakpoints.down("xl")]: {},
	[theme.breakpoints.down("sm")]: {
		height: "50px",
		marginTop: "10px",
	},
}));

export default function ContinueToPay() {
	return (
		<Container data-testid="checkout-continue-to-pay">
			<Stepper />
			<ActionContainer>
				<Button
					label="Continue to Pay"
					fontSize="21px"
					color={colors.darkGreen}
				/>
			</ActionContainer>
		</Container>
	);
}
