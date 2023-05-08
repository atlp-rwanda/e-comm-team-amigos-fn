/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeaderMain from "../components/Header/HeaderMain";

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <HeaderMain />
      </BrowserRouter>
    </Provider>
  );
});

test("Renders the Header of App", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      ,
    </Provider>
  );

  const headerElements = screen.getAllByText(/Amigos/i);
  expect(headerElements.length).toBeGreaterThan(0);
  const headerElement = headerElements[0];
  expect(headerElement).toBeInTheDocument();
});

test("Renders the Hero of App", () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );

  const textElement = screen.queryByTestId("heroText");
  expect(textElement).toBeInTheDocument();
});

describe(HeaderMain, () => {
  it("renders the logo name correctly", () => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HeaderMain backgroundColor="white" />
          </BrowserRouter>
        </Provider>
      );
    });

    const logoNames = screen.queryAllByTestId("logoName");
    const logoName = logoNames[0];
    expect(logoName).toBeInTheDocument();
  });

  it("opens and closes the menu when the menu icon is clicked", () => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HeaderMain backgroundColor="white" />
          </BrowserRouter>
        </Provider>
      );
    });

    const menuIcons = screen.queryAllByTestId("menu");
    const navContainers = screen.queryAllByTestId("nav-container");
    const menuIcon = menuIcons[0];
    const navContainer = navContainers[0];
    expect(navContainer).toBeVisible();
    expect(menuIcons).toHaveLength(2);
    expect(navContainer).toBeVisible();

    act(() => {
      menuIcon.click();
    });

    expect(navContainer).not.toBeVisible();

    act(() => {
      menuIcon.click();
    });

    expect(navContainer).not.toBeVisible();
  });
});
