import axios from "axios";

export default axios.create({
	baseURL: "https://e-comm-team-amigos-bn-project.onrender.com",
	// baseURL: "http://localhost:4000",
	headers: {
		common: {
			"Content-Type": "application/json",
		},
	},
});