import "../../assets/css/cartModel.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModel } from "../../redux/actions/cartOpenModel";
import viewCart from "../../redux/actions/viewCart";
const Model = () => {
	const navigate = useNavigate();
	const Open = useSelector((state) => state.openModel);
	useEffect(() => {
		dispatch(viewCart());
	}, []);
	const { viewsuccess } = useSelector((state) => state.viewCart);
	const dispatch = useDispatch();
	const cartItems = viewsuccess ? viewsuccess?.cartItems : [];
	return (
		<>
			<div className={Open ? "overlay" : "hidden"}>
				<div className="model-container ">
					<div className="navBar">
						<h2 className="model-title">My Cart</h2>
						<button
							className="btn-close"
							onClick={() => {
								dispatch(closeModel());
								navigate("/");
							}}
						>
							x
						</button>
					</div>
					<div className="cleanupcart">
						<button data-testid="clear">CLean Up Cart</button>
					</div>
					<div className="model-body">
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
												Your Cart Is Currently Empty.
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
													<div className="item-price">
														{item.name}
													</div>
													<div className="item-body">
														Revolutionize your life
														with this incredible
														product. Combining sleek
														design, advanced
														technology, and
														limitless possibilities,
														it enhances your daily
														routine to new heights.
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
															Qty: {item.quantity}
														</div>
														<button data-testid="update" className="item-button-update">UPDATE</button>
														<button data-testid="delete" className="item-button-delete">REMOVE</button>
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
						<div className="colo-2">
							<div className="btn-checkout button">
								<button>Proceed to Checkout </button>
							</div>
							<div className="order-body">
								<h4> Your Recently Viewed Items</h4>
								<ul>
									<li>Shoes</li>
									<li>TV Screen</li>
									<li>Radion JIEPAK</li>
									<li>Iphone</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Model;
