import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/material/styles";
import { Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/actions/homeAction";
import Box from "@mui/material/Box";
import car from "./../../assets/img/toyota.png";
import Tshirt from "./../../assets/img/mens-fancy-t-shirt-1629807323-5956513.jpeg";
import Fashion from "./../../assets/img/Fashion.png";
import computer from "./../../assets/img/computer.png";
import string from "./../../assets/img/string.jpg";
import electronics from "./../../assets/img/electronics.png";
import fruits from "./../../assets/img/fruits.png";
import funiture from "./../../assets/img/funiture.jpg";
import drinks from "./../../assets/img/soft-drink-filante.jpg";
import women from "./../../assets/img/women'sfashion.png";
import men from "./../../assets/img/men's fashion.jpeg";
import shoes from "./../../assets/img/shoes.jpg";
import tv from "./../../assets/img/tv.png";
import useWindowSize from "../../hooks/useWindowResize";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../SectionHeader";
import "swiper/swiper.min.css";
import "../../assets/css/swiper.navigation.css";
import "./style.css";


const categoryImages = {
	'Electronics':electronics,
	'Fashion': Fashion,
	'Computer': computer,
	'Men': Tshirt,
	"Men's Fashion": men,
	'Electronic': electronics,
	'Choes': shoes,
	'Cars': car,
	'string': string,
	'Furniture': funiture,
	'TV': tv,
	'fashion': women,
	'fruits': fruits,
	'Furniture ': funiture,
	'soft drinks': drinks,
  };

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
	console.log("categories:", categories);
	return (
		<Section>
			<SectionHeader>Our Top Categories</SectionHeader>
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
								img={categoryImages[category]}
							/>
						</SlideContent>
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
}
