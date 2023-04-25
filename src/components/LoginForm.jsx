import './../assets/css/loginForm.css';

export default function LoginForm() {
	return (
		<div className="contacts-container mt-5">
			<div className="form form-login">
				<div>
					<h2>Login</h2>
				</div>
				<form action="" id="login-form">
					<div className="input input-login">
						<label htmlFor="email" className="">
							email
						</label>
						<input type="email" name="email" placeholder="Email" />
					</div>
					<div className="input input-login">
						<label htmlFor="password" className="">
							password
						</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
						/>
					</div>
					<div className="form-footer">
						<div className="form-btn">
							<button type="submit" className="contact-btn">
								Login
							</button>
						</div>
						<a href="#" target="_blank" className="reset_password">
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}
