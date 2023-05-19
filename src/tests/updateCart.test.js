import React from "react";
import UpdateCartModal from "../components/Models/updateCartModal";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Update Cart component rendering", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <UpdateCartModal
            handleUpdateCartModal={() => {}}
            handleUpdateCart={() => {}}
            product={{ quantity: 10 }} // Mock product with a quantity property
          />
        </Router>
      </Provider>
    );
  });

  test("renders the component", () => {
    const updateCartModal = screen.getByTestId("update-cart-modal");
    expect(updateCartModal).toBeInTheDocument();
  });

  it("renders the + button", () => {
    const increaseBtn = screen.getByTestId("increaseBtn");
    expect(increaseBtn).toBeInTheDocument();
  });

  it("renders the - button", () => {
    const decreaseBtn = screen.getByTestId("decreaseBtn");
    expect(decreaseBtn).toBeInTheDocument();
  });

  it("renders the Update button", () => {
    const updateBtn = screen.getByTestId("update");
    expect(updateBtn).toBeInTheDocument();
  });
});
