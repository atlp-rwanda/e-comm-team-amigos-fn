import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import colors from "../../constants/colors";
import Typography from "@mui/material/Typography";
import ProductItemCheckout from "./ProductItemCheckout";
import { useSelector } from "react-redux";
import React from "react";
import LoadingSpin from "../LoadingSpin";
import Skeleton from "@mui/material/Skeleton";
import getUserId from "../../utils/getUserId";

const Container = styled(Box)(({ theme }) => ({
	width: "833px",
	height: "auto",
	background: colors.white,
	border: "2px solid #C5C5C5",
	borderRadius: "16.6596px",
	paddingLeft: "45px",
	paddingRight: "45px",
	marginTop: "65px",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		paddingLeft: "10px",
		paddingRight: "10px",
	},
}));

const ListHeader = styled(Typography)(({ theme }) => ({
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "28px",
	lineHeight: "34px",
	display: "flex",
	alignItems: "center",
	textAlign: "center",
	letterSpacing: "-0.04em",
	color: "#000000",
	height: "85px",
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		fontSize: "15px",
		lineHeight: "24px",
		height: "60px",
		width: "20ch",
	},
}));

const HorizontalLine = styled("hr")(({ theme }) => ({
	width: "750px",
	height: "0px",
	border: "1px solid #C5C5C5",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
}));

const ProductListContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	paddingTop: "38px",
	paddingBottom: "38px",
	display: "flex",
	flexDirection: "column",
	[theme.breakpoints.up("sm")]: {},
}));

const TotalContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "142px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	marginTop: "30px",
	marginBottom: "30px",
	[theme.breakpoints.up("sm")]: {},
}));
const SubTotalContainer = styled(Box)(({ theme }) => ({
	height: "34px",
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	[theme.breakpoints.up("sm")]: {},
}));

const SubTotalLabel = styled(Typography)(({ theme }) => ({
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "400",
	fontSize: "17px",
	lineHeight: "34px",
	display: "flex",
	alignItems: "center",
	textAlign: "center",
	letterSpacing: "-0.04em",
	color: "#848181",
	marginBottom: "20px",
	[theme.breakpoints.up("sm")]: {},
}));

const GrandTotalContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "34px",
	display: "flex",
	justifyContent: "space-between",
	[theme.breakpoints.up("sm")]: {},
}));

const GrandTotalLabel = styled(Typography)(({ theme }) => ({
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "600",
	fontSize: "28px",
	lineHeight: "34px",
	display: "flex",
	alignItems: "center",
	letterSpacing: "-0.04em",

	color: "#096F3E",
	[theme.breakpoints.up("sm")]: {},
}));

export default function ProductList() {
	const userId = getUserId();

	const { viewsuccess } = useSelector((state) => state.viewCart);

	const [checkout, setCheckout] = React.useState({});
	const [summary, setSummary] = React.useState({});
	const [shippingFee] = React.useState(0);

	React.useEffect(() => {
		setCheckout({
			userId: userId,
			products: viewsuccess?.cartItems,
		});
	}, [viewsuccess?.cartItems, userId]);

	React.useEffect(() => {
		setSummary(viewsuccess.cartSummary);
	}, [viewsuccess.cartSummary]);

	return (
		<Container data-testid="checkout-product-list-container">
			<ListHeader>
				{checkout?.products ? (
					`Review and confirm your order(${checkout?.products?.length} items)`
				) : (
					<Skeleton>
						<p style={{ width: "200px", height: "20px" }}></p>
					</Skeleton>
				)}
			</ListHeader>
			<HorizontalLine />
			<ProductListContainer>
				{checkout?.products ? (
					checkout?.products?.map(
						({
							images,
							name,
							category,
							userId,
							quantity,
							total,
						}) => {
							return (
								<ProductItemCheckout
									key={name}
									name={name}
									image={images}
									category={category}
									userId={userId}
									quantity={quantity}
									total={total}
								/>
							);
						},
					)
				) : (
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<LoadingSpin />
					</Box>
				)}
			</ProductListContainer>
			<HorizontalLine />
			<TotalContainer>
				<SubTotalContainer>
					<SubTotalLabel>Sub Total:</SubTotalLabel>
					{summary?.total ? (
						<Price currency="$" amount={summary?.total} />
					) : (
						<LoadingSpin />
					)}
				</SubTotalContainer>
				<SubTotalContainer>
					<SubTotalLabel>Shipping Fee:</SubTotalLabel>
					{summary?.total ? (
						<Price currency="$" amount={shippingFee} />
					) : (
						<LoadingSpin />
					)}
				</SubTotalContainer>
				<GrandTotalContainer>
					<GrandTotalLabel>Total:</GrandTotalLabel>
					{summary?.total ? (
						<Price
							currency="$"
							amount={summary?.total + shippingFee}
						/>
					) : (
						<LoadingSpin />
					)}
				</GrandTotalContainer>
			</TotalContainer>
		</Container>
	);
}

function Price({ currency, amount }) {
	const [integer, decimals] = amount.toString().split(".");
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "flex-start",
			}}
		>
			<Typography
				sx={{
					lineHeight: "11px !important",
					fontSize: "11px",
					fontWeight: "500",
					fontFamily: "Poppins",
					fontStyle: "normal",
				}}
			>
				{currency}
			</Typography>
			<Typography
				sx={{
					fontFamily: "Poppins",
					fontStyle: "normal",
					fontWeight: "400",
					fontSize: "17px",
					lineHeight: "18px",
					display: "flex",
					alignItems: "center",
					color: "#000000",
				}}
			>
				{integer}
			</Typography>
			<Typography
				sx={{
					lineHeight: "11px !important",
					fontSize: "11px",
					fontWeight: "500",
					fontFamily: "Poppins",
					fontStyle: "normal",
				}}
			>
				{decimals || "00"}
			</Typography>
		</Box>
	);
}
Price.propTypes = {
	currency: PropTypes.oneOf(["Frw", "USD", "$"]),
	amount: PropTypes.number,
};

Price.defaultProps = {
	currency: "Frw",
};
