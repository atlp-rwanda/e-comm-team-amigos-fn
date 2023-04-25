import "../assets/css/authentication.scss";
import { Icon } from "@iconify/react";
import AuthForm from "./form/AuthForm.jsx";
const sellerAuth = () => {
	return (
		<section>
			<div className="Container">
				<div className="logo">
					<Icon
						className="icon"
						icon="material-symbols:lock"
						color="#096f3e"
						width="77"
						height="55"
					/>
				</div>
				<div className="body-content">
					<div className="description">
						<span className="header">
							Authenticate Your Account
						</span>
						<span className="body-message">
							Please confirm your account by entering the
							Authorization code send to your email
						</span>
					</div>
					<AuthForm />
				</div>
			</div>
		</section>
	);
};
export default sellerAuth;
