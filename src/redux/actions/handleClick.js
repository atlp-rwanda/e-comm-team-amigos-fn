import { IS_CLICKED } from "../types";
import action from "./action";

export const handleMenuClick = (menuOpen) => {
	return (dispatch) => {
		// setMenuOpen(!menuOpen);
		dispatch(action(IS_CLICKED, menuOpen));
	};
};
