import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions/cartAction";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

const UpdateCartModal = ({
	handleUpdateCartModal,
	handleUpdateCart,
	product,
}) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(product.quantity || 0);
	const [isLoading, setIsLoading] = useState(false); // Add isLoading state

	const handleQuantityChange = (e) => {
		const value = parseInt(e.target.value);
		setQuantity(value || 0);
	};

	const decreaseCounter = () => {
		setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
	};

	const increaseCounter = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleUpdate = async () => {
		setIsLoading(true);
		await dispatch(updateCart(quantity, product.id));
		handleUpdateCart();
		handleUpdateCartModal();
		setIsLoading(false);
	};
	return (
		<>
			<div className="modal" data-testid="update-cart-modal">
				<div className="modal-content">
					<button
						className="close-modal"
						onClick={handleUpdateCartModal}
					>
						<FontAwesomeIcon icon={faTimes} />
					</button>
					<div className="modal-content-container">
						<div className="modal-content-container-left">
							{product &&
							product.images &&
							product.images.length > 0 ? (
								<div className="card-image">
									<img src={product.images[0]} alt="Images" />
								</div>
							) : (
								<div>No image available</div>
							)}
						</div>
						<div className="modal-content-container-right">
							<p>
								Elevate your satisfaction with increased
								quantity. Experience the full benefits of our
								premium products. Indulge in more and amplify
								your enjoyment. Upgrade your purchase for
								maximum delight!
							</p>
							<div className="btn-container">
								<button
									data-testid="decreaseBtn"
									onClick={decreaseCounter}
								>
									-
								</button>
								<div className="input-container">
									<input
										type="number"
										placeholder="0"
										value={quantity}
										onChange={handleQuantityChange}
									/>
								</div>
								<button
									data-testid="increaseBtn"
									onClick={increaseCounter}
								>
									+
								</button>
							</div>
							<div className="">
								<button
									data-testid="update"
									className="button-update"
									disabled={quantity <= 0}
									onClick={handleUpdate}
								>
									{isLoading ? "Updating" : "Update"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UpdateCartModal;
