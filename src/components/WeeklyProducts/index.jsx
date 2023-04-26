import { useState, useEffect } from 'react';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import '../../assets/css/swiper.scrollbar.css';

import SectionTitle from '../SectionHeader';
import WeeklyCard from './WeeklyCard';
import useWindowSize from '../../hooks/useWindowResize';
import eletronicDevicesImg from '../../assets/img/ElectronicDevices.png';

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
							title="Smart TV"
							img={eletronicDevicesImg}
							price={{ amount: 501 }}
							description="Table with air purifier, stained veneer/black"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<WeeklyCard
							title="Smart TV"
							img={eletronicDevicesImg}
							price={{ amount: 501 }}
							description="Table with air purifier, stained veneer/black"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<WeeklyCard
							title="Smart TV"
							img={eletronicDevicesImg}
							price={{ amount: 501 }}
							description="Table with air purifier, stained veneer/black"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<WeeklyCard
							title="Smart TV"
							img={eletronicDevicesImg}
							price={{ amount: 501 }}
							description="Table with air purifier, stained veneer/black"
						/>
					</SwiperSlide>
				</Swiper>
			</CardsContainer>
		</Container>
	);
}
