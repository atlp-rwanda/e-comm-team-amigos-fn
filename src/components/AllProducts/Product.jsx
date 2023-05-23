import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import colors from "../../constants/colors";
import PropTypes from "prop-types";

import Button from "../Button/index.jsx";
import "./style.css";
import SvgIcon from "@mui/material/SvgIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, viewWishlist } from "../../redux/actions/Wishlist";

const Container = styled(Box)(({ theme }) => ({
	width: "302px",
	height: "444.17px",
	display: "flex",
	flexDirection: "column",
	background: colors.white,
	borderRadius: "10px",
	position: "relative",
	marginTop: "60px",
	[theme.breakpoints.up("sm")]: {
		marginRight: "22px",
	},
}));

const Image = styled(Box)(() => ({
	width: "302px",
	height: "302px",
	background: "#ECECEC",
	borderRadius: "10px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const Img = styled("img")(() => ({
	height: "95%",
	width: "95%",
	borderRadius: "inherit",
}));

export default function Product({ product }) {
	const { name, images, category, price, id } = product;
	const navigate = useNavigate();
	return (
		<Container>
			<CircleLove productId={id} />
			<Image>
				<Img src={images && images[0]} alt={name} srcSet="" />
			</Image>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					height: "38px",
					width: "100%",
				}}
			>
				<Typography className="item-card-deal">{name}</Typography>
				<PriceContainer currency="$" amount={price} />
			</Box>
			<p className="item-card-desc">{category}</p>
			<Box
				sx={{
					width: "109.4px",
					height: "18px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginTop: "7px",
					mb: "22px",
				}}
			>
				<Rating
					name="item-card-rating"
					value={4}
					max={5}
					icon={<Star />}
					emptyIcon={<StarDisabled />}
					readOnly
				/>
				<span className="item-card-star-text">(121)</span>
			</Box>
			<Box>
				<Button
					label="Add to cart"
					padding="11px 18px"
					fontSize="11.8px"
					onClick={() => navigate(`/product/${id}`)}
				/>
			</Box>
		</Container>
	);
}

Product.propTypes = {
	product: PropTypes.object.isRequired,
};

export function CircleLove({ productId }) {
	const dispatch = useDispatch();
	const { viewSuccess } = useSelector((state) => state.wishlist);
	return (
		<Box
			sx={{
				width: "40px",
				height: "40px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: "50%",
				position: "absolute",
				top: "16px",
				right: "16px",
				bottom: "auto",
				left: "auto",
				background: colors.white,
				":hover": {
					cursor: "pointer",
				},
			}}
			onClick={() => {
				dispatch(addToWishlist(productId));
				dispatch(viewWishlist());
			}}
		>
			<LoveIcon
				color={
					viewSuccess.some(
						(product) => product.productId == productId,
					)
						? colors.darkGreen
						: colors.white
				}
			/>
		</Box>
	);
}

CircleLove.propTypes = {
	productId: PropTypes.string,
};

export function PriceContainer({ currency, amount }) {
	const [integer, decimals] = amount.toString().split(".");
	return (
		<div>
			<h5 className="item-card-price-container">
				<sup>{currency}</sup>
				<b className="item-card-price">{integer}</b>

				<sup>{decimals}</sup>
			</h5>
		</div>
	);
}

PriceContainer.propTypes = {
	currency: PropTypes.oneOf(["$", "USD", "Frw", "FRW", "RWF"]),
	amount: PropTypes.number.isRequired,
};
PriceContainer.defaultProps = {
	currency: "$",
};

export function Star() {
	return (
		<SvgIcon>
			<g clipPath="url(#clip0_82_71)">
				<path
					d="M6.03852 1.04428L4.66904 3.82099L1.60502 4.2677C1.05555 4.34739 0.835342 5.02479 1.23381 5.41278L3.45056 7.57291L2.92626 10.6243C2.83189 11.1759 3.41281 11.5891 3.89937 11.3311L6.64042 9.89032L9.38148 11.3311C9.86803 11.587 10.449 11.1759 10.3546 10.6243L9.83028 7.57291L12.047 5.41278C12.4455 5.02479 12.2253 4.34739 11.6758 4.2677L8.6118 3.82099L7.24232 1.04428C6.99695 0.549343 6.28599 0.543051 6.03852 1.04428Z"
					fill="#08AC0A"
				/>
			</g>
			<defs>
				<clipPath id="clip0_82_71">
					<rect
						width="12.0799"
						height="12.0799"
						fill="white"
						transform="translate(0.600311)"
					/>
				</clipPath>
			</defs>
		</SvgIcon>
	);
}

export function StarDisabled() {
	return (
		<SvgIcon>
			<g clipPath="url(#clip0_590_1695)">
				<path
					d="M5.00123 4.27785L4.74118 4.31576L1.67715 4.76247L1.67679 4.76252C1.53797 4.78266 1.48096 4.95556 1.58262 5.05454L1.58276 5.05468L3.79951 7.21481L3.98788 7.39836L3.94334 7.65758L3.4191 10.7087C3.39523 10.8482 3.5428 10.9542 3.66516 10.8894L3.66673 10.8885L6.40779 9.44774L6.64042 9.32546L6.87306 9.44774L9.61411 10.8885L9.61419 10.8886C9.74002 10.9547 9.88507 10.8452 9.86175 10.7087C9.86175 10.7087 9.86175 10.7087 9.86175 10.7087L5.00123 4.27785ZM5.00123 4.27785L5.11747 4.04216M5.00123 4.27785L5.11747 4.04216M5.11747 4.04216L6.48686 1.26564L5.11747 4.04216Z"
					stroke="#C5C5C5"
				/>
			</g>
			<defs>
				<clipPath id="clip0_590_1695">
					<rect
						width="12.0799"
						height="12.0799"
						fill="white"
						transform="translate(0.600311)"
					/>
				</clipPath>
			</defs>
		</SvgIcon>
	);
}

export function LoveIcon({ color }) {
	const paint = color || "white";
	return (
		<SvgIcon>
			<g clipPath="url(#clip0_81_43)">
				<path
					d="M11.0569 3.25487L11.0567 3.25506L10.2871 4.04803L10.0001 4.34383L9.71303 4.04803L8.9435 3.25506L8.94304 3.25459C7.11149 1.36101 4.16257 1.07813 2.20107 2.74958C-0.0739026 4.69137 -0.194982 8.1821 1.84227 10.2882L9.40063 18.0927C9.73174 18.4344 10.2645 18.4344 10.5956 18.0927L18.1542 10.2881L18.1542 10.288C20.1951 8.18191 20.074 4.69147 17.7992 2.74969L11.0569 3.25487ZM11.0569 3.25487C12.8925 1.36081 15.8377 1.07828 17.799 2.74949L11.0569 3.25487Z"
					fill={paint}
					stroke="#231F1E"
					strokeWidth="0.8"
				/>
			</g>
			<defs>
				<clipPath id="clip0_81_43">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</SvgIcon>
	);
}
LoveIcon.propTypes = {
	color: PropTypes.string,
};
LoveIcon.defaultProps = {
	color: "white",
};
