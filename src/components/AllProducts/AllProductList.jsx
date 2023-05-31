import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";

import Product from "./Product";
import { useEffect, useState } from "react";
import LoadingSpin from "../LoadingSpin";
import { viewWishlist } from "../../redux/actions/Wishlist";

const Container = styled(Box)(({ theme }) => ({
	width: "1299px",
	display: "flex",
	flexWrap: "wrap",
	marginLeft: "auto",
	marginRight: "auto",
	// justifyContent: "space-between",
	[theme.breakpoints.between("sm", "1300")]: {
		width: "100%",
		paddingLeft: "20px",
		paddingRight: "20px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		alignItems: "center",
		flexDirection: "column",
	},
}));

export default function AllProductsList() {
	const dispatch = useDispatch();

	const [products, setProducts] = useState([]);
	const response = useSelector((state) => state.products.response);
	const { filteredCategory } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(viewWishlist());
	}, []);

	useEffect(() => {
		if (products) {
			if (filteredCategory) {
				const filtered = response?.listProduct?.filter(
					(product) => product.category == filteredCategory,
				);
				setProducts(filtered);
			} else setProducts(response?.listProduct);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filteredCategory]);

	useEffect(() => {
		setProducts(response?.listProduct);
	}, [response?.listProduct]);

	return (
		<Container data-testid="all-products-list-container">
			{products ? (
				products.map((product, index) => (
					<Product key={index} product={product} />
				))
			) : (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
					}}
				>
					<LoadingSpin />
				</Box>
			)}
		</Container>
	);
}
