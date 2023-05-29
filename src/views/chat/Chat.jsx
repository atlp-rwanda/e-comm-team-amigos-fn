import React, { useState, useEffect, useRef } from "react";
import "./chat.style.scss";
import io from "socket.io-client";
import { MdSend } from "react-icons/md";
import { formatDateTime } from "./date";
import { fetchChats } from "../../redux/chat/get_chat";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";

const Chat = () => {
	const token = localStorage.getItem("token");
	const decodedToken = jwtDecode(token);
	const userId = decodedToken.userId;
	const user = JSON.parse(localStorage.getItem("user"));
	const socket = io("https://e-comm-team-amigos-bn-project.onrender.com", {
		query: { token },
		transports: ["websocket"],
	});
	const Chats = useSelector((state) => state.chatState);
	const dispatch = useDispatch();
	const [inputMessage, setInputMessage] = useState("");
	const [isSending, setIsSending] = useState(false);
	const [scrollToBottom, setScrollToBottom] = useState(false);
	const messageContainerRef = useRef(null);
	let emailMatch = false;

	useEffect(() => {
		dispatch(fetchChats());
		socket.on("message", (message) => {
			emailMatch = message.userName == user.username;
			showMessage(message);
			setIsSending(false);
		});

		setScrollToBottom(true);
		setTimeout(() => {
			setScrollToBottom(true);
		}, 0);

		return () => {
			socket.disconnect();
		};
	}, []);
	const showMessage = (data) => {
		const div = document.createElement("div");
		emailMatch
			? div.classList.add("incoming")
			: div.classList.add("outgoing");
		div.innerHTML = `<p class="meta">${data.userName}</p>
		<span class = "time">${data.time}</span>
         <p class="text">
         ${data.msg}
         </p>`;
		document.getElementById("messageContainer").appendChild(div);
	};

	const handleInputChange = (event) => {
		setInputMessage(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.key == "Enter") {
			handleSubmit(event);
			clearInput();
		}
	};

	const clearInput = () => {
		document.getElementById("input-field").value = "";
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (inputMessage.trim() !== "") {
			setIsSending(true);
			await new Promise((resolve) => setTimeout(resolve, 1000));
			socket.emit("message", inputMessage);
			clearInput();
		}
	};

	useEffect(() => {
		if (scrollToBottom) {
			scrollToLatestMessage();
			setScrollToBottom(false);
		}
	}, [Chats.allChats, scrollToBottom]);

	const scrollToLatestMessage = () => {
		const container = messageContainerRef.current;
		if (container) {
			container.scrollTop = container.scrollHeight;
		}
	};

	return (
		<div className="chat">
			<div className="chat-heading">
				<h2>Amigos Chat Space</h2>
			</div>
			<div
				className="messages"
				id="messageContainer"
				ref={messageContainerRef}
			>
				{Chats.allChats.map((message, index) => (
					<div
						className={`${
							userId === message.userId ? "incoming" : "outgoing"
						}`}
						key={index}
					>
						<p class="meta">{message.userName}</p>
						<p>{message.content}</p>
						<span className="time">
							{formatDateTime(message.createdAt)}
						</span>
					</div>
				))}
			</div>
			<form>
				<div className="chat-input-container">
					<input
						type="text"
						id="input-field"
						placeholder="Write Message"
						className="chat-message-container"
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
						disabled={isSending}
					/>
					<MdSend className="send" onClick={handleSubmit} />
				</div>
			</form>
		</div>
	);
};

export default Chat;
