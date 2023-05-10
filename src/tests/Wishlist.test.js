import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../redux/store';
import ViewWishlistPage from "../views/wishlist/ViewWishlistPage";

describe("ViewWishlistPage", () => {
  it("renders submit buttons and expected text content", () => {
    render(
      <Provider store={store}>
        <Router>
          <ViewWishlistPage />
        </Router>
      </Provider>
    );
    expect(screen.getByRole("heading")).toHaveTextContent("Wish list");
  });
});
