import Rating from "@mui/material/Rating";
import { Star, StarDisabled } from "./rating.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
	increment,
	decrement,
	addToCart,
} from "../../redux/actions/cartAction.js";
export default function AddtoCart() {
	const counter = useSelector((state) => state.counter);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const product = {
		productId: "3b666216-2666-457e-928c-f0fd97bb49ac",
		items: 100,
	};
	console.log("ADDED TO CART", cart);
	return (
		<div className="col-2">
			<div className="row-1">
				<div className="title">
					<h3>
						Laptop Sleeve MacBook /
						<span className="price"> $238</span>
					</h3>
				</div>
				<div className="description">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Libero sint vel natus voluptatem. Minus esse
						consequuntur consecteturaut impedit natus!
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
								onClick={() => dispatch(decrement())}
								className="countButton "
							>-
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
								onClick={() => dispatch(increment())}
								className="countButton "
							>+
							</button>
						</div>
					</div>
					<div className="items-in-stock">
						Only <span>{product.items - counter} items</span> Left
						Don&apos;t Miss it
					</div>
				</div>
				<div className="button">
					<button className="buynow"> Buy Now</button>
					<button
						onClick={(product) =>
							dispatch(addToCart(counter, product.productId))
						}
						className="addtocart"
					>
						{cart.cartsuccess? "Adding..." : "Add to cart"}
					</button>
				</div>
			</div>
		</div>
	);
}
