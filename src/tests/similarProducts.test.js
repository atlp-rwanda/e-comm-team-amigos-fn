import React from "react";
import { render } from "@testing-library/react";
import RelatedProduct from "../components/RelatedItems/RelatedProducts.jsx";
import ProductCard from "../components/RelatedItems/productCard.jsx";
import "@testing-library/jest-dom";

describe("RelatedProduct", () => {
	test("renders the component with the correct heading", () => {
		const { getByText } = render(<RelatedProduct />);
		const headingElement = getByText("Similar products on Amigos");
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
		const { getByAltText, getByText } = render(
			<ProductCard {...mockProps} />,
		);

		const imageElement = getByAltText("product Image");
		expect(imageElement.src).toBe("http://localhost/image-url");

		const nameElement = getByText("Product Name");
		expect(nameElement).toBeInTheDocument();

		const descriptionElement = getByText("Product Description");
		expect(descriptionElement).toBeInTheDocument();

		const addToCartButton = getByText("Add to Cart");
		expect(addToCartButton).toBeInTheDocument();
	});
});
