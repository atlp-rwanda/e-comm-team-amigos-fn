import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import FilterProducts from "./FilterProducts";
import AllProductsList from "./AllProductList";
import LoadMore from "./LoadMore";
import { fetchAllProducts } from "../../redux/allProducts/actions";
import { useDispatch } from "react-redux";

const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	marginTop: "115px",
	[theme.breakpoints.down("sm")]: {
		marginTop: "75px",
	},
}));

export default function AllProducts() {
	const dispatch = useDispatch();
	dispatch(fetchAllProducts());

	return (
		<Container>
			<FilterProducts />
			<AllProductsList />
			<LoadMore />
		</Container>
	);
}
