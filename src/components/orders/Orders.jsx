import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./orders.styles.scss";
import { getOrders } from "../../redux/orders/actions";
import { formatDate } from "../../utils/utils";
import "../../App.css";
import Header from "../Header";


const TableHeader = ({ headers }) => {
	const ths = headers.map((header, i) => <th key={i}>{header}</th>);
	return (
		<thead>
			<tr>{ths}</tr>
		</thead>
	);
};

function generateRows(orders) {
	return orders.map((order, i) => {
		return (
			<tr key={order.id}>
				<td>{i + 1}</td>
				<td>{order.status}</td>
				<td>{formatDate(order.expected_delivery_date)}</td>
				<td><button className="text-btn">Details</button></td>
			</tr>
		);

	});
}


const Table = ({ orders }) => {
	return (
		<table className="orders__table">
			<TableHeader headers={["#", "Status", "Delivery Date", "Action"]} />
			<tbody>{orders && generateRows(orders)}</tbody>
		</table>
	);
};

export default function Orders() {
	const dispatch = useDispatch();
	const { orders } = useSelector((state) => state.orders);
	const { fetchingOrders } = useSelector((state) => state.orders);

	useEffect(() => {
		dispatch(getOrders(window.localStorage.getItem("token")));
	}, [dispatch]);

	return (
		<>
			<Header />
			<div className="orders">
				{(!orders && !fetchingOrders && null) ||
					(!orders && fetchingOrders && <>Wait</>) ||
					(orders && <Table orders={orders} />)}
			</div>
		</>
	);
}
