import React from "react";
import UpdateProductPage from "../views/update-product/updateProduct";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<UpdateProductPage />
			</Router>
		</Provider>,
	);
});
describe("Create Update Component Rendering", () => {
	test("renders the component", () => {
		render(
			<Provider store={store}>
				<Router>
					<UpdateProductPage />
				</Router>
			</Provider>,
		);
	});
	it("renders Cancel button", () => {
		const btn = screen.getByTestId("cancel");
		expect(btn).toBeInTheDocument();
	});

	it("renders Update button", () => {
		const btn = screen.getByTestId("update");
		expect(btn).toBeInTheDocument();
	});
});
