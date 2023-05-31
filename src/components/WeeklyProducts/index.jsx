import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import SectionTitle from '../SectionHeader';
import WeeklyCard from './WeeklyCard';
import useWindowSize from '../../hooks/useWindowResize';
import product1 from '../../assets/img/ElectronicDevices.png';
import product2 from '../../assets/img/Nike-Shoes-Air-Max-PNG-Photos.png';
import product3 from '../../assets/img/computer.png';
import product4 from '../../assets/img/soft-drink-filante.jpg';
import product5 from '../../assets/img/tv.png';
import product6 from '../../assets/img/Toyota-Car-PNG.png';
import 'swiper/swiper.min.css';
import '../../assets/css/swiper.scrollbar.css';

const Container = styled(Box)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '5%',
	paddingRight: '5%',
	paddingTop: '50px',
}));

const CardsContainer = styled(Box)(({ theme }) => ({
	height: 'auto',
	width: '100%',
	marginTop: '55px',
}));

export default function WeeklyProducts() {
	const { width } = useWindowSize();
	const [maxSlides, setMaxSlides] = useState(1);
	useEffect(() => {
		if (width <= 900) setMaxSlides(1);
		if (width <= 1336 && width >= 900) setMaxSlides(2);
		if (width > 1336) setMaxSlides(3);
	}, [width]);

	return (
		<Container>
			<SectionTitle>Weekly popular products</SectionTitle>
			<CardsContainer>
				<Swiper
					slidesPerView={maxSlides}
					scrollbar={{ hide: true }}
					modules={[Scrollbar, Navigation]}
					navigation
				>
					<SwiperSlide>
						<WeeklyCard
							title="Fridge"
							img={product1}
							price={{ amount: 501 }}
							description="Table with air purifier, stained veneer/black"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<WeeklyCard
							title="Nike 23"
							img={product2}
							price={{ amount: 21 }}
							description="The Jordan 23 Engineered Parka is equipped for layering up or down"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<WeeklyCard
							title="HP pro"
							img={product3}
							price={{ amount: 301 }}
							description="Discover freedom with the ProBook line from HP®"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<WeeklyCard
							title="Soft drinks"
							img={product4}
							price={{ amount: 501 }}
							description="We are here to refresh the world and make a difference. Learn more about the Coca-Cola"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<WeeklyCard
							title="Smart TV"
							img={product5}
							price={{ amount: 50 }}
							description="Table with air purifier, stained veneer/black"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<WeeklyCard
							title="Nissan suv"
							img={product6}
							price={{ amount: 5001 }}
							description="Nissan creates vehicles and technologies that enrich people's lives"
						/>
					</SwiperSlide>
				</Swiper>
			</CardsContainer>
		</Container>
	);
}