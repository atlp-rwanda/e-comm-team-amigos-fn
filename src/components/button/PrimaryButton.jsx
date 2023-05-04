import React from "react";

export default function PrimaryBtn({ title, color, width, onClick }) {
	return (
		<button
			onClick={onClick}
			style={{
				width: width,
				height: "30px",
				backgroundColor: "#096E3E",
				margin: ".5rem",
				border: 0,
				borderRadius: ".5rem",
				color: "#fff",
				cursor: "pointer",
			}}
		>
			{title}
		</button>
	);
}
