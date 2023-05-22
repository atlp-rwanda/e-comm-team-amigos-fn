import React from "react";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CheckoutInput from "./CheckoutInput";
import PropTypes from "prop-types";
import { LocationCurrentIcon, PhoneActiveIcon } from "./UpdateAddressCard";
import Button from "../Button";
import colors from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateProfile } from "../../redux/profile/actions";

const Container = styled(Dialog)(({ theme }) => ({
	[theme.breakpoints.up("sm")]: {
		"& .MuiPaper-root": {
			maxWidth: "886px !important",
			background:
				"linear-gradient(98.31deg, rgba(236, 236, 236, 0.3) 0.43%, rgba(9, 111, 62, 0.2) 98.17%) !important",
			border: "2px solid #C5C5C5",
			boxShadow: "0px -2px 3px rgba(0, 0, 0, 0.12)",
			backdropFilter: "blur(5px)",
			borderRadius: "20px !important",
			width: "886px",
			height: "354px",
		},
	},
	"& .MuiPaper-root": {
		background:
			"linear-gradient(98.31deg, rgba(236, 236, 236, 0.3) 0.43%, rgba(9, 111, 62, 0.2) 98.17%) !important",
		border: "2px solid #C5C5C5",
		boxShadow: "0px -2px 3px rgba(0, 0, 0, 0.12)",
		backdropFilter: "blur(5px)",
		borderRadius: "20px !important",
	},
}));

const ModalTitle = styled(DialogTitle)(({ theme }) => ({
	width: "100%",
	height: "70px",
	background: "#096F3E",
	borderRadius: "20px 20px 0px 0px",
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "600",
	fontSize: "28px",
	lineHeight: "34px",
	display: "flex",
	alignItems: "center",
	letterSpacing: "-0.04em",
	color: "#ECECEC",
	[theme.breakpoints.down("sm")]: {
		fontWeight: "500",
		fontSize: "21px",
		lineHeight: "25px",
	},
}));

const DialogBody = styled(DialogContent)(({ theme }) => ({
	width: "786.39px",
	height: "169px",
	marginTop: "64px",
	marginLeft: "auto",
	marginRight: "auto",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
}));

const InputsContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
	},
}));

const ActionsContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	display: "flex",
	justifyContent: "flex-end",
	marginTop: "65px",
	[theme.breakpoints.up("sm")]: {},
}));

export default function UpdateAddressModal({ handleClose, open }) {
	const theme = useTheme();
	const dispatch = useDispatch();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const { user } = useSelector((state) => state.profile);
	const [userData, setUserData] = React.useState({});
	const [dataTosend, setDataToSend] = React.useState({});
	React.useEffect(() => {
		user &&
			setDataToSend({
				firstName: user.firstName,
				lastName: user.lastName,
				address: user.address,
				telephone: user.telephone,
				preferredLanguage: user.preferredLanguage,
				birthdate: user.birthdate,
				billingAddress: user.billingAddress,
				gender: user.gender,
				preferredCurrency: user.preferredCurrency,
			});
	}, [user]);

	React.useEffect(() => {
		setUserData(user);
	}, [user]);

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			fetchUpdateProfile({
				...dataTosend,
				address: userData.address,
				telephone: userData.telephone,
			}),
		);
		handleClose();
	};

	return (
		<Container
			fullScreen={fullScreen}
			open={open}
			onClose={handleClose}
			aria-labelledby="responsive-dialog-title"
			data-testid="checkout-address-modal"
		>
			<ModalTitle id="responsive-dialog-title">Update Address</ModalTitle>
			<DialogBody>
				<form onSubmit={handleSubmit}>
					<InputsContainer>
						<CheckoutInput
							sx={{ mb: 5 }}
							placeholder="Delivery Address"
							Icon={<LocationCurrentIcon />}
							value={userData?.address}
							onChange={handleChange}
							id="address"
						/>
						<CheckoutInput
							placeholder="Phone Number"
							Icon={<PhoneActiveIcon />}
							value={userData?.telephone}
							onChange={handleChange}
							id="telephone"
							type="tel"
						/>
					</InputsContainer>
					<ActionsContainer>
						<Button
							label="Cancel"
							fontSize="15px"
							padding="14px 23px"
							marginRight="55px"
							background="red"
							color="white"
							onClick={handleClose}
							autoFocus
						/>
						<Button
							label="Update"
							fontSize="15px"
							padding="14px 23px"
							background={colors.darkGreen}
							color={colors.white}
							type="submit"
						/>
					</ActionsContainer>
				</form>
			</DialogBody>
		</Container>
	);
}

UpdateAddressModal.propTypes = {
	handleClose: PropTypes.func,
	open: PropTypes.bool,
};
