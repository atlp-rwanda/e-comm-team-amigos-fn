import { Box } from "@mui/material";
import HeaderTop from "./HeaderTop.jsx";
import HeaderMain from "./HeaderMain.jsx";

import useWindowSize from "../../hooks/useWindowResize.js";

export default function Header() {
	const sizes = useWindowSize();

	return (
		<Box>
			{sizes.width >= 1336 && (
				<HeaderTop justifyContent="space-between" alignItems="center" />
			)}
			<HeaderMain />
		</Box>
	);
}
/**
 * This component has 2 sub-components that can be used in different ways
 * <HeaderTop/> is the top one that includes contacts and languages
 * <HeaderMain /> is the one with Logo, Nav, Search and Account.
 * To import only the main(HeaderMain), use "/Header/HeaderMain"
 * To import all, use "/Header/index.jsx"
 */
