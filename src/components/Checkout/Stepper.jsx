import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import colors from "../../constants/colors";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "60px",
	display: "flex",
	justifyContent: "space-evenly",
	position: "relative",
	[theme.breakpoints.up("sm")]: {},
}));

const SingleStep = styled(Box)(({ theme }) => ({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	alignItems: "center",
	zIndex: 5,
	flex: 1,
	[theme.breakpoints.up("sm")]: {},
}));

const Label = styled(Typography)(({ theme }) => ({
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "400",
	fontSize: "17px",
	lineHeight: "27px",
	display: "flex",
	alignItems: "center",
	textAlign: "center",
	letterSpacing: "-0.04em",

	color: colors.black,
	[theme.breakpoints.up("sm")]: {},
}));

const HorizontalLine = styled("hr")(({ theme }) => ({
	background: "#096E3E",
	borderRadius: "10px",
	width: "100%",
	height: "5px",
	position: "absolute",
	top: "9px",
	bottom: "auto",
	[theme.breakpoints.up("sm")]: {},
}));

export default function Stepper() {
	return (
		<Container>
			<HorizontalLine />
			<SingleStep>
				<Numeric1CircleIcon />
				<Label>Checkout</Label>
			</SingleStep>
			<SingleStep>
				<Numeric2CircleIcon />
				<Label>Pay</Label>
			</SingleStep>
			<SingleStep>
				<CheckDecagramIcon />
				<Label>Deliver</Label>
			</SingleStep>
		</Container>
	);
}

export const Numeric1CircleIcon = () => (
	<SvgIcon>
		<rect width="24" height="24" fill="white" />
		<path
			d="M10 7H14V17H12V9H10V7ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z"
			fill="#096F3E"
		/>
	</SvgIcon>
);

export const Numeric2CircleIcon = () => (
	<SvgIcon>
		<rect width="24" height="24" fill="white" />
		<path
			d="M9 7H13C13.5304 7 14.0391 7.21071 14.4142 7.58579C14.7893 7.96086 15 8.46957 15 9V11C15 11.5304 14.7893 12.0391 14.4142 12.4142C14.0391 12.7893 13.5304 13 13 13H11V15H15V17H11H9V13C9 12.4696 9.21071 11.9609 9.58579 11.5858C9.96086 11.2107 10.4696 11 11 11H13V9H9V7ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z"
			fill="#C5C5C5"
		/>
	</SvgIcon>
);

export const CheckDecagramIcon = () => (
	<SvgIcon>
		<rect width="24" height="24" fill="white" />
		<path
			d="M23 12L20.6 9.2L20.9 5.5L17.3 4.7L15.4 1.5L12 3L8.6 1.5L6.7 4.7L3.1 5.5L3.4 9.2L1 12L3.4 14.8L3.1 18.5L6.7 19.3L8.6 22.5L12 21L15.4 22.5L17.3 19.3L20.9 18.5L20.6 14.8L23 12ZM18.7 16.9L16 17.5L14.6 19.9L12 18.8L9.4 19.9L8 17.5L5.3 16.9L5.5 14.1L3.7 12L5.5 9.9L5.3 7.1L8 6.5L9.4 4.1L12 5.2L14.6 4.1L16 6.5L18.7 7.1L18.5 9.9L20.3 12L18.5 14.1L18.7 16.9ZM16.6 7.6L18 9L10 17L6 13L7.4 11.6L10 14.2L16.6 7.6Z"
			fill="#C5C5C5"
		/>
	</SvgIcon>
);
