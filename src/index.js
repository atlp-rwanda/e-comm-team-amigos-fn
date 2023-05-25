// eslint-disable-next-line no-unused-vars
import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<App />
		<ToastContainer position="top-right" autoClose={2000} />
	</Provider>,
);
