import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import  store from '../redux/store';
import ResetPassword from "../views/resetPassword/resetPassword";
import ConfirmNewPassword from "../views/resetPassword/confirmNewPassword";

describe(ResetPassword, ()=>{
    it("should reset password", ()=>{
        render(
            <Provider store={store}>
                <Router><ResetPassword/></Router>
            </Provider>
        );
        const emailInput = screen.getByPlaceholderText('Enter your email')
        const submitBtn = screen.getByRole("button", {name: 'Submit'});
        expect(emailInput).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
    })
})

describe(ConfirmNewPassword, ()=> {
    it("should confirm new password", ()=>{
        render(
            <Provider store={store}>
                <Router><ConfirmNewPassword/></Router>
            </Provider>
        );
        const password1Input = screen.getByPlaceholderText('New password');
        const password2Input = screen.getByPlaceholderText('Confirm password');
        const submitBtn = screen.getByRole('button', { name: 'Confirm reset password' });
        expect(password1Input).toBeInTheDocument();
        expect(password2Input).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
    })
})