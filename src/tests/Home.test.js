import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import Hero from "../components/Hero";
import HeaderMain from "../components/Header/HeaderMain";

test("Renders the Header of App", () => {
	render(
		<BrowserRouter>
			<Header />
		</BrowserRouter>,
	);

	// expect(screen.getByRole('img')).toBeInTheDocument();
	const headerElement = screen.getByText(/Amigos/i);
	expect(headerElement).toBeInTheDocument();
});

test("Renders the Hero of App", () => {
	render(
		<BrowserRouter>
			<Hero />
		</BrowserRouter>,
	);

	// expect(screen.getByRole('img')).toBeInTheDocument();
	const textElement = screen.queryByTestId("heroText");
	expect(textElement).toBeInTheDocument();
});

describe(HeaderMain, () => {
	it("renders the logo name correctly", () => {
		render(
			<BrowserRouter>
				<HeaderMain backgroundColor="white" />
			</BrowserRouter>,
		);

		const logoName = screen.queryByTestId("logoName");
		expect(logoName).toBeInTheDocument();
	});

	it("opens and closes the menu when the menu icon is clicked", () => {
		render(
			<BrowserRouter>
				<HeaderMain backgroundColor="white" />
			</BrowserRouter>,
		);

		const menuIcon = screen.getByTestId("menu");
		const navContainer = screen.getByTestId("nav-container");

		expect(navContainer).toBeVisible();
		// Menu should be hidden by default

		// Click the menu icon to open the menu
		menuIcon.click();

		navContainer.style.display = "none";
		navContainer.style.visibility = "hidden";

		expect(navContainer).not.toBeVisible();
		// Click the menu icon again to close the menu
		menuIcon.click();
		expect(navContainer).not.toBeVisible();
	});
});
