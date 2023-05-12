import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../button/authbutton.jsx";
export default function AuthForm() {
	const navigate = useNavigate();
	const location = useLocation();
	const [otp, setOtp] = useState(new Array(4).fill(""));
	let [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isDisabled, setisDisabled] = useState(false);
	const userEmail = location.state?.loginSuccess.otp.email;
	const handleChange = (element, index) => {
		setOtp([
			...otp.map((d, idx) =>
				idx === index ? element.value.slice(0, 1) : d,
			),
		]);
		if (element.nextSibling) {
			element.nextSibling.focus();
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const otpcode = otp.join("");
		let count = 0;
		for (let i = 1; i < otp.length; i++) {
			if (otp[i] === "") {
				count++;
				setError((error = "fill in the code"));
			} else if (otp[i] > 9) {
				count--;
				setError((error = "Only single number Allowed"));
			}
		}
		if (count === 0) {
			if (!userEmail) {
				setIsLoading(false);
				setError((error = "You should first login"));
				setTimeout(() => {
					navigate("/login");
				}, 3000);
			} else if (userEmail) {
				try {
					setisDisabled(false);
					setIsLoading(true);
					const res = await axios.post(
						"https://e-comm-team-amigos-bn-project.onrender.com/user/otp",
						{ email: userEmail, otp: otpcode },
					);
					localStorage.setItem("token",  res.data.token);
					localStorage.setItem("user", JSON.stringify(res.data.user));
					navigate("/dashboard");
				} catch (err) {
					setIsLoading(false);
					setError((error = err.response.data.message));
				}
			}
		}
	};
	return (
		<div className="form-container">
			<form data-testid="auth-form">
				<div>
					{otp.map((data, index) => {
						return (
							<input
								type="number"
								name="otp"
								maxLength="1"
								data-testid={`otp${index + 1}`}
								key={index}
								onChange={(e) => handleChange(e.target, index)}
								value={data}
								onFocus={(e) => e.target.focus()}
							/>
						);
					})}
				</div>
				<div className="error">
					<p> {error}</p>
				</div>
				<Button
					isDisabled={isDisabled}
					isLoading={isLoading}
					onClick={(e) => handleSubmit(e)}
				/>
			</form>
		</div>
	);
}
