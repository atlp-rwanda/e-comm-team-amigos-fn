import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateAllProducts } from "../../redux/allProducts/actions";
import { useEffect, useState } from "react";
import LoadingSpin from "../LoadingSpin";
import colors from "../../constants/colors";

const Container = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	marginTop: "30px",
	marginBottom: "30px",
}));

export default function LoadMore() {
	const response = useSelector((state) => state.products.response);
	const { loadMoreLoading } = useSelector((state) => state.products);

	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(fetchUpdateAllProducts(page + 1));
	};

	useEffect(() => {
		if (response) {
			setPage(response.currentPage);
			setTotalPages(response.totalPages);
		}
	}, [dispatch, response]);
	return (
		<Container data-testid="all-products-load-more-btn">
			{page < totalPages && (
				<Button
					label={
						loadMoreLoading ? (
							<Box sx={{ display: "flex", alignItems: "center" }}>
								Loading <LoadingSpin color={colors.gray} />
							</Box>
						) : (
							"Load more"
						)
					}
					onClick={handleClick}
				/>
			)}
		</Container>
	);
}
