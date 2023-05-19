/* eslint-disable no-undef */
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckoutPage from "../views/CheckoutPage";

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<CheckoutPage />
			</Router>
		</Provider>,
	);
});
describe("Checkout Component Rendering", () => {
	test("renders the page", () => {
		render(
			<Provider store={store}>
				<Router>
					<CheckoutPage />
				</Router>
			</Provider>,
		);
	});
	it("Renders product list", () => {
		const productList = screen.getByTestId(
			"checkout-product-list-container",
		);
		expect(productList).toBeInTheDocument();
	});

	it("renders continue to pay container & button", () => {
		const continueToPay = screen.getByTestId("checkout-continue-to-pay");
		expect(continueToPay).toBeInTheDocument();
	});

	it("Renders Address card", () => {
		const addressCard = screen.getByTestId("checkout-address-card");
		expect(addressCard).toBeInTheDocument();
	});
	// it("Opens address modal", () => {
	// 	act(() => {
	// 		screen
	// 			.getByTestId("checkout-open-address-modal-btn")
	// 			.dispatchEvent(new MouseEvent("click", { bubbles: true }));
	// 		console.log(screen.debug());
	// 		const addressModal = screen.getByTestId("checkout-address-modal");
	// 		expect(addressModal).toBeVisible();
	// 		// expect(addressModal).not.toBeVisible();
	// 	});
	// });
});
