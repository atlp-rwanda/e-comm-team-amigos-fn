import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

import HomePage from "../views/HomePage";

test("renders the homepage", () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		</Provider>,
	);
	expect(screen.queryAllByText("Amigos")[0]).toBeInTheDocument();
});
