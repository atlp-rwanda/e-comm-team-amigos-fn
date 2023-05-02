// src/test/utils/renderConnected.js
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
// Replace this with the appropriate imports for your project
import store from '../redux/store';

const renderConnected = (ui) => {
	const Wrapper = ({ children }) => (
		<Provider store={store}>{children}</Provider>
	);
	return render(ui, { wrapper: Wrapper });
};

export default renderConnected;
