import Header from '../components/Header';
import Hero from '../components/Hero';

import '../App.css';
import TopCategories from '../components/TopCategories';
import TodayDeals from '../components/TodayDeal';
import Footer from '../components/Footer';
import Discounts from './../components/Discount';
import WeeklyProducts from '../components/WeeklyProducts';
import InteriorDesignSection from '../components/InterialDesignSection';

export default function HomePage() {
	return (
		<>
			<Header />
			<Hero />
			<TopCategories />
			<TodayDeals />
			<Discounts />
			<WeeklyProducts />
			<InteriorDesignSection />
			<Footer />
		</>
	);
}
