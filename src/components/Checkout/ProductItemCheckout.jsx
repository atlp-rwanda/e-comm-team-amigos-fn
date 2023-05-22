import React from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { PriceContainer } from "../TodayDeal/ItemCard";
import StoreIcon from "./StoreIcon";
import getUserName from "../../utils/getUserName";
import Skeleton from "@mui/material/Skeleton";

const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "131px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: "20px",
	[theme.breakpoints.down("sm")]: {
		height: "85px",
	},
}));

const ProductDetails = styled(Box)(({ theme }) => ({
	height: "100%",
	flex: 1,
	display: "flex",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {},
}));

const Image = styled(Box)(({ theme }) => ({
	width: "135px",
	height: "100%",
	background: "#F7F7F7",
	border: "1px solid #C5C5C5",
	borderRadius: "10px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	[theme.breakpoints.down("sm")]: {
		width: "83px",
	},
}));

const Img = styled("img")(({ theme }) => ({
	width: "82px",
	height: "82px",
	[theme.breakpoints.up("sm")]: {},
}));

const Details = styled(Box)(({ theme }) => ({
	height: "94px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	marginLeft: "15px",
	[theme.breakpoints.down("sm")]: {
		height: "95%",
		marginLeft: "5px",
	},
}));

const DetailsText = styled(Typography)(({ theme }) => ({
	fontFamily: "Inter",
	fontStyle: "normal",
	fontWeight: "400",
	fontSize: "17px",
	lineHeight: "21px",
	display: "flex",
	alignItems: "center",
	textAlign: "center",
	color: " #C5C5C5",
	[theme.breakpoints.down("sm")]: {
		fontSize: "12px",
		lineHeight: "14px",
	},
}));

const DetailsTextBold = styled(Typography)(({ theme }) => ({
	fontFamily: "Inter",
	fontStyle: "normal",
	fontWeight: "600",
	fontSize: "18px",
	lineHeight: "22px",
	display: "flex",
	alignItems: "center",
	textAlign: "center",
	color: "#848181",
	[theme.breakpoints.down("sm")]: {
		fontSize: "13px",
		lineHeight: "14px",
	},
}));

const QtyContainer = styled(Box)(({ theme }) => ({
	width: "auto",
	height: "55px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	alignItems: "flex-end",
	[theme.breakpoints.up("sm")]: {},
}));

const StoreIconResponsive = styled(StoreIcon)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		height: "14px",
		width: "14px",
	},
}));

export default function ProductItemCheckout({
	image,
	name,
	category,
	userId,
	quantity,
	total,
}) {
	const [seller, setSeller] = React.useState("");

	React.useEffect(() => {
		const fetchData = async () => {
			const user = await getUserName(userId);
			setSeller(user);
		};

		fetchData();
	}, [userId]);
	return (
		<Container>
			<ProductDetails>
				<Image>
					<Img
						src={image[0]}
						alt="An apple watch product at discount"
					/>
				</Image>
				<Details>
					<DetailsTextBold>{name}</DetailsTextBold>
					<DetailsText>{category}</DetailsText>

					<DetailsText>
						<StoreIconResponsive />
						{seller ? (
							seller
						) : (
							<Skeleton>
								<p
									style={{ width: "40px", height: "15px" }}
								></p>
							</Skeleton>
						)}
					</DetailsText>
				</Details>
			</ProductDetails>
			<QtyContainer>
				<PriceContainer currency="Frw" amount={total} />
				<DetailsText>Qty:{quantity}</DetailsText>
			</QtyContainer>
		</Container>
	);
}

ProductItemCheckout.propTypes = {
	image: PropTypes.arrayOf(PropTypes.string),
	name: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
};
