import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchInput from '../components/search/SearchInput.jsx'

test('renders the Search input field', () => {
	render(
		<BrowserRouter>
			<SearchInput />
		</BrowserRouter>,
	);
	const searchField = screen.getAllByPlaceholderText('Search product');
	expect(searchField[0]).toBeInTheDocument();
});
