import axios from "axios";

export default axios.create({
	baseURL: "https://e-comm-team-amigos-bn-project.onrender.com",
	headers: {
		common: {
			"Content-Type": "application/json",
		},
	},
});