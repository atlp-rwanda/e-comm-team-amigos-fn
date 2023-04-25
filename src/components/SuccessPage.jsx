import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SuccessPage() {
	const navigate = useNavigate();

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const token = urlParams.get('token');
		localStorage.setItem('token', token);
		setTimeout(() => {
			navigate('/');
		}, 2000);
	}, []);

	return <p>Success, redirecting to dashboard .............</p>;
}

export default SuccessPage;
