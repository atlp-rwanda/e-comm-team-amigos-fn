import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box/Box";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import action from "../../redux/actions/action";
import { IS_CLICKED } from "../../redux/types";
import { useSelector } from "react-redux";

export default function HumburgerMenu() {
	const dispatch = useDispatch();
	const { isClicked } = useSelector((state) => state.handleClickState);
	const [menuOpen, setMenuOpen] = useState(false);
	const handleClick = () => {
		setMenuOpen(!menuOpen);
		dispatch(action(IS_CLICKED, menuOpen));
	};
	////////////

	useEffect(() => {
		const handleDocumentClick = (event) => {
			if (
				isClicked &&
				!event.target.closest(".aside-bar") &&
				!event.target.closest("#dashboard-menu-btn")
			) {
				dispatch(action(IS_CLICKED, false));
			}
		};

		if (isClicked) {
			document.addEventListener("click", handleDocumentClick);
		}

		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, [dispatch, isClicked]);

	// /////////

	const MenuContainer = styled(Box)(({ theme }) => ({
		zIndex: "40",
		display: "flex",
		[theme.breakpoints.up("lg")]: {
			display: "none",
		},
		justifyContent: "center",
		alignItems: "center",
	}));
	return (
		<MenuContainer>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				onClick={handleClick}
				data-testid="menu"
				id="dashboard-menu-btn"
			>
				{isClicked ? <CloseIcon /> : <MenuIcon />}
			</IconButton>
		</MenuContainer>
	);
}
