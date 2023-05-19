import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '../../redux/verify-email/actions.js';
import Button from '../../components/Button/Button.jsx';
import './verify-acc.styles.scss';
import '../../App.css';

function verifcationFails(navigate, verError) {
	return (
		<div className="verify-acc-container">
			<div className="verify-account-error-container">
				<span className="error">{verError}</span>
				<Button onClick={() => navigate('/')}>&larr; Back Home</Button>
			</div>
		</div>
	);
}

function verifyingAcc() {
	return (
		<div className="verify-acc-container">
			<div className="verifying-acc">
				<div className="loading-spinner"></div>
				<h3>Verifying your account . . .</h3>
			</div>
		</div>
	);
}

function accountVerified(navigate) {
	return (
		<div className="verify-acc-container">
			<div className="acc-verified">
				<p className="acc-verified__text">
					<span className="highlight">Account</span> Verified!
				</p>
				<button
					className="primary-btn"
					onClick={() => navigate('/login')}
				>
					Login
				</button>
			</div>
		</div>
	);
}

export default function VerrifyAccPage() {
	const { accVerified } = useSelector((state) => state.verifyEmail);
	const { verError } = useSelector((state) => state.verifyEmail);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { token } = useParams();
	useEffect(() => {
		dispatch(verifyEmail(token));
	}, [dispatch]);

	return (
		<>
			{(verError.length > 0 && verifcationFails(navigate, verError)) ||
				(!accVerified && verifyingAcc()) ||
				accountVerified(navigate)}
		</>
	);
}
