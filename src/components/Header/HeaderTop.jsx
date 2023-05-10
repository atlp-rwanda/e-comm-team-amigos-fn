import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import colors from "../../constants/colors";

const HeaderTop = ({ justifyContent, alignItems }) => {
	return (
		<Box
			sx={{
				px: "48px",
				height: "35px",
				width: "100%",
				background: colors.darkGreen,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Box component="p" sx={pText}>
				+250 783 903 252
			</Box>
			<Box component="p" sx={pText}>
				Get 50% off on selected items | shop now
			</Box>
			<Box component="p" sx={pText}>
				Eng
			</Box>
		</Box>
	);
};

export default HeaderTop;

HeaderTop.propTypes = {
	justifyContent: PropTypes.oneOf([
		"space-between",
		"start",
		"space-around",
		"center",
	]),
	alignItems: PropTypes.oneOf([
		"space-between",
		"start",
		"space-around",
		"center",
	]),
};

const pText = {
	fontFamily: "Inter",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "17.0105px",
	lineHeight: "21px",
	color: colors.white,
};
