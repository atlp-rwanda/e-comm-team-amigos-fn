/* eslint-disable no-undef */
import AddtoCart from "../components/Product/addtocartform";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<AddtoCart />
			</Router>
		</Provider>,
	);
});
const product = {
	name: "test product",
	price: 209,
	quantity: 25,
};
describe("Create Add to Cart Component Rendering", () => {
	test("renders the component", () => {
		render(
			<Provider store={store}>
				<Router>
					<AddtoCart product={product} />
				</Router>
			</Provider>,
		);
	});
	it("renders Buy Now button", () => {
		const btn = screen.getByTestId("buy");
		expect(btn).toBeInTheDocument();
	});

	it("renders Add to cart button", () => {
		const btn = screen.getByTestId("add");
		expect(btn).toBeInTheDocument();
	});
});