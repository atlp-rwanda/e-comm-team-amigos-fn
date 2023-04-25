import LoginForm from './LoginForm.jsx';
import GoogleAuth from '../../components/GoogleAuth.jsx';
export default function LoginPage() {
	return (
		<>
			<div className="google-auth">
				<LoginForm />
				<GoogleAuth />
			</div>
		</>
	);
}
