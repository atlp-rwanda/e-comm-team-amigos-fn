import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../../components/form/Form.jsx';
import './sign-up.styles.scss';
import '../../App.css';

export default function SignUp() {
	const { accCreated } = useSelector((state) => state.signupForm);

	return (
		<>
			{(accCreated && (
				<div className="acc-created">
					<p>
						<span className="highlight">Account Created!</span>{' '}
						Check your email to activate your{' '}
						<span className="highlight">Account.</span>
					</p>
				</div>
			)) || (
				<>
					<h1 className="signup-heading">Create Account</h1>
					<Form />
				</>
			)}
		</>
	);
}
