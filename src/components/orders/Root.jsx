import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from '../Header';
import '../../App.css'

import { getOrders } from "../../redux/orders/actions";


export default function Root() {
	const dispatch = useDispatch();
	const { orders } = useSelector((state) => state.orders);
	const { fetchingOrders } = useSelector((state) => state.orders);

	useEffect(() => {
		dispatch(getOrders(window.localStorage.getItem("token")));
	}, [dispatch]);
  return (
		<>
			<Header />
			{(!orders && !fetchingOrders && null) ||
				(!orders && fetchingOrders && (
					<div className="orders-loadining-spinner loading-spinner loading-spinner--medium"/>
				)) ||
				(orders && <Outlet context={[orders]} />)}
		</>
  );
}
