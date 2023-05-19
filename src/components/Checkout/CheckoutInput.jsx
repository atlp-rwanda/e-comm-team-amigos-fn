import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import colors from "../../constants/colors";

const InputContainer = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "21.8604px",
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "373.19px",
	height: "52.34px",
	border: `0.989903px solid ${colors.gray}`,
	[theme.breakpoints.down("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
		marginBottom: "30px",
	},
}));

const InputIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	right: "0",
	left: "auto",
	top: "0",
	bottom: "auto",
	cursor: "pointer",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "100%",
	height: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 0, 1, 1),
		paddingRight: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),

		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function CheckoutInput({
	placeholder,
	Icon,
	value,
	onChange,
	id,
	type,
}) {
	return (
		<InputContainer>
			<StyledInputBase
				placeholder={placeholder}
				inputProps={{ "aria-label": "search" }}
				onChange={onChange}
				value={value}
				id={id}
				type={type}
			/>
			<InputIconWrapper>{Icon}</InputIconWrapper>
		</InputContainer>
	);
}

CheckoutInput.propTypes = {
	placeholder: PropTypes.string,
	Icon: PropTypes.element,
	value: PropTypes.string,
	id: PropTypes.string,
	type: PropTypes.string,
	onChange: PropTypes.func,
};
CheckoutInput.defaultProps = {
	type: "text",
};
