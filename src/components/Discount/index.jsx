import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/swiper.min.css';
import '../../assets/css/swiper.scrollbar.css';

import SectionTitle from '../SectionHeader';
import DiscountCard from './DiscountCard';
import useWindowSize from '../../hooks/useWindowResize';

import scandianavianChairs from './../../assets/img/scandinavianChairs.png';

const Container = styled(Box)(({ theme }) => ({
	width: '1240px',
	// height: '412px',
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
		images: [
			scandianavianChairs,
			'https://picsum.photos/295/165',
			'https://picsum.photos/295/165',
		],
		potentialSave: '$99',
		description: 'Explore Our Furniture & home Furnishing Range',
	},
	{
		images: [
			scandianavianChairs,
			'https://picsum.photos/295/165',
			'https://picsum.photos/295/165',
		],
		potentialSave: '$99',
		description: 'Explore Our Furniture & home Furnishing Range',
	},
	{
		images: [
			scandianavianChairs,
			'https://picsum.photos/295/165',
			'https://picsum.photos/295/165',
		],
		potentialSave: '$99',
		description: 'Explore Our Furniture & home Furnishing Range',
	},
	{
		images: [
			scandianavianChairs,
			'https://picsum.photos/295/165',
			'https://picsum.photos/295/165',
		],
		potentialSave: '$99',
		description: 'Explore Our Furniture & home Furnishing Range',
	},
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
							img={product.images[0]}
							potentialSave={product.potentialSave}
							description={product.description}
						/>
					</SwiperSlide>
				))}
			</DiscountCardsContainer>
		</Container>
	);
}
