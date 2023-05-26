import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import colors from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	maxWidth: "332.2px",
	[theme.breakpoints.down("md")]: {
		maxWidth: "270px",
	},
	[theme.breakpoints.down("sm")]: {
		maxWidth: "90%",
	},
	height: "40px",
	display: "flex",
	justifyContent: "flex-end",
	marginTop: "40px",
	marginLeft: "auto",
	marginRight: "auto",
	position: "relative",
}));

const ArrowIcon = styled(Box)({
	display: "flex",
	alignItems: "center",
	marginLeft: "4px",
	fontSize: "20px", // Adjust the size as per your preference
});

const PageNext = styled(Box)(({ theme }) => ({
	width: "100%",
	maxWidth: "107.74px",
	[theme.breakpoints.down("md")]: {
		maxWidth: "9ch",
		fontSize: "14px",
	},
	height: "39px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "18.2864px",
	borderRadius: "10px",
	lineHeight: "27px",
	border: "1px solid darkGreen",
	color: colors.darkGreen,
	":active": {
		background: colors.darkGreen,
		color: colors.white,
	},
	":hover": {
		background: colors.darkGreen,
		color: colors.white,
		cursor: "pointer",
	},
	position: "absolute",
	top: 0,
	right: 0,
	[theme.breakpoints.down("sm")]: {
		position: "relative",
		top: "auto",
		right: "auto",
		marginTop: "10px",
	},
}));
export default function PageIndicator() {
	const navigate = useNavigate();
	const handleSeeAllClick = () => {
		navigate("/products/all");
	};

	return (
		<Container>
			<PageNext onClick={handleSeeAllClick}>
				See all <ArrowIcon>&#10140;</ArrowIcon>
			</PageNext>
		</Container>
	);
}
