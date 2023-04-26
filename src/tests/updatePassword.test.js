import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import  store from '../redux/store';
import UpdatePasswordPage from "../views/updatePassword/UpdatePasswordPage";

describe("updatePassword", ()=>{
    it("should update password", ()=>{
        render(
            <Provider store={store}>
                <Router><UpdatePasswordPage/></Router>
            </Provider>
        );
        const password1Input = screen.getByPlaceholderText('Enter old password');
        const password2Input = screen.getByPlaceholderText('Enter new password');
        const submitBtn = screen.getByRole('button', { name: 'Update Password' });
        expect(password1Input).toBeInTheDocument();
        expect(password2Input).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
        expect(screen.getByRole("heading")).toHaveTextContent("Update password");
    })
})




