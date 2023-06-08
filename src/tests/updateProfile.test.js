import React from "react";
import UpdateProfilePage from "../views/update-profile/updateProfile";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen  } from "@testing-library/react";
import "@testing-library/jest-dom";

beforeEach(() => {
	render(
		<Provider store={store}>
			<Router>
				<UpdateProfilePage />
			</Router>
		</Provider>, 
	);
});

describe("Create Update Component Rendering", () => {
	test("renders the component", () => {
		render(
			<Provider store={store}>
				<Router>
					<UpdateProfilePage />
				</Router>
			</Provider>,
		);
	});

	it("renders Profile Page", () => {
        expect(screen.getByRole("heading")).toHaveTextContent(
			"My Profile",
		);

	});
    

    
});
