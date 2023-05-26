import React from "react";
import Chat from "./Chat";
import "./chat.style.scss";

const ChatModal = ({ closeModal }) => {
	return (
		<div className="chat-modal">
			<div className="chat-modal-content">
				<span className="close" onClick={closeModal}>
					&times;
				</span>
				<Chat />
			</div>
		</div>
	);
};

export default ChatModal;
