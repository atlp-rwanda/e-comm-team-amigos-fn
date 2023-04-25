import React from 'react';
import google from './../assets/img/google-signin-button.png';
import './../assets/css/google.scss';
const GoogleAuth = () => {
	return (
		<>
			<div className="social">
				<div class="vl"></div>
				<div className="goole-auth">
					<h1 className="heading">Login with Socials</h1>
					<a
						href={
							process.env.REACT_APP_APP_BACKEND_URL
								? `${process.env.REACT_APP_APP_BACKEND_URL}/token/google`
								: 'https://e-comm-team-amigos-bn-project.onrender.com/token/google'
						}
					>
						<img src={google} className="logo" />
					</a>
				</div>
			</div>
		</>
	);
};

export default GoogleAuth;
