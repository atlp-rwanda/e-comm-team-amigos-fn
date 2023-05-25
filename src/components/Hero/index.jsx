import { styled } from "@mui/material/styles/";
import colors from "../../constants/colors";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper.min.css";

import photocarousel1 from "./../../assets/img/manWomanHappy.png";
import photocarousel2 from "./../../assets/img/WomanWithBags.png";
import photocarousel3 from "./../../assets/img/familyWithBags.png";
import { Pagination } from "swiper";
import "./Hero.css";
import useWindowSize from "../../hooks/useWindowResize";

const SlideContainer = styled(Paper)(({ theme }) => ({
	borderRadius: "17.893px",
	width: "1288.29px",
	height: "609.26px",
	background: colors.beige,
	marginTop: "10px",
	marginLeft: "auto",
	marginRight: "auto",
	position: "relative",
	paddingTop: "120px",
	paddingLeft: "82px",
	[theme.breakpoints.down("sm")]: {
		width: "95%",
		paddingLeft: "5%",
		paddingTop: "5%",
	},
	[theme.breakpoints.between("sm", "lg")]: {
		width: "95%",
		paddingLeft: "5%",
		paddingTop: "5%",
	},
}));

const Section = styled(Box)(({ theme }) => ({
	width: "100%",
	marginTop: "75px",
	[theme.breakpoints.up("1336")]: {
		marginTop: "115px",
	},
}));

const HeroText = styled(Typography)(({ theme }) => ({
	fontFamily: "Inter",
	fontStyle: "normal",
	fontWeight: "600",
	fontSize: "64px",
	lineHeight: "72px",
	display: "flex",
	alignItems: "center",
	letterSpacing: "-0.04em",
	color: colors.darkGreen,
	width: "576.15px",
	height: "216px",
	marginBottom: "136px",
	[theme.breakpoints.down("md")]: {
		fontSize: "34px",
		lineHeight: "44px",
		width: "80%",
		height: "auto",
		marginBottom: "40px",
	},
}));

const Img = styled("img")(({ theme }) => ({
	width: "504.58px",
	height: "463.43px",
	position: "absolute",
	bottom: "0",
	top: "auto",
	right: "87px",
	left: "auto",
	[theme.breakpoints.down("sm")]: {
		height: "60%",
		width: "57%",
		right: "20px",
	},
}));

const pagination = {
	clickable: true,
	renderBullet: function (index, className) {
		return "<span className='" + className + " bullet'></span>";
	},
};

export default function Hero() {
	const sizes = useWindowSize();
	return (
		<Section>
			<Swiper
				slidesPerView={1}
				modules={[Autoplay, Pagination]}
				autoplay={{ delay: 2500 }}
				pagination={pagination}
			>
				<SwiperSlide>
					<SlideContainer elevation={0}>
						<HeroText data-testid="heroText">
							Shop now and enjoy free shipping on all orders
						</HeroText>
						<Button
							label="New Arrival"
							borderRadius="80px"
							width={sizes.width >= 600 ? "363px" : "70%"}
							height={sizes.width >= 600 ? "80px" : "auto"}
							active
						/>
						<Img
							src={photocarousel1}
							alt="A man and a woman with bags. Happy"
						/>
					</SlideContainer>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContainer
						sx={{ background: "#D9F6EC" }}
						elevation={0}
					>
						<HeroText>
							Shop now and enjoy free shipping on all orders
						</HeroText>
						<Button
							label="New Arrival"
							borderRadius="80px"
							width={sizes.width >= 600 ? "363px" : "70%"}
							height={sizes.width >= 600 ? "80px" : "auto"}
							active
						/>
						<Img
							src={photocarousel2}
							alt="A man and a woman with bags. Happy"
						/>
					</SlideContainer>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContainer
						sx={{ background: "#F4DDDD" }}
						elevation={0}
					>
						<HeroText>
							Shop now and enjoy free shipping on all orders
						</HeroText>
						<Button
							label="New Arrival"
							borderRadius="80px"
							width={sizes.width >= 600 ? "363px" : "70%"}
							height={sizes.width >= 600 ? "80px" : "auto"}
							active
						/>
						<Img
							src={photocarousel3}
							alt="A man and a woman with bags. Happy"
						/>
					</SlideContainer>
				</SwiperSlide>
			</Swiper>
		</Section>
	);
}
