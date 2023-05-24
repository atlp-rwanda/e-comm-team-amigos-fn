import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate, capitalizeString } from "../../utils/utils";

import "./order.styles.scss";
import "../../App.css";

export default function Order() {
  const navigate = useNavigate()
	const { orderId } = useParams();
	const { orders } = useSelector((state) => state.orders);
	const order = orders.find((order) => order.id === orderId);

	return (
		<div className="order-detail-page">
			<div className="order-detail-page-container">
				<div className="order-detail">
					<div className="order-detail__header">
						<div className="order-detail__status">Status</div>
						<div className="order-detail__status-value">
							{capitalizeString(order.status)}
						</div>
					</div>
					<div className="order-detail__body">
						<h3 className="order-detail__body-header">Products</h3>

						<div className="order-detail__products">
							{order.OrderProducts.map((orderProd) => {
								return (
									<div className="order-detail__product">
										<div className="order-detail__product-name">
											{orderProd.Product.name}
										</div>
										<div className="order-detail__product-quantity">
											{orderProd.quantity}
										</div>
										<div className="order-detail__product-price">
											${orderProd.unitPrice}
										</div>
									</div>
								);
							})}
						</div>

						<div className="order-detail__total-cost">
							<span>Total Cost</span>$
							{order.OrderProducts.reduce((acc, orderProd) => {
								return (
									acc +
									orderProd.quantity * orderProd.unitPrice
								);
							}, 0)}
						</div>
					</div>
					<div className="order-detail__footer">
						<span className="delivery-date">Delivery Date</span>
						<span className="delivery-date-value">
							{formatDate(order.expected_delivery_date)}
						</span>
					</div>
				</div>
				<button className="btn" onClick={() => navigate(-1)}>
					Go back
				</button>
			</div>
		</div>
	);
}
