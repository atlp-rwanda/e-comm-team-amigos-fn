
import React from 'react';
import { render,screen} from '@testing-library/react';
import '@testing-library/jest-dom'

import MyComponent from '../components/App';

test('renders the homepage', () => {
 render(
     <MyComponent />
);
expect(screen.getByRole("img")).toBeInTheDocument();
const headerElement =screen.getByText(/Shop now and enjoy free shipping on all orders/i);
expect(headerElement).toBeInTheDocument();
});