import React from 'react';
import CreateProduct from '../views/create-product/CreateProduct';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<CreateProduct />
			</Router>
		</Provider>,
	);
});
describe('Create Product Component Rendering', () => {
	test('renders the component', () => {
		render(
			<Provider store={store}>
				<Router>
					<CreateProduct />
				</Router>
			</Provider>,
		);
	});
	it('renders Cancel button', () => {
		const btn = screen.getByTestId('cancel');
		expect(btn).toBeInTheDocument();
	});

	it('renders Create button', () => {
		const btn = screen.getByTestId('create');
		expect(btn).toBeInTheDocument();
	});
});
