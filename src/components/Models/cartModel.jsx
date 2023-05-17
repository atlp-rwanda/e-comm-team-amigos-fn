import "../../assets/css/cartModel.scss";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../../redux/actions/cartOpenModel";
import viewCart from "../../redux/actions/viewCart";
const Model = () => {
	const Open = useSelector((state) => state.openModel);
	const viewcart = useSelector((state) => state.viewCart);
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(viewCart());
	// },[] );
	console.log("VIEW CART STATE", viewcart);
	


	return (
		<div className={Open ? "overlay" : "hidden"}>
			<div className="model-container ">
				<div className="navBar">
					<h2 className="model-title">My Cart</h2>
					<button
						className="btn-close"
						onClick={() => dispatch(closeModel())}
					>
						x
					</button>
				</div>
				<div className="model-body">
					<div className="colo-1">
						<div className="order-title">
							<h4>Shopping Cart</h4>
							<h4>Price</h4>
						</div>
						<div className="order-body">
							<ul>
								<li>Shoes</li>
								<li>TV Screen</li>
								<li>Radion JIEPAK</li>
								<li>Iphone</li>
								<li>Shoes</li>
								<li>TV Screen</li>
								<li>Radion JIEPAK</li>
								<li>Iphone</li>
							</ul>
						</div>
						<div className="order-footer"></div>
					</div>
					<div className="colo-2">
						<div className="btn-checkout button">
							<button onClick={()=> dispatch(viewCart())}>Proceed to Checkout</button>
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
	);
};
export default Model;
