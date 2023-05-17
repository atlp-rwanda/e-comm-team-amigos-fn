import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/Product.scss";
import ratings from "../assets/img/ratings.png";
import Circle1 from "../assets/img/Circle (1).png";
import Circle2 from "../assets/img/Circle (2).png";
import Circle3 from "../assets/img/Circle (3).png";
import Circle4 from "../assets/img/Circle (4).png";
import Circle from "../assets/img/Circle.png";
import Loader from "./Loader/Loader.jsx";
const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	const [value, setValue] = useState(0);
	const [selectedImage, setSelectedImage] = useState("");
	const increaseValue = () => {
		console.log(value);
		setValue(value + 1);
	};
	const decreaseValue = () => {
		if (value > 0) setValue(value - 1);
	};
	const handleSelectedImage = (image) => {
		setSelectedImage(image);
	};

	useEffect(() => {
		const getProduct = async () => {
			const response = await fetch(
				`https://e-comm-team-amigos-bn-project.onrender.com/product/${id}`,
			);
			const data = await response.json();
			setLoading(false);
			setProduct(data.item);
			setSelectedImage(data.item.images[0]);
		};
		getProduct();
	}, []);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="container">
					<div className="image-container">
						<div className="selected-image-cards">
							<img src={selectedImage} alt="image" />
						</div>
						<div className="image-to-choose">
							{product.images && product.images.length > 0 && (
								<>
									<div
										className="image-card"
										onClick={() =>
											handleSelectedImage(
												product.images[1],
											)
										}
									>
										<img
											src={product.images[1]}
											alt="images"
										/>
									</div>
									<div
										className="image-card"
										onClick={() =>
											handleSelectedImage(
												product.images[2],
											)
										}
									>
										<img
											src={product.images[2]}
											alt="images"
										/>
									</div>
									<div
										className="image-card"
										onClick={() =>
											handleSelectedImage(
												product.images[3],
											)
										}
									>
										<img
											src={product.images[3]}
											alt="images"
										/>
									</div>
									<div
										className="image-card"
										onClick={() =>
											handleSelectedImage(
												product.images[0],
											)
										}
									>
										<img
											src={product.images[0]}
											alt="images"
										/>
									</div>
								</>
							)}
						</div>
					</div>
					<div className="description-container">
						<div className="product-title-price">
							<h1>
								{product.name} - Max / ${product.price}
							</h1>
						</div>
						<div className="product-description">
							<p>
								combine high-fidelity audio with
								industry-leading Active Noise Cancellation to
								deliver an unparalleled listening experience
							</p>
							<img src={ratings} alt="images" />
						</div>
						<div className="choose-color">
							<p>Choose a color</p>
							<div className="color-to-choose">
								<img src={Circle1} alt="images" />
								<img src={Circle2} alt="images" />
								<img src={Circle3} alt="images" />
								<img src={Circle4} alt="images" />
								<img src={Circle} alt="images" />
							</div>
						</div>
						<div className="btns">
							<div
								className="value-button"
								onClick={decreaseValue}
							>
								<span>-</span>
							</div>
							<input
								type="number"
								id="number"
								value={value}
								readOnly
							/>
							<div
								className="value-button"
								onClick={increaseValue}
							>
								<span>+</span>
							</div>
							<p className="product-status">
								only <span>12 Items</span> Left Don't Miss it
							</p>
						</div>
						<div className="button">
							<button className="btn-buy-now">Buy Now</button>
							<button className="btn-add-to-cart">
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default ProductDetails;
