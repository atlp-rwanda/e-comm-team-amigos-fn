import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import HomePage from '../views/HomePage';

test('renders the homepage', () => {
	render(
		<BrowserRouter>
			<HomePage />
		</BrowserRouter>,
	);
	expect(screen.queryAllByText('Amigos')[0]).toBeInTheDocument();
});
