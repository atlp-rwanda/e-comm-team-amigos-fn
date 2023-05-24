import Header from "../components/Header/index.jsx";
import Hero from "../components/Hero/index.jsx";
import TopCategories from "../components/TopCategories/index.jsx";
import TodayDeals from "../components/TodayDeal/index.jsx";
import Footer from "../components/Footer/index.jsx";
import Discounts from "./../components/Discount/index.jsx";
import WeeklyProducts from "../components/WeeklyProducts/index.jsx";
import InteriorDesignSection from "../components/InterialDesignSection.jsx";
import "../App.css";
import ChatModal from "./chat/chatModal.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		if (token) {
			openModal();
		} else {
			navigate("/login");
		}
	};

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<>
			<Header />
			<Hero />
			<div>
				<button onClick={handleClick} className="open-chat">
					Chat
				</button>
				{showModal && <ChatModal closeModal={closeModal} />}
			</div>
			<TopCategories />
			<TodayDeals />
			<Discounts />
			<WeeklyProducts />
			<InteriorDesignSection />
			<Footer />
		</>
	);
}
