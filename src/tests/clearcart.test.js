

/* eslint-disable no-undef */

import ViewCart from "../views/addToCart/viewCart.jsx";

import '@testing-library/jest-dom';

import { createStore } from 'redux';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "../redux/rootReducer.js";
import {VIEW_CART_SUCCESS,VIEW_CART_START} from "../redux/types.js";
import { useDispatch } from "react-redux";


test("rendering the Clean Up button ", () =>{
    const cart={
        "message": "Cart Items",
        "cartItems": [
          {
            "id": "403767a0-d7b2-4945-ac2d-353f79d987b4",
            "name": "shoes",
            "price": 35000,
            "quantity": 6,
            "available": true,
            "category": "fashion",
            "bonus": 0,
            "images": [
              "https://picsum.photos/265/190?id=6560",
              "https://picsum.photos/265/190?id=2",
              "https://picsum.photos/265/190?id=445",
              "https://picsum.photos/265/190?id=999990"
            ],
            "expiryDate": "2023-05-15T00:00:00.000Z",
            "ec": 0,
            "createdAt": "2023-05-15T13:54:51.161Z",
            "updatedAt": "2023-05-15T13:54:51.161Z",
            "userId": "e70870e3-9aaa-43d9-9304-651ccfb18c3d",
            "total": 210000
          }
        ],
        "cartSummary": {
          "total": 210000,
          "items": 6
        }
      };
    store.dispatch({
        type: VIEW_CART_SUCCESS,
        payload: cart,
    });
    store.dispatch({
        type: VIEW_CART_START,
        payload: false,
    });
    
      render(
    <Provider store={store}>
        <Router>
            <ViewCart />
        </Router>
    </Provider>
  );

    

  const cleanUpButton = screen.queryByTestId('clear');
  expect(cleanUpButton).toBeInTheDocument();

});

test("rendering the remove button", () => {

    const cart={
        "message": "Cart Items",
        "cartItems": [
          {
            "id": "403767a0-d7b2-4945-ac2d-353f79d987b4",
            "name": "shoes",
            "price": 35000,
            "quantity": 6,
            "available": true,
            "category": "fashion",
            "bonus": 0,
            "images": [
              "https://picsum.photos/265/190?id=6560",
              "https://picsum.photos/265/190?id=2",
              "https://picsum.photos/265/190?id=445",
              "https://picsum.photos/265/190?id=999990"
            ],
            "expiryDate": "2023-05-15T00:00:00.000Z",
            "ec": 0,
            "createdAt": "2023-05-15T13:54:51.161Z",
            "updatedAt": "2023-05-15T13:54:51.161Z",
            "userId": "e70870e3-9aaa-43d9-9304-651ccfb18c3d",
            "total": 210000
          }
        ],
        "cartSummary": {
          "total": 210000,
          "items": 6
        }
      };
    store.dispatch({
        type: VIEW_CART_SUCCESS,
        payload: cart,
    });
    store.dispatch({
        type: VIEW_CART_START,
        payload: false,
    });
    

  render(
    <Provider store={store}>
        <Router>
            <ViewCart />
        </Router>
    </Provider>
  );
  const removeButton = screen.queryByTestId("delete");
  expect(removeButton).toBeInTheDocument();


});
