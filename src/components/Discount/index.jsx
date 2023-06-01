import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import SectionTitle from '../SectionHeader';
import DiscountCard from './DiscountCard';
import useWindowSize from '../../hooks/useWindowResize';
import banner1 from './../../assets/img/banner1.png';
import banner2 from './../../assets/img/banner2.png';
import banner3 from './../../assets/img/banner3.jpg';
import banner4 from './../../assets/img/banner4.jpg';
import banner5 from './../../assets/img/banner5.jpg';
import banner6 from './../../assets/img/banner6.jpg';
import banner7 from './../../assets/img/banner7.jpg';
import banner8 from './../../assets/img/banner8.png';
import banner9 from './../../assets/img/banner9.png';
import 'swiper/swiper.min.css';
import '../../assets/css/swiper.scrollbar.css';

const Container = styled(Box)(({ theme }) => ({
	width: '1240px',
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	marginRight: 'auto',
	[theme.breakpoints.down('lg')]: {
		width: '90%',
	},
	[theme.breakpoints.down('sm')]: {
		width: '90%',
		height: 'auto',
	},
}));

const DiscountCardsContainer = styled(Swiper)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	[theme.breakpoints.between('sm', 'lg')]: {
		// overflowX: 'scroll',
	},
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

const products = [
	{
		images: banner1,
		potentialSave: '$99',
		description: 'Explore Our products',
	},
	{
		images: banner2,
		potentialSave: '$75',
		description: 'Explore shoes and men fashion',
	},
	{
		images: banner3,
		potentialSave: '$25',
		description: 'Seasonal products',
	},
	{
		images: banner4,
		potentialSave: '$20',
		description: 'Our best products for season',
	},
	{
		images: banner5,
		potentialSave: '$35',
		description: 'Explore Our Furniture & home Furnishing Range',
	},
	{
		images: banner6,
		potentialSave: '$10',
		description: 'Explore Our Furniture & home Furnishing Range',
	},
	{
		images: banner7,
		potentialSave: '$55',
		description: 'Explore Our Furniture & home Furnishing Range',
	},
	{
		images: banner8,
		potentialSave: '$70',
		description: 'Explore Our Furniture & home Furnishing Range',
	},
	{
		images: banner9,
		potentialSave: '$34',
		description: 'Explore Our Furniture & home Furnishing Range',
	}
];

export default function Discounts() {
	const { width } = useWindowSize();
	const [maxSlides, setMaxSlides] = useState(1);
	useEffect(() => {
		if (width <= 600) setMaxSlides(1);
		if (width <= 1336 && width >= 900) setMaxSlides(2);
		if (width > 1336) setMaxSlides(4);
	}, [width]);

	return (
		<Container>
			<SectionTitle>Get up to 70% off!</SectionTitle>
			<DiscountCardsContainer
				modules={[Scrollbar]}
				scrollbar={{ hide: true }}
				slidesPerView={maxSlides}
			>
				{products.map((product, index) => (
					<SwiperSlide key={index}>
						<DiscountCard
							img={product.images}
							potentialSave={product.potentialSave}
							description={product.description}
						/>
					</SwiperSlide>
				))}
			</DiscountCardsContainer>
		</Container>
	);
}