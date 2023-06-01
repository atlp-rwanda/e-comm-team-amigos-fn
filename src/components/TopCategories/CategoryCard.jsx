import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import colors from "../../constants/colors";

const Card = styled(Paper)(({ theme }) => ({
	width: "180px",
	height: "306px",
	// background: "#F5F6F6",
	borderRadius: "20px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	cursor: "pointer",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "17px",
	lineHeight: "20px",
	color: colors.black,
	marginTop: "15px",
}));

const CardImg = styled("img")(({ theme }) => ({
	width: "180px",
	height: "133.97px",
	marginTop: "56.51px",
}));

CategoryCard.propTypes = {
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};

export default function CategoryCard({ title, img }) {
	return (
		<Card elevation={3}>
			<CardTitle>{title}</CardTitle>
			<CardImg src={img} />
		</Card>
	);
}
