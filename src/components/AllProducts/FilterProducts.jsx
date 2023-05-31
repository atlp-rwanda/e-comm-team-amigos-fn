import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "../Button/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import colors from "../../constants/colors.js";
import { filterCategory } from "../../redux/allProducts/actions.js";

const GroupButton = styled(Box)(() => ({
	maxWidth: "991px",
	display: "flex",
	justifyContent: "space-between",
	marginRight: "auto",
	marginTop: "20px",
}));

const GroupButtonResponsive = styled(Box)(({ theme }) => ({
	width: "auto",
	overflowX: "auto",
	[theme.breakpoints.down("md")]: {
		margin: "10px",
	},
	[theme.breakpoints.up("md")]: {
		marginLeft: "59px",
		marginRight: "59px",
	},
}));

export default function FilterProducts() {
	const [categories, setCategories] = useState([]);
	const response = useSelector((state) => state.products.response);
	const [selected, setSelected] = useState("");

	const dispatch = useDispatch();

	const handleClick = (item) => {
		if (selected == item) {
			setSelected("");
			dispatch(filterCategory(""));
		} else {
			setSelected(item);
			dispatch(filterCategory(item));
		}
	};

	useEffect(() => {
		if (response) {
			const products = response?.listProduct?.map(
				(product) => product.category,
			);
			const filterUnique = (arr) => {
				const result = [];
				for (let item of arr) {
					if (result.includes(item)) continue;
					else result.push(item);
				}
				return result;
			};

			setCategories(filterUnique(products));
		}
	}, [dispatch, response]);

	return (
		<GroupButtonResponsive
			className="deal-button-container"
			data-testid="all-products-filter"
		>
			<GroupButton>
				{categories?.map((item, index) => (
					<Button
						label={item}
						key={index}
						borderRadius="80px"
						padding="14.22px 23.37px"
						fontSize="14.22px"
						marginRight="10px"
						background={selected == item ? colors.gray : ""}
						onClick={() => handleClick(item)}
					/>
				))}
			</GroupButton>
		</GroupButtonResponsive>
	);
}
