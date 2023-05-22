import axios from "axios";

export default async function getUserProfile() {
	try {
		// eslint-disable-next-line no-undef
		const res = await axios.get(`${process.env.BACKEND_URL}/user/profile`, {
			headers: {
				common: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			},
		});

		if (res.status === 200) {
			return res.data.profile;
		} else return null;
	} catch (err) {
		return null;
	}
}
