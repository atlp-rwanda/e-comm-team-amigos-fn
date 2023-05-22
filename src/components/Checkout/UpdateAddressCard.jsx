import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import SectionTitle from "../SectionHeader";
import Button from "../Button";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import colors from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProfile } from "../../redux/profile/actions";

const Container = styled(Box)(({ theme }) => ({
	width: "833px",
	height: "232px",
	background: "#ECECEC",
	border: "2px solid #C5C5C5",
	borderRadius: "16.6596px",
	padding: "22px 60px 70px 60px",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		height: "auto",
		padding: "20px 10px",
	},
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "40px",
	display: "flex",
	justifyContent: "space-between",
	marginBottom: "25px",
	[theme.breakpoints.down("sm")]: {
		marginBottom: "17px",
	},
}));

const ElementsContainer = styled(Box)(({ theme }) => ({
	width: "448px",
	flexWrap: "wrap",
	display: "grid",
	gridTemplateColumns: "50% 50%",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
}));

const Element = styled(Box)(({ theme }) => ({
	// width: "173.27px",
	height: "27px",
	display: "flex",
	marginBottom: "20px",
	[theme.breakpoints.down("sm")]: {
		marginBottom: "15px",
	},
}));
const ElementText = styled(Typography)(({ theme }) => ({
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "17.0105px",
	lineHeight: "26px",
	color: "#848181",
	paddingLeft: "17px",
	[theme.breakpoints.down("sm")]: {
		paddingLeft: "5px",
		fontSize: "13px",
		lineHeight: "14px",
	},
}));

export default function UpdateAddressCard({ setOpen }) {
	const { user } = useSelector((state) => state.profile);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProfile());
	}, [dispatch]);
	return (
		<Container data-testid="checkout-address-card">
			<HeaderContainer>
				<SectionTitle>Address</SectionTitle>
				<Button
					label="CHANGE"
					borderRadius="80px"
					background={colors.white}
					fontSize="11px"
					padding="11px 18px"
					onClick={() => setOpen(true)}
					dataTestid="checkout-open-address-modal-btn"
				/>
			</HeaderContainer>
			<ElementsContainer>
				<Element>
					<UserCircleIcon />
					<ElementText>{`${user?.firstName} ${user?.lastName}`}</ElementText>
				</Element>
				<Element>
					<PhoneActiveIcon />
					<ElementText>{user?.telephone}</ElementText>
				</Element>
				<Element>
					<LocationCurrentIcon />
					<ElementText>{user?.address}</ElementText>
				</Element>
				<Element>
					<ElementText>Deliver to doorstep</ElementText>
				</Element>
			</ElementsContainer>
		</Container>
	);
}

UpdateAddressCard.propTypes = {
	setOpen: PropTypes.func.isRequired,
};

export const UserCircleIcon = () => (
	<SvgIcon>
		<path
			d="M13.6788 2C12.1818 2 10.6994 2.25866 9.31639 2.7612C7.93334 3.26375 6.67667 4.00035 5.61813 4.92893C3.48031 6.8043 2.2793 9.34784 2.2793 12C2.2793 14.6522 3.48031 17.1957 5.61813 19.0711C6.67667 19.9997 7.93334 20.7362 9.31639 21.2388C10.6994 21.7413 12.1818 22 13.6788 22C16.7021 22 19.6016 20.9464 21.7394 19.0711C23.8773 17.1957 25.0783 14.6522 25.0783 12C25.0783 10.6868 24.7834 9.38642 24.2105 8.17317C23.6377 6.95991 22.798 5.85752 21.7394 4.92893C20.6809 4.00035 19.4242 3.26375 18.0412 2.7612C16.6581 2.25866 15.1758 2 13.6788 2ZM8.05884 18.28C8.54902 17.38 11.5357 16.5 13.6788 16.5C15.8219 16.5 18.8086 17.38 19.2987 18.28C17.7484 19.36 15.7991 20 13.6788 20C11.5585 20 9.60917 19.36 8.05884 18.28ZM20.9289 16.83C19.2987 15.09 15.3431 14.5 13.6788 14.5C12.0145 14.5 8.05884 15.09 6.42871 16.83C5.26596 15.5 4.5592 13.82 4.5592 12C4.5592 7.59 8.65161 4 13.6788 4C18.706 4 22.7984 7.59 22.7984 12C22.7984 13.82 22.0916 15.5 20.9289 16.83ZM13.6788 6C11.4673 6 9.68897 7.56 9.68897 9.5C9.68897 11.44 11.4673 13 13.6788 13C15.8903 13 17.6686 11.44 17.6686 9.5C17.6686 7.56 15.8903 6 13.6788 6ZM13.6788 11C13.2253 11 12.7904 10.842 12.4697 10.5607C12.149 10.2794 11.9689 9.89782 11.9689 9.5C11.9689 9.10218 12.149 8.72064 12.4697 8.43934C12.7904 8.15804 13.2253 8 13.6788 8C14.1323 8 14.5672 8.15804 14.8879 8.43934C15.2086 8.72064 15.3887 9.10218 15.3887 9.5C15.3887 9.89782 15.2086 10.2794 14.8879 10.5607C14.5672 10.842 14.1323 11 13.6788 11Z"
			fill="#096F3E"
		/>
	</SvgIcon>
);

export const PhoneActiveIcon = () => (
	<SvgIcon>
		<path
			d="M17.1481 12H19.428C19.428 10.6739 18.8275 9.40215 17.7586 8.46447C16.6897 7.52678 15.24 7 13.7283 7V9C14.6353 9 15.5051 9.31607 16.1465 9.87868C16.7878 10.4413 17.1481 11.2044 17.1481 12ZM21.7079 12H23.9878C23.9878 7 19.3938 3 13.7283 3V5C18.1285 5 21.7079 8.13 21.7079 12ZM22.8479 15.5C21.4229 15.5 20.055 15.3 18.7783 14.93C18.3793 14.82 17.9347 14.9 17.6155 15.18L15.1076 17.38C11.8816 15.94 9.23689 13.62 7.59537 10.79L10.1033 8.59C10.4224 8.31 10.5136 7.92 10.3882 7.57C9.96646 6.45 9.73847 5.25 9.73847 4C9.73847 3.73478 9.61837 3.48043 9.40459 3.29289C9.1908 3.10536 8.90085 3 8.59852 3H4.6087C4.30637 3 4.01642 3.10536 3.80263 3.29289C3.58885 3.48043 3.46875 3.73478 3.46875 4C3.46875 8.50868 5.51047 12.8327 9.14477 16.0208C12.7791 19.2089 17.7082 21 22.8479 21C23.1502 21 23.4402 20.8946 23.654 20.7071C23.8677 20.5196 23.9878 20.2652 23.9878 20V16.5C23.9878 16.2348 23.8677 15.9804 23.654 15.7929C23.4402 15.6054 23.1502 15.5 22.8479 15.5Z"
			fill="#096F3E"
		/>
	</SvgIcon>
);

export const LocationCurrentIcon = () => (
	<SvgIcon>
		<path
			d="M13.6801 4C16.188 4 18.2399 5.8 18.2399 8C18.2399 10.1 15.846 13.5 13.6801 15.9C11.5142 13.4 9.12034 10.1 9.12034 8C9.12034 5.8 11.1723 4 13.6801 4ZM13.6801 2C9.91831 2 6.84045 4.7 6.84045 8C6.84045 12.5 13.6801 19 13.6801 19C13.6801 19 20.5198 12.4 20.5198 8C20.5198 4.7 17.442 2 13.6801 2ZM13.6801 6C12.4262 6 11.4002 6.9 11.4002 8C11.4002 9.1 12.4262 10 13.6801 10C14.9341 10 15.96 9.1 15.96 8C15.96 6.9 14.9341 6 13.6801 6ZM22.7997 19C22.7997 21.2 18.6959 23 13.6801 23C8.66436 23 4.56055 21.2 4.56055 19C4.56055 17.7 5.92849 16.6 8.09439 15.8L8.77836 16.7C7.63841 17.2 6.84045 17.8 6.84045 18.5C6.84045 19.9 9.91831 21 13.6801 21C17.442 21 20.5198 19.9 20.5198 18.5C20.5198 17.8 19.7219 17.2 18.4679 16.7L19.1519 15.8C21.4318 16.6 22.7997 17.7 22.7997 19Z"
			fill="#096E3E"
		/>
	</SvgIcon>
);
