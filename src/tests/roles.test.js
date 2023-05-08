import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Roles from '../components/roles/Roles.jsx';
import renderConnected from './utils.js';

describe('/dashboard/roles', () => {
	beforeEach(() => {
		renderConnected(<Roles />);
	});

	it('renders roles heading', () => {
		const rolesHeading = screen.getByText(/manage Roles/i);
		expect(rolesHeading).toBeInTheDocument();
	});

	it('renders disabled button', () => {
		const btn = screen.getByText(/search/i);
		expect(btn).toBeInTheDocument();
	});
});
