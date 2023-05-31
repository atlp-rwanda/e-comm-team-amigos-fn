/* eslint-disable no-undef */
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AllProductsPage from "../views/AllProducts";

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<AllProductsPage />
			</Router>
		</Provider>,
	);
});
describe("Products List Page Rendering", () => {
	test("renders the page", () => {
		render(
			<Provider store={store}>
				<Router>
					<AllProductsPage />
				</Router>
			</Provider>,
		);
	});
	it("Renders filter list", () => {
		const filterList = screen.getByTestId("all-products-filter");
		expect(filterList).toBeInTheDocument();
	});

	it("renders product list container", () => {
		const productListContianer = screen.getByTestId(
			"all-products-list-container",
		);
		expect(productListContianer).toBeInTheDocument();
	});

	it("Renders Load more button", () => {
		const loadMoreBtn = screen.getByTestId("all-products-load-more-btn");
		expect(loadMoreBtn).toBeInTheDocument();
	});
});
