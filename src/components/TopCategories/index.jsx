import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import categoryCardElectronic from './../../assets/img/CategoryCardElectronic.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import '../../assets/css/swiper.navigation.css';
import { Navigation } from 'swiper';
import './style.css';
import useWindowSize from '../../hooks/useWindowResize';
import CategoryCard from './CategoryCard';
import SectionTitle from '../SectionHeader';

const Section = styled(Box)(({ theme }) => ({
	width: '95%',
	marginTop: '23px',
	marginLeft: 'auto',
	marginRight: 'auto',
	paddingBottom: '54px',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '20px',
		paddingRight: '20px',
	},
}));

const SectionHeader = styled(SectionTitle)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		marginLeft: '59px',
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
	return (
		<Section>
			<SectionHeader>Show Our Top Categories</SectionHeader>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
				slidesPerView={maxSlides}
				slidesPerGroup={maxSlides}
				style={{ background: 'none', padding: '5px' }}
			>
				<SwiperSlide>
					<CategoryCard title="Tech" img={categoryCardElectronic} />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryCard title="Tech" img={categoryCardElectronic} />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryCard title="Tech" img={categoryCardElectronic} />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryCard title="Tech" img={categoryCardElectronic} />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryCard title="Tech" img={categoryCardElectronic} />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryCard title="Tech" img={categoryCardElectronic} />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryCard title="Tech" img={categoryCardElectronic} />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryCard title="Tech" img={categoryCardElectronic} />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryCard title="Tech" img={categoryCardElectronic} />
				</SwiperSlide>
			</Swiper>
		</Section>
	);
}
