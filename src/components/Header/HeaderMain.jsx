import React from "react";
import Box from "@mui/material/Box/Box";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import logo from "./../../assets/img/logo.png";
import colors from "../../constants/colors";
import SearchInput from "../search/SearchInput.jsx";
import SvgIcon from "@mui/material/SvgIcon";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import useWindowSize from "../../hooks/useWindowResize";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import Model from "../Models/cartModel.jsx";
import { openModel } from "../../redux/actions/cartOpenModel";
import { useNavigate } from "react-router-dom";
import wishlistIcon from "../../assets/img/wishlistIconn.png";
import "../../components/Header/wishlistIcon.style.scss";

const MenuContainer = styled(Box)(({ theme }) => ({
	zIndex: "40",
	position: "fixed",
	top: "10px",
	right: "0px",
	bottom: "auto",
	left: "auto",
	display: "flex",
	[theme.breakpoints.up("lg")]: {
		display: "none",
	},
	justifyContent: "center",
	alignItems: "center",
}));

const ContainerFluid = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "70px",
	display: "flex",
	alignItems: "flex-end",
	justifyContent: "center",
	position: "relative",
	paddingLeft: "54px",
	paddingRight: "54px",
	borderBottom: "1px solid #e5e5e5",
	[theme.breakpoints.down("lg")]: {
		padding: "10px 20px",
		height: "auto",
	},
	[theme.breakpoints.between("lg", "1440")]: {
		paddingLeft: "10px",
		paddingRight: "10px",
	},
}));

const NavContainer = styled(Box)(({ theme }) => ({
	width: "409.37px",
	height: "22.64px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	alignSelf: "center",
	justifySelf: "center",
	[theme.breakpoints.down("lg")]: {
		width: "100%",
		paddingLeft: "auto",
		paddingRight: "auto",
		flexDirection: "column",
		height: "auto",
		marginTop: "94px",
	},
}));

const NavLink = styled(Link)(({ theme }) => ({
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "17.4966px",
	lineHeight: "26px",
	color: colors.darkGreen,
	[theme.breakpoints.down("lg")]: {
		height: "35px",
	},
	":hover": {
		borderBottom: `3px solid ${colors.darkGreen}`,
	},
}));

const SearchInputContainer = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("lg")]: {
		marginTop: "20px",
		width: "95%",
		marginLeft: "auto",
		marginRight: "auto",
	},
}));

const HeaderAccount = styled(Box)(({ theme }) => ({
	width: "180.65px",
	height: "24.7px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	[theme.breakpoints.down("lg")]: {
		width: "95%",
		marginTop: "20px",
	},
	[theme.breakpoints.between("sm", "lg")]: {
		width: "60%",
		marginLeft: "auto",
		marginRight: "auto",
	},
}));

export default function HeaderMain() {
	const { width } = useWindowSize();
	const [menuOpen, setMenuOpen] = React.useState(false);
	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	};
	const contentContainer = {
		width: width >= 1336 ? "1331px" : "100%",
		height: "52.34px",
		display: "grid",
		gridTemplateColumns: "253px 1078.25px",
	};
	const NavDropDown = styled(Box)(({ theme }) => ({
		width: "100%",
		[theme.breakpoints.down("lg")]: {
			width: "50%",
			display: menuOpen ? "block" : "none",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "space-between",
			position: "fixed",
			top: "0",
			right: "0",
			bottom: "auto",
			left: "auto",
			height: "100vh",
			zIndex: "5",
			backgroundColor: colors.white,
		},
		[theme.breakpoints.up("lg")]: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			position: "relative",
		},
	}));
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("user"));
	const navigate = useNavigate();
	return (
		<ContainerFluid>
			<Box sx={contentContainer}>
				<Box
					component="div"
					sx={logoContainer}
					onClick={() => navigate("/")}
				>
					<img src={logo} alt="Amigos E-shop" />
					<Box component="span" sx={logoName} data-testid="logoName">
						Amigos
					</Box>
				</Box>
				<NavDropDown data-testid="nav-container">
					<NavContainer>
						<NavLink component={RouterLink} to="/" underline="none">
							Category
						</NavLink>
						<NavLink component={RouterLink} to="/" underline="none">
							Deals
						</NavLink>
						<NavLink component={RouterLink} to="/" underline="none">
							What&apos;s New
						</NavLink>
						<NavLink component={RouterLink} to="/" underline="none">
							Delivery
						</NavLink>
					</NavContainer>
					<SearchInputContainer>
						<SearchInput />
					</SearchInputContainer>
					<Model/>
					<HeaderAccount>
					<NavLink component={RouterLink} to="/user/ViewCart" underline="none">
					    <Box
								onClick={() => dispatch(openModel())}
								component="div"
								sx={cartAccount}
							>
								<Badge
									color="primary"
									badgeContent={0}
									sx={{ marginLeft: "0px" }}
								>
									<CartIcon sx={{ fill: "none" }} />
								</Badge>

						</Box>
					</NavLink>
					<NavLink component={RouterLink} to="/user/wishlist" underline="none">
						<Box component="div" sx={WishListAccount}>
							<Badge
								color="primary"
								sx={{ marginLeft: '3px' }}
							>
                               <img src={wishlistIcon}  alt="Icon" class="wishlist-icon" style={{ fill: 'none' }} />
							</Badge>
						</Box>
					</NavLink>
		
						<Box component="div" sx={userAccount}>
							<UserIcon sx={{ fill: 'none', marginRight:'0px' }} />
						</Box>
						
					</HeaderAccount>
				</NavDropDown>
			</Box>
			<MenuContainer>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
					onClick={handleMenuClick}
					data-testid="menu"
				>
					{menuOpen ? <CloseIcon /> : <MenuIcon />}
				</IconButton>
			</MenuContainer>
		</ContainerFluid>
	);
}

function UserIcon(props) {
	return (
		<SvgIcon {...props}>
			<path
				d="M16.4729 18.7128V16.9974C16.4729 16.0875 16.1331 15.2149 15.5282 14.5715C14.9234 13.9282 14.103 13.5667 13.2476 13.5667H6.79714C5.94175 13.5667 5.1214 13.9282 4.51655 14.5715C3.9117 15.2149 3.5719 16.0875 3.5719 16.9974V18.7128"
				stroke={colors.darkGreen}
				strokeWidth="2.05842"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.0224 10.1359C11.8036 10.1359 13.2476 8.59996 13.2476 6.70523C13.2476 4.81051 11.8036 3.27454 10.0224 3.27454C8.24111 3.27454 6.79712 4.81051 6.79712 6.70523C6.79712 8.59996 8.24111 10.1359 10.0224 10.1359Z"
				stroke={colors.darkGreen}
				strokeWidth="2.05842"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</SvgIcon>
	);
}
function CartIcon(props) {
	return (
		<SvgIcon {...props}>
			<g clipPath="url(#clip0_113_272)">
				<path
					d="M7.46097 19.6561C7.90629 19.6561 8.26728 19.2722 8.26728 18.7985C8.26728 18.3248 7.90629 17.9408 7.46097 17.9408C7.01566 17.9408 6.65466 18.3248 6.65466 18.7985C6.65466 19.2722 7.01566 19.6561 7.46097 19.6561Z"
					stroke={colors.darkGreen}
					strokeWidth="2.05842"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16.3305 19.6561C16.7758 19.6561 17.1368 19.2722 17.1368 18.7985C17.1368 18.3248 16.7758 17.9408 16.3305 17.9408C15.8852 17.9408 15.5242 18.3248 15.5242 18.7985C15.5242 19.2722 15.8852 19.6561 16.3305 19.6561Z"
					stroke={colors.darkGreen}
					strokeWidth="2.05842"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M1.0105 1.6449H4.23574L6.39665 13.1292C6.47038 13.524 6.67233 13.8787 6.96715 14.1312C7.26197 14.3836 7.63086 14.5177 8.00927 14.51H15.8466C16.225 14.5177 16.5939 14.3836 16.8887 14.1312C17.1835 13.8787 17.3855 13.524 17.4592 13.1292L18.7493 5.93327H5.04205"
					stroke={colors.darkGreen}
					strokeWidth="2.05842"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_113_272">
					<rect
						width="19.3514"
						height="20.5842"
						fill="white"
						transform="translate(0.204224 0.787292)"
					/>
				</clipPath>
			</defs>
		</SvgIcon>
	);
}

HeaderMain.propTypes = {
	backgroundColor: PropTypes.string,
};

const logoContainer = {
	width: "181.85px",
	height: "41.78px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
};

const logoName = {
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "700",
	fontSize: "30.8763px",
	lineHeight: "46px",
	color: colors.darkGreen,
};

const userAccount = {
	width: '59.82px',
	height: '24.64px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const cartAccount = {
	width: '20.8px',
	height: '24.7px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};
const WishListAccount = {
	width: '20.8px',
	height: '22.7px',
	display: 'flex',
	fontStyle: 'bold',
	justifyContent: 'center',
	alignItems: 'center',
};
