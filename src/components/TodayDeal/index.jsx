import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "../Button/index.jsx";
import ItemCard from "./ItemCard.jsx";
import PageIndicator from "./PageIndicator.jsx";
import SectionTitle from "../SectionHeader.jsx";
import "./style.css";
import Loader from "../Loader/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/actions/homeAction.js";
import { handleCategorySearch } from "../../utils/product-category/handleCategorySearch.js";
const Section = styled(Box)(({ theme }) => ({
	width: "100%",
	marginBottom: "60px",
	[theme.breakpoints.down("sm")]: {
		paddingLeft: "20px",
		paddingRight: "20px",
	},
}));

const GroupButton = styled(Box)(({ theme }) => ({
	width: "991px",
	display: "flex",
	marginLeft: "5px",
	justifyContent: "space-between",
	marginRight: "auto",
}));

const GroupButtonResponsive = styled(Box)(({ theme }) => ({
	width: "auto",
	overflowX: "scroll",
	[theme.breakpoints.up("md")]: {
		marginLeft: "59px",
	},
}));

const SectionHeader = styled(SectionTitle)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		marginLeft: "59px",
	},
}));

const DealsContainer = styled(Box)(({ theme }) => ({
	width: "95%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	flexWrap: "wrap",
	marginLeft: "auto",
	marginRight: "auto",
	gap: "20px", // Add gap between the item cards
	position: "relative", // Add position relative to contain the LoaderContainer
	[theme.breakpoints.down("sm")]: {
		justifyContent: "center",
		width: "100%",
	},
}));
const LoaderContainer = styled(Box)(({ theme }) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
}));
export default function TodayDeals() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [Products, setProducts] = useState([]);
	const [fetchingData, setFetchingData] = useState(false); // New state to track data fetching
	const dispatch = useDispatch();

	const { homeData } = useSelector((state) => state);
	const { categories, product, loading } = homeData;

	useEffect(() => {
		dispatch(fetchCategory());
	}, []);

	useEffect(() => {
		if (categories.length > 0) {
			const defaultCategory = categories[0];
			const fetchData = async () => {
				setFetchingData(true); // Start fetching data
				const data = await handleCategorySearch(defaultCategory);
				setProducts(data);
				setSelectedCategory(defaultCategory);
				setFetchingData(false); // Stop fetching data
			};
			fetchData();
		}
	}, [categories]);

	const handleButtonClick = async (category) => {
		setSelectedCategory(category);
		setFetchingData(true); // Start fetching data
		const data = await handleCategorySearch(category);
		setProducts(data);
		setFetchingData(false); // Stop fetching data
	};

	return (
		<Section>
			{loading && <Loader />}{" "}
			{/* Show loader when initial data is being fetched */}
			<SectionHeader>Today’s Best Deals For You</SectionHeader>
			<GroupButtonResponsive className="deal-button-container">
				<GroupButton>
					{categories &&
						categories.map((category, index) => (
							<Button
								label={category}
								key={index}
								borderRadius="80px"
								padding="14.22px 23.37px"
								fontSize="14.22px"
								marginLeft="4px"
								mr="23.34px"
								onClick={() => handleButtonClick(category)}
								selected={selectedCategory === category}
							/>
						))}
				</GroupButton>
			</GroupButtonResponsive>
			<DealsContainer>
				{fetchingData && ( // Show LoaderContainer when fetching data
					<LoaderContainer>
						<Loader />
					</LoaderContainer>
				)}
				<ItemCard products={Products} />
			</DealsContainer>
			<PageIndicator />
		</Section>
	);
}
