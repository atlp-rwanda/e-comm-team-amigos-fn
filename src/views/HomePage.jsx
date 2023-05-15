import Header from '../components/Header/index.jsx';
import Hero from '../components/Hero/index.jsx';

import '../App.css';
import TopCategories from '../components/TopCategories/index.jsx';
import TodayDeals from '../components/TodayDeal/index.jsx';
import Footer from '../components/Footer/index.jsx';
import Discounts from './../components/Discount/index.jsx';
import WeeklyProducts from '../components/WeeklyProducts/index.jsx';
import InteriorDesignSection from '../components/InterialDesignSection.jsx';

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
