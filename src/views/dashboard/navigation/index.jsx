import Header from "../header/index.jsx";
import AsideBar from "../asideBar/index.jsx";
import { Outlet } from "react-router-dom";
import ChatModal from "../../chat/chatModal.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import "../../chat/chat.style.scss";
import "../../../App.css";

const DashboardNav = ({ socket }) => {
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
	useEffect(() => {
		document.title = "Amigos | Dashboard";
	})
	return (
		<>
			<div className="dashboard-container">
				<AsideBar />
				<div className="main-layout">
					<Header socket={socket} />
					<Outlet />
				</div>
			</div>
			<div>
				<button onClick={handleClick} className="open-chat">
					Chat
				</button>
				{showModal && <ChatModal closeModal={closeModal} />}
			</div>
		</>
	);
};

export default DashboardNav;
