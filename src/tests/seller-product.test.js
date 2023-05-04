import React from 'react';
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import  store from '../redux/store';
import Product from "../views/dashboard/product/index.jsx";

describe('Product section', ()=>{
    it("should display sellers items in the collection", ()=>{
        render(
            <Provider store={store}>
                <Router><Product/></Router>
            </Provider>
        );
        
        const sellerCollectionTitle = screen.getByTestId('seller-collection-title');
        const sellerCollectionSubTitle = screen.getByTestId('seller-collection-sub-title');
        const listingProductCard = screen.getByTestId('products-card');
        const loadingIndicator = screen.getByTestId('loading-indicator');

	    expect(sellerCollectionTitle).toBeInTheDocument();
        expect(sellerCollectionSubTitle).toBeInTheDocument();
        expect(listingProductCard).toBeInTheDocument();
        expect(loadingIndicator).toBeInTheDocument();
    })
})