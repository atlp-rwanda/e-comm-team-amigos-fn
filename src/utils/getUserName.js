import axios from "axios";

export default async function getUserName(id) {
	try {
		// eslint-disable-next-line no-undef
		const res = await axios.get(`${process.env.BACKEND_URL}/user/${id}`, {
			headers: {
				common: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			},
		});

		if (res.status === 200) {
			return res.data.user.userName;
		} else return null;
	} catch (err) {
		return null;
	}
}
