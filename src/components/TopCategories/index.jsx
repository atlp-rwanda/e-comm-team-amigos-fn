import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import categoryCardElectronic from "./../../assets/img/CategoryCardElectronic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "../../assets/css/swiper.navigation.css";
import { Navigation } from "swiper";
import "./style.css";
import useWindowSize from "../../hooks/useWindowResize";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../SectionHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/actions/homeAction";

const Section = styled(Box)(({ theme }) => ({
	width: "95%",
	marginTop: "23px",
	marginLeft: "auto",
	marginRight: "auto",
	paddingBottom: "54px",
	[theme.breakpoints.down("sm")]: {
		paddingLeft: "20px",
		paddingRight: "20px",
	},
}));
const SlideContent = styled(Box)(({ theme }) => ({
	margin: "37px", // Default margin value

	[theme.breakpoints.down("sm")]: {
		margin: "58px", // Adjust margin for smaller screens
	},
	[theme.breakpoints.down("md")]: {
		margin: "60px", // Adjust margin for smaller screens
	},
}));

const SectionHeader = styled(SectionTitle)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		marginLeft: "59px",
	},
}));

export default function TopCategories() {
	const { width } = useWindowSize();
	const [maxSlides, setMaxSlides] = useState(1);

	useEffect(() => {
		if (width <= 480) setMaxSlides(1);
		if (width <= 766 && width >= 480) setMaxSlides(2);
		if (width <= 900 && width >= 766) setMaxSlides(3);
		if (width <= 1200 && width >= 900) setMaxSlides(4);
		if (width > 1200) setMaxSlides(5);
	}, [width]);
	const dispatch = useDispatch();
	const { homeData } = useSelector((state) => state);
	const { categories } = homeData;

	useEffect(() => {
		dispatch(fetchCategory());
	}, []);
	return (
		<Section>
			<SectionHeader>Show Our Top Categories</SectionHeader>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
				slidesPerView={maxSlides}
				slidesPerGroup={maxSlides}
				spaceBetween={20}
				style={{
					background: "none",
					padding: "5px",
				}}
			>
				{categories.map((category, index) => (
					<SwiperSlide key={index}>
						<SlideContent>
							<CategoryCard
								title={category}
								img={categoryCardElectronic}
							/>
						</SlideContent>
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
}
