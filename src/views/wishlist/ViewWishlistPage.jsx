import "../../views/wishlist/wishlist.style.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { viewWishlist, removeFromWishlist } from "../../redux/actions/Wishlist";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const ViewWishlistPage = () => {
	const navigate = useNavigate();
	const { viewSuccess, viewStart } = useSelector((state) => state.wishlist);
	const { removeFromWishlistStart } = useSelector(
		(state) => state.removeWishlist,
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(viewWishlist());
	}, [dispatch]);

	const handleRemoveFromWishlist = (id) => {
		dispatch(removeFromWishlist(id));
	};

	return (
		<>
			<div className="wishlistcontainer">
				<div className="productlist">
					<h3>Wish list</h3>
					{viewStart ? (
						removeFromWishlistStart ? (
							<Loader />
						) : (
							<div className="subproductlist">
								{!viewSuccess ? (
									<div className="emptyWishlist">
										Your wishlist is empty
									</div>
								) : (
									viewSuccess.map((product) => (
										<div
											className="product"
											key={product.id}
										>
											<img
												src={product.product.images[0]}
												alt=""
											/>
											<div className="productDes">
												<h2>
													<span>Product name:</span>
													{product.product.name}
												</h2>
												<h2>
													<span>Price: </span>
													{product.product.price}
												</h2>
												<h2>
													<span>Category: </span>
													{product.product.category}
												</h2>
												<h2>
													<span>Quantity: </span>
													{product.product.quantity}
												</h2>
												<h2>
													<span>
														product availability:
													</span>
													{product.product.available
														? "available"
														: "out of stock"}
												</h2>
											</div>
											<div className="productBtn">
												<button
													onClick={() =>
														navigate(
															`/product/${product.product.id}`,
														)
													}
												>
													Add to cart
												</button>
												<button
													onClick={() =>
														handleRemoveFromWishlist(
															product.product.id,
														)
													}
												>
													Remove
												</button>
											</div>
										</div>
									))
								)}
							</div>
						)
					) : (
						<Loader />
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ViewWishlistPage;
