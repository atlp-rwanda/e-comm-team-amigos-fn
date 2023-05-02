import { render, screen } from "@testing-library/react";
import"@testing-library/jest-dom";
import { Provider } from "react-redux";
import  store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "../views/login/LoginPage";


describe("Login page Page", () => {
	test("renders the login form", () => {
		render(
			<Provider store={store}>
			<Router><LoginPage/></Router>
		</Provider>
		);
		const emailInput = screen.getByPlaceholderText("Your Email Address...");
        const submitBtn = screen.getByRole("button", {name: "Login"});
        expect(emailInput).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
        expect(screen.getByRole("heading")).toHaveTextContent("Login");
	});
});