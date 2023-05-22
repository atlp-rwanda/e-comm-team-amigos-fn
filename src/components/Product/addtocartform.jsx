/* eslint-disable react/prop-types */
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { useEffect } from "react";
import { Star, StarDisabled } from "./rating.jsx";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { handleCartResponse } from "../../utils/product/handleAddToCartSucess.js";
import {
	increment,
	decrement,
	defaultValue,
	addToCart,
} from "../../redux/actions/cartAction.js";
import { addToWishlist } from "../../redux/actions/Wishlist";
import { handleWishlistResponse } from "../../utils/product/handleWishlistSucess";
import { cartBadge } from "../../redux/actions/cartAction.js";
export default function AddtoCart({ product }) {
	const { wishlistStart, wishlistSuccess } = useSelector(
		(state) => state.addToWishlist,
	);
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("user"));
	const counter = useSelector((state) => state.counter);
	const { cartsuccess, cartstart } = useSelector((state) => state.cart);
	const [isDisable, setisDisable] = useState(false);
	const { viewsuccess } = useSelector((state) => state.viewCart);
	const handleDisable = () => {
		if (product?.quantity <= counter + 1) {
			setisDisable(true);
		}
	};
	const handleEnable = () => {
		if (product?.quantity === counter) {
			setisDisable(false);
		}
	};

	const handleAddToWishlist = (id) => {
		dispatch(addToWishlist(id));
	};
	useEffect(() => {
		handleCartResponse(cartsuccess, toast);
		handleWishlistResponse(wishlistSuccess, toast);
	}, [cartsuccess, wishlistSuccess]);
	return (
		<>
			<div className="col-2">
				<div className="row-1">
					<div className="title">
						<h3>
							{product?.name} /
							<span className="price">${product?.price}</span>
						</h3>
					</div>
					<div className="description">
						<p>
							Revolutionize your life with this incredible
							product. Combining sleek design, advanced
							technology, and limitless possibilities, it enhances
							your daily routine to new heights.
						</p>
					</div>
					<div className="rate">
						<Rating
							name="item-card-rating"
							value={4}
							max={5}
							icon={<Star />}
							emptyIcon={<StarDisabled />}
							readOnly
						/>
						<span className="item-card-star-text">(121)</span>
					</div>
				</div>
				<div className="row-2">
					<h3 className="">Choose color</h3>
					<div className="allcolor">
						<div className="color color-1"></div>
						<div className="color color-2"></div>
						<div className="color color-3"></div>
						<div className="color color-4"></div>
						<div className="color color-5"></div>
					</div>
				</div>
				<div className={user ? "row-3" : "hidden"}>
					<div className="count">
						<div className="AddMinusButton">
							<div>
								<button
									onClick={() => {
										dispatch(decrement());
										handleEnable();
									}}
									className="countButton "
								>
									-
								</button>
							</div>
							<div className="countInput ">
								<input
									type="number"
									value={counter}
									onChange={() => dispatch(decrement())}
								/>
							</div>
							<div>
								<button
									disabled={isDisable}
									onClick={() => {
										dispatch(increment());
										handleDisable();
									}}
									className="countButton"
								>
									+
								</button>
							</div>
						</div>
						<div className="items-in-stock">
							Only
							<span>{product?.quantity - counter} items</span>
							Left Don&apos;t Miss it
						</div>
					</div>
					<div className="button">
						<button
							data-testid="buy"
							disabled={user ? false : true}
							className="buynow"
						>
							Buy Now
						</button>
						<button
							data-testid="add"
							disabled={user ? false : true}
							onClick={() => {
								dispatch(addToCart(counter, product.id));
								dispatch(
									cartBadge(viewsuccess?.cartItems?.length),
								);
								dispatch(defaultValue());
							}}
							className="addtocart"
						>
							{cartstart ? "Adding..." : "add to cart"}
						</button>
						<button
							className="btn-add-to-wishlist"
							onClick={() => handleAddToWishlist(product.id)}
						>
							{wishlistStart ? "Adding..." : "Add to Wishlist"}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
