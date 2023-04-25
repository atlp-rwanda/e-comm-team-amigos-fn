import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import GoogleAuth from '../components/GoogleAuth';
import SuccessPage from '../components/SuccessPage';

describe('Google Authentication', () => {
	test('renders the google auth', () => {
		render(<GoogleAuth />);
		expect(screen.getByRole('heading')).toHaveTextContent(
			'Login with Socials',
		);
	});
});

describe('Success Page', () => {
	test('renders the success page', () => {
		render(
			<BrowserRouter>
				<SuccessPage />
			</BrowserRouter>,
		);
		expect(
			screen.getByText('Success, redirecting to dashboard .............'),
		).toBeInTheDocument();
	});
});
