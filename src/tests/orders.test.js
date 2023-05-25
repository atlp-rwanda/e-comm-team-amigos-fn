import React from "react";
import { render } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import Order from '../components/order/Order.jsx'
import Orders from "../components/orders/Orders.jsx";
import "@testing-library/jest-dom";
import { faTruckPlane } from "@fortawesome/free-solid-svg-icons";

const mockStore = configureStore();

const initialState = {
	orders:{

		fetchingOrders: true,
		orders: [{
			id:"2388934-423843-2348",
			status:"pending",
			expected_delivery_date: "2022-02-02",
			OrderProducts: [{
				id: "73y98432-384793-2384932",
				name: "Phone",
				quantity:10,
				unitPrice: 10000
			}]
		}],
		errorMsg: '',
	}
};

const renderConnected = (ui) => {
	const store = mockStore(initialState);
	const Wrapper = ({ children }) => (
		<Provider store={store}>{children}</Provider>
	);
	return render(ui, { wrapper: Wrapper });
};

describe("Orders", () => {
	test("renders orders", () => {
		const orderComp = renderConnected(
				<Router>
					<Orders />
				</Router>,
			)
	});
});


