import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import AuthForm from "../components/form/AuthForm.jsx";

describe("AuthForm", () => {
	test("renders form with OTP inputs", () => {
		render(
			<MemoryRouter>
				<AuthForm />
			</MemoryRouter>,
		);
		const otpInputs = screen.getAllByTestId(/otp/i);
		expect(otpInputs.length).toBe(4);
	});
});
