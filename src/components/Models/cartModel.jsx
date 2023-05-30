import "../../assets/css/cartModel.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModel } from "../../redux/actions/cartOpenModel";
import viewCart from "../../redux/actions/viewCart";
import { clearCart, removeItemCart } from "../../redux/actions/cartAction";
import { toast } from "react-toastify";
import {
	handleClearCartResponse,
	handleRemoveItemCartResponse,
} from "../../utils/product/handleAddToCartSucess";

import UpdateCartModal from "./updateCartModal";
import Loader from "../Loader";

const Model = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const Open = useSelector((state) => state.openModel);
	const { viewsuccess, viewstart } = useSelector((state) => state.viewCart);
	const { clearcartsuccess } = useSelector((state) => state.clearCart) || {};
	const { removeitemcartsuccess, removeitemcartstart } = useSelector(
		(state) => state.viewCart,
	);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isUpdateCartModal, setIsUpdateCartModal] = useState(false);
	const cartItems = viewsuccess ? viewsuccess?.cartItems : [];

	useEffect(() => {
		dispatch(viewCart());
		handleClearCartResponse(clearcartsuccess, toast);
		handleRemoveItemCartResponse(removeitemcartsuccess, toast);
	}, [clearcartsuccess, dispatch, removeitemcartsuccess]);

	const handleUpdateCartModal = () => {
		setIsUpdateCartModal(!isUpdateCartModal);
	};
	const handleSelectProduct = (product) => {
		setSelectedProduct(product);
	};
	const handleOverlayClick = () => {
		// dispatch(closeModel());
	};
	const handleCloseButtonClick = () => {
		dispatch(closeModel());
	};

	const handleUpdateCart = () => {
		dispatch(viewCart());
	};
	return (
		<>
			<div
				onClick={handleOverlayClick}
				className={Open.isOpen ? "Overlay" : "hidden"}
			>
				<div className="model-container ">
					<div className="navBar">
						<h2 className="model-title">My Cart</h2>
						<button
							className="btn-close"
							onClick={handleCloseButtonClick}
						>
							x
						</button>
					</div>

					<div className="model-body">
						{clearcartsuccess ? (
							<Loader />
						) : removeitemcartstart ? (
							<Loader />
						) : viewstart ? (
							<Loader />
						) : (
							<div className="colo-1">
								<div className="order-title">
									<h4>Shopping Cart</h4>
									<h4>Price</h4>
								</div>
								<div className="order-body">
									{cartItems.length === 0 ? (
										<ul>
											<li
												style={{
													textAlign: "center",
												}}
											>
												<h1>
													Your Cart Is Currently
													Empty.
												</h1>
											</li>
										</ul>
									) : (
										cartItems.map((item) => {
											return (
												<div
													className="item-cart"
													key={item.id}
												>
													<div className="item-Image">
														<img
															src={item.images[0]}
															alt="product image"
														/>
													</div>
													<div>
														<div className="item-name">
															<span>
																{item.name}
															</span>
															<span className=" item-price-small hidden">
																US$
																{item.total}
																.00
															</span>
														</div>
														<div className="item-body">
															Revolutionize your
															life with this
															incredible product.
															Combining sleek
															design, advanced
															technology, and
															limitless
															possibilities, it
															enhances your daily
															routine to new
															heights.
														</div>
														<div
															className={
																item.available
																	? "InStock"
																	: "OutStock"
															}
														>
															{item.available
																? "in Stock"
																: "out of stock"}
														</div>
														<div className="item-button">
															<div className="item-quantity">
																Qty:{" "}
																{item.quantity}
															</div>
															<div className="updateRemoveBtn">
																<button
																	data-testid="update"
																	onClick={() => {
																		handleSelectProduct(
																			item,
																		);
																		handleUpdateCartModal();
																	}}
																	className="item-button-update"
																>
																	UPDATE
																</button>
																{isUpdateCartModal && (
																	<UpdateCartModal
																		handleUpdateCartModal={
																			handleUpdateCartModal
																		}
																		handleUpdateCart={
																			handleUpdateCart
																		}
																		product={
																			selectedProduct
																		}
																	/>
																)}
																<button
																	data-testid="delete"
																	className="item-button-delete"
																	onClick={() => {
																		dispatch(
																			removeItemCart(
																				item.id,
																			),
																		);
																	}}
																>
																	REMOVE
																</button>
															</div>
														</div>
													</div>
													<div className="item-price">
														US${item.total}.00
													</div>
												</div>
											);
										})
									)}
								</div>
								<div className="order-footer"></div>
							</div>
						)}
						<div className="colo-2">
							{cartItems.length !== 0 && (
								<div
									className="cleanupcart"
									onClick={() => {
										dispatch(clearCart());
									}}
								>
									<button data-testid="clear">
										CLean Up Cart
									</button>
								</div>
							)}
							<div className="btn-checkout button">
								{cartItems.length !== 0 && (
									<button
										onClick={() => {
											handleCloseButtonClick();
											navigate("/checkout");
										}}
									>
										Proceed to Checkout
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Model;
