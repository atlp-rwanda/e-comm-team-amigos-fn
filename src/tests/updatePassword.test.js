import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import UpdatePasswordPage from "../views/updatePassword/UpdatePasswordPage";

describe("updatePassword", () => {
	beforeAll(() => {
		localStorage.setItem(
			"token",
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkMDAzOTc0Mi04YWMzLTRmMWQtYWRkYy03M2I0ODZhOWFkZGMiLCJ1c2VyRW1haWwiOiJyd2lidXNlcmdlQGdtYWlsLmNvbSIsImlhdCI6MTY4NTY5NDY4MiwiZXhwIjoxNjg2Mjk5NDgyfQ.OmJt1ax4SyXm051OgqaFZ1D_rSZwA__nX4yZiaDpINI",
		);
	});
	it("should update password", () => {
		render(
			<Provider store={store}>
				<Router>
					<UpdatePasswordPage />
				</Router>
			</Provider>,
		);
		const password1Input =
			screen.getByPlaceholderText("Enter old password");
		const password2Input =
			screen.getByPlaceholderText("Enter new password");
		const submitBtn = screen.getByRole("button", {
			name: "Update Password",
		});
		expect(password1Input).toBeInTheDocument();
		expect(password2Input).toBeInTheDocument();
		expect(submitBtn).toBeInTheDocument();
		expect(screen.getByRole("heading")).toHaveTextContent(
			"Update password",
		);
	});
});