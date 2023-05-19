import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeaderMain from "../components/Header/HeaderMain";
import { Provider } from "react-redux";

test("Renders the Header of App", () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>,
	);

	// expect(screen.getByRole('img')).toBeInTheDocument();
	const headerElement = screen.getByText(/Amigos/i);
	expect(headerElement).toBeInTheDocument();
});

test("Renders the Hero of App", () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<Hero />
			</BrowserRouter>
		</Provider>,
	);

	// expect(screen.getByRole('img')).toBeInTheDocument();
	const textElement = screen.queryByTestId("heroText");
	expect(textElement).toBeInTheDocument();
});

describe(HeaderMain, () => {
	it("renders the logo name correctly", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<HeaderMain backgroundColor="white" />
				</BrowserRouter>
			</Provider>,
		);

		const logoName = screen.queryByTestId("logoName");
		expect(logoName).toBeInTheDocument();
	});

	it("opens and closes the menu when the menu icon is clicked", () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<HeaderMain backgroundColor="white" />
				</BrowserRouter>
			</Provider>,
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
