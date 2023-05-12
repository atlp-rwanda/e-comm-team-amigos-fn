import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Users from '../components/users/Users.jsx';
import renderConnected from './utils.js';

describe('/dashboard/users', () => {
	beforeEach(() => {
		renderConnected(<Users />);
	});

	it('renders roles heading', () => {
		const usersHeading = screen.getByText(/users/i);
		expect(usersHeading).toBeInTheDocument();
	});
});
