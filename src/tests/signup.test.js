import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SignUp from '../views/sign-up/SignUp.jsx';
import renderConnected from './utils.js';

describe('<SIGNUP/>', () => {
	beforeEach(() => {
		renderConnected(<SignUp />);
	});

	it('renders signup heading', () => {
		const signUpHeading = screen.getByText(/create account/i);
		expect(signUpHeading).toBeInTheDocument();
	});

	it('renders signup Form', () => {
		const signUpForm = screen.getByRole('form');
		expect(signUpForm).toBeInTheDocument();
	});

	it('renders signup button', () => {
		const btn = screen.getByRole('button');
		expect(btn).toBeInTheDocument();
	});

	it('renders first name input', () => {
		const lastNameInput = screen.getByLabelText('First Name');
		expect(lastNameInput).toBeInTheDocument();
	});

	it('changes input value', () => {
		const firstNameInputEl = screen.getByLabelText('First Name');

		fireEvent.focus(firstNameInputEl, { target: { value: 'Eric' } });
		expect(firstNameInputEl.value).toBe('Eric');
	});
});
