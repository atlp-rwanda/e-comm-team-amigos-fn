import React from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import "./orders.styles.scss";
import { formatDate } from "../../utils/utils";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { capitalizeString } from "../../utils/utils";

const TableHeader = ({ headers }) => {
	const ths = headers.map((header, i) => <th key={i}>{header}</th>);
	return (
		<thead>
			<tr>{ths}</tr>
		</thead>
	);
};

function generateRows(orders, navigate) {
	return orders.map((order, i) => {
		return (
			<tr key={order.id}>
				<td>{i + 1}</td>
				<td>{capitalizeString(order.status)}</td>
				<td>{formatDate(order.expected_delivery_date)}</td>
				<td>
					<button
						className="text-btn"
						onClick={() => navigate(`/customer/orders/${order.id}`)}
					>
						Details
					</button>
				</td>
			</tr>
		);
	});
}

const Table = ({ orders, navigate }) => {
	return (
		<table className="orders__table">
			<TableHeader headers={["#", "Status", "Delivery Date", "Action"]} />
			<tbody>{orders && generateRows(orders, navigate)}</tbody>
		</table>
	);
};

export default function Orders() {
	const navigate = useNavigate();
	const { orders } = useSelector((state) => state.orders);
	return (
		<div className="orders">
			{(orders.length === 0 && (
				<p className="no-order">No order(s) found!</p>
			)) || <Table orders={orders} navigate={navigate} />}
		</div>
	);
}
