import '../../assets/css/cartModel.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeModel } from '../../redux/actions/cartOpenModel';
import viewCart from '../../redux/actions/viewCart';
import { clearCart, removeItemCart } from '../../redux/actions/cartAction';
import { toast, ToastContainer } from 'react-toastify';
import {
	handleClearCartResponse,
	handleRemoveItemCartResponse,
} from '../../utils/product/handleAddToCartSucess';

import UpdateCartModal from './updateCartModal';
import Loader from '../Loader';

const Model = () => {
	const navigate = useNavigate();
	const [isUpdateCartModal, setIsUpdateCartModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const handleUpdateCartModal = () => {
		setIsUpdateCartModal(!isUpdateCartModal);
	};
	const handleSelectProduct = (product) => {
		setSelectedProduct(product);
	};
	const Open = useSelector((state) => state.openModel);
	const { clearcartsuccess } = useSelector((state) => state.clearCart) || {};
	const { removeitemcartsuccess } = useSelector((state) => state.viewCart);

	useEffect(() => {
		dispatch(viewCart());
		handleClearCartResponse(clearcartsuccess, toast);
		handleRemoveItemCartResponse(removeitemcartsuccess, toast);
	}, [clearcartsuccess, removeitemcartsuccess]);

	const dispatch = useDispatch();
	const { viewsuccess, loading } = useSelector((state) => state.viewCart);
	const cartItems = viewsuccess ? viewsuccess.cartItems : [];
	const goBack = () => navigate(-1);
	const handleUpdateCart = () => {
		dispatch(viewCart());
	};

	useEffect(() => {
		dispatch(viewCart());
	}, []);

	return (
		<>
			<div className={Open ? 'overlay' : 'hidden'}>
				<div className="model-container ">
					<div className="navBar">
						<h2 className="model-title">My Cart</h2>
						<button
							className="btn-close"
							onClick={() => {
								dispatch(closeModel());
								goBack();
							}}
						>
							x
						</button>
					</div>
					{cartItems.length !== 0 && (
						<div
							className="cleanupcart"
							onClick={() => {
								dispatch(clearCart());
							}}
						>
							<button data-testid="clear">CLean Up Cart</button>
						</div>
					)}

					<div className="model-body">
						{loading ? (
							<Loader /> // Render the loader component while loading the cart items
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
													textAlign: 'center',
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
														<div className="item-price">
															{item.name}
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
																	? 'InStock'
																	: 'OutStock'
															}
														>
															{item.available
																? 'in Stock'
																: 'out of stock'}
														</div>
														<div className="item-button">
															<div className="item-quantity">
																Qty:{' '}
																{item.quantity}
															</div>
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
																onClick={() =>
																	dispatch(
																		removeItemCart(
																			item.id,
																		),
																	)
																}
															>
																REMOVE
															</button>
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
							<div className="btn-checkout button">
								<button
									onClick={() => {
										dispatch(closeModel());
										navigate('/checkout');
									}}
								>
									Proceed to Checkout
								</button>
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
			<ToastContainer />
		</>
	);
};
export default Model;
