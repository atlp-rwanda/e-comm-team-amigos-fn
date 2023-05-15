import React from "react";
import {
	render,
	screen,
	act,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Product from "../views/dashboard/product/index.jsx";
import { FETCH_PRODUCT_SUCCESS } from "../redux/types";
import ProductLayout from "../views/dashboard/product/product-layout";
import { FETCH_PRODUCT_START } from "../redux/types";

describe("Product section", () => {
	it("should display sellers items in the collection", () => {
		render(
			<Provider store={store}>
				<Router>
					<Product />
				</Router>
			</Provider>,
		);

		const sellerCollectionTitle = screen.getByTestId(
			"seller-collection-title",
		);
		const sellerCollectionSubTitle = screen.getByTestId(
			"seller-collection-sub-title",
		);
		const listingProductCard = screen.getByTestId("products-card");
		const loadingIndicator = screen.getByTestId("loading-indicator");

		expect(sellerCollectionTitle).toBeInTheDocument();
		expect(sellerCollectionSubTitle).toBeInTheDocument();
		expect(listingProductCard).toBeInTheDocument();
		expect(loadingIndicator).toBeInTheDocument();
	});
});

describe("Render products and delete product", () => {
	test("Renders product view", async () => {
		// Dispatch the fetchProducts action and await its completion
		const mockResponse = {
			currentPage: 1,
			totalPages: 6,
			previousPage: null,
			nextPage: 2,
			product: [
				{
					id: "aa2f98e3-d874-4ad6-966c-54b692626415",
					name: "orange",
					price: 500,
					quantity: 45,
					available: true,
					category: "fruits",
					bonus: 0,
					images: [
						"https://picsum.photos/265/190?id=0",
						"https://picsum.photos/265/190?id=1",
						"https://picsum.photos/265/190?id=2",
						"https://picsum.photos/265/190?id=3",
					],
					expiryDate: "2023-06-08T00:00:00.000Z",
					ec: 0,
					createdAt: "2023-05-08T13:44:55.101Z",
					updatedAt: "2023-05-08T13:44:55.101Z",
					userId: "a21ff216-a826-4a25-bf7a-b89f966568f1",
				},
				{
					id: "2c3fa44d-e3fe-4fe6-a90a-935dad58311a",
					name: "pineapple",
					price: 500,
					quantity: 45,
					available: true,
					category: "fruits",
					bonus: 0,
					images: [
						"https://picsum.photos/265/190?id=0",
						"https://picsum.photos/265/190?id=1",
						"https://picsum.photos/265/190?id=2",
						"https://picsum.photos/265/190?id=3",
					],
					expiryDate: "2023-06-08T00:00:00.000Z",
					ec: 0,
					createdAt: "2023-05-08T13:45:38.214Z",
					updatedAt: "2023-05-08T13:45:38.214Z",
					userId: "a21ff216-a826-4a25-bf7a-b89f966568f1",
				},
			],
		};

		const fetchProductSuccess = (payload) => ({
			type: FETCH_PRODUCT_SUCCESS,
			payload,
		});
		await store.dispatch(fetchProductSuccess(mockResponse));
		render(
			<Provider store={store}>
				<Router>
					<ProductLayout />
				</Router>
			</Provider>,
		);
		const fetchFinish = (payload) => ({
			type: FETCH_PRODUCT_START,
			payload,
		});

		store.dispatch(fetchFinish(false));
		await new Promise((resolve) => setTimeout(resolve, 0));

		const tableCell = screen.queryAllByTestId("row-product-list")[0];

		expect(tableCell).toBeInTheDocument();

		const modal = screen.getByTestId("delete-product-modal");
		expect(modal).not.toBeVisible();
		act(async () => {
			screen
				.queryAllByTestId("delete-btn-seller")[0]
				.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			await new Promise((resolve) => setTimeout(resolve, 0));

			expect(modal).toBeVisible();
		});
	});
});
jest.setTimeout(20000);
