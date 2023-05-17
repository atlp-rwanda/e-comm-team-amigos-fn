import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { updateCart } from "../../redux/actions/cartAction";
import "./style.scss";
import watch from "../../assets/img/watch.png";

const Cart = () => {
	const [isUpdateCart, setIsUpdateCart] = useState(false); // Renamed from updateCart
	const [counterValue, setCounterValue] = useState(0);
	const [dataValue, setDataValues] = useState("");
	const dispatch = useDispatch();

	const toggleUpdateCart = () => {
		setIsUpdateCart(!isUpdateCart); // Renamed from updateCart
	};

	const decreaseCounter = () => {
		setCounterValue(counterValue - 1);
	};

	const increaseCounter = () => {
		setCounterValue(counterValue + 1);
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		fetch(
			`https://e-comm-team-amigos-bn-project.onrender.com/cart/view-cart`,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			},
		)
			.then((res) => res.json())
			.then((data) => {
				setDataValues(data.cartItems);
			});
	}, [dataValue]);

	const handleInputChange = (e) => {
		const value = parseInt(e.target.value);
		setCounterValue(value || 0);
	};

	const handleUpdateCart = () => {
		dispatch(updateCart(counterValue, dataValue[0].id));
		toggleUpdateCart();
	};

	return (
		<>
			<div className="button-container">
				<button onClick={toggleUpdateCart}>Update</button>
			</div>
			{isUpdateCart && (
				<div className="modal">
					<div onClick={toggleUpdateCart} className="overlay"></div>
					<div className="modal-content">
						<button
							className="close-modal"
							onClick={toggleUpdateCart}
						>
							<FontAwesomeIcon icon={faTimes} />
						</button>
						<div className="modal-content-container">
							<div className="modal-content-container-left">
								<div className="card-image">
									<img src={watch} alt="Images" />
								</div>
							</div>
							<div className="modal-content-container-right">
								<p>
									The stainless steel case is durable and
									polished to a shiny, mirror-like finish. The
									Sport Band is made from a durable yet
									surprisingly soft high-performance
									fluoroelastomer with an innovative
									pin-and-tuck closure.
								</p>
								<div className="btn-container">
									<button onClick={decreaseCounter}>-</button>
									<div className="input-container">
										<input
											type="number"
											placeholder="0"
											value={counterValue}
											onChange={handleInputChange}
										/>
									</div>
									<button onClick={increaseCounter}>+</button>
								</div>
								<div className="">
									<button
										className="button"
										disabled={counterValue < 0}
										onClick={handleUpdateCart}
									>
										Update
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Cart;
