import Rating from "@mui/material/Rating";
import { useState } from "react";
import { useEffect } from "react";
import { Star, StarDisabled } from "./rating.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { handleCartResponse } from "../../utils/product/handleAddToCartSucess.js";
import {
	increment,
	decrement,
	addToCart,
} from "../../redux/actions/cartAction.js";

export default function AddtoCart({product}) {
	const location = useLocation();
	const id = location.state?.id;
	const counter = useSelector((state) => state.counter);
	const { cartsuccess, cartstart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const { name, price, quantity } = product;
	const items = quantity;
	const [isDisable, setisDisable] = useState(false);
	console.log(product);
	const handleDisable = () => {
		if (items <= counter+1) {
			setisDisable(true);
		}
	};
	const handleEnable = () => {
		if (items === counter) {
			setisDisable(false);
		}
	};
	useEffect(() => {
		handleCartResponse(cartsuccess, toast);
	}, [cartsuccess]);

	return (
		<>
			<div className="col-2">
				<div className="row-1">
					<div className="title">
						<h3>
							{name}/<span className="price">${price}</span>
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
				<div className="row-3">
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
							Only <span>{items - counter} items</span> Left
							Don&apos;t Miss it
						</div>
					</div>
					<div className="button">
						<button className="buynow"> Buy Now</button>
						<button
							onClick={() => dispatch(addToCart(counter, id))}
							className="addtocart"
						>
							{cartstart ? "Adding..." : "add to cart"}
						</button>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
}