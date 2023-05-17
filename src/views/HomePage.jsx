import Header from '../components/Header/index.jsx';
import Hero from '../components/Hero/index.jsx';

import '../App.css';
import TopCategories from '../components/TopCategories/index.jsx';
import TodayDeals from '../components/TodayDeal/index.jsx';
import Footer from '../components/Footer/index.jsx';
import Discounts from './../components/Discount/index.jsx';
import WeeklyProducts from '../components/WeeklyProducts/index.jsx';
import InteriorDesignSection from '../components/InterialDesignSection.jsx';
import { useSelector } from 'react-redux';
import MainLoader from '../components/loader/mainLoader.jsx';
import Loader from '../components/loader/index.jsx';

export default function HomePage() {
	const { paymentStart } = useSelector((state)=>state.payment);
	return (
		<>
			{paymentStart?  (
			<MainLoader>
				<Loader/>
			</MainLoader>
			):(
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
			)
			}
		</>
	);
}
