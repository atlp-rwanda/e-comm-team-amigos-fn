/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RelatedProduct from "../components/RelatedItems/RelatedProducts.jsx";
import ProductCard from "../components/RelatedItems/productCard.jsx";
import "@testing-library/jest-dom";

describe("RelatedProduct", () => {
	test("renders the component with the correct heading", () => {
		render(
			<MemoryRouter>
				<RelatedProduct />
			</MemoryRouter>,
		);
		const headingElement = screen.getByText("Similar products on Amigos");
		expect(headingElement).toBeInTheDocument();
	});
});

describe("ProductCard", () => {
	const mockProps = {
		image: "image-url",
		name: "Product Name",
		description: "Product Description",
	};

	test("renders the component with correct props", () => {
		render(
			<MemoryRouter>
				<ProductCard {...mockProps} />
			</MemoryRouter>,
		);

		const imageElement = screen.getByAltText("product Image");
		expect(imageElement.src).toBe("http://localhost/image-url");

		const nameElement = screen.getByText("Product Name");
		expect(nameElement).toBeInTheDocument();

		const descriptionElement = screen.getByText("Product Description");
		expect(descriptionElement).toBeInTheDocument();

		const addToCartButton = screen.getByText("Add to Cart");
		expect(addToCartButton).toBeInTheDocument();
	});
});
