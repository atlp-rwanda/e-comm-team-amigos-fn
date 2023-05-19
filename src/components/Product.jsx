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
import ProductCard from "./RelatedItems/productCard.jsx";
import RelatedProduct from "./RelatedItems/RelatedProducts.jsx";
import Footer from "./Footer/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedProducts } from "../redux/RelatedProducts/actions";
import Reviews from './review/Reviews.jsx'
const ProductDetails = () => {
	const relatedProducts = useSelector((state) => state.relatedProductState);
	const dispatch = useDispatch();
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	const [related, setRelated] = useState([]);
	const [category, setCategory] = useState("");
	const [value, setValue] = useState(0);
	const [selectedImage, setSelectedImage] = useState("");
	const increaseValue = () => {
		setValue(value + 1);
	};
	const decreaseValue = () => {
		if (value > 0) setValue(value - 1);
	};
	const handleSelectedImage = (image) => {
		setSelectedImage(image);
	};
	const imageUrls = [
		"https://via.placeholder.com/400",
		"https://via.placeholder.com/400",
		"https://via.placeholder.com/400",
		"https://via.placeholder.com/400",
	];

	useEffect(() => {
		const getProduct = async () => {
			const response = await fetch(
				`${
					process.env.BASE_URL ||
					"https://e-comm-team-amigos-bn-project.onrender.com"
				}/product/${id}`,
			);
			const data = await response.json();
			setLoading(false);
			setProduct(data.item);
			setCategory(data.item.category);
			setSelectedImage(data.item.images[0] || null);
		};
		getProduct();
	}, []);

	useEffect(() => {
		if (category) dispatch(fetchRelatedProducts(category));
	}, [dispatch, category]);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className="container">
						<div className="image-container">
							<div className="selected-image-cards">
								<img src={selectedImage} alt="image" />
							</div>
							<div className="image-to-choose">
								{product.images && product.images.length > 0 ? (
									<>
										{product.images
											.slice(1, 4)
											.map((image, index) => (
												<div
													className="image-card"
													key={index}
													onClick={() =>
														handleSelectedImage(
															image,
														)
													}
												>
													<img
														src={image}
														alt="Product Image"
													/>
												</div>
											))}
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
												alt="Product Image"
											/>
										</div>
									</>
								) : (
									<>
										{imageUrls.map((imageUrl, index) => {
											<div
												className="image-card"
												key={index}
												onClick={() =>
													handleSelectedImage(
														imageUrl,
													)
												}
											>
												<img
													src={imageUrl}
													alt="Product Image"
												/>
											</div>;
										})}
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
									industry-leading Active Noise Cancellation
									to deliver an unparalleled listening
									experience
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
									only <span> 12 Items </span> Left Don't Miss
									it
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
					<Reviews id={id}/>
					<RelatedProduct />
					<div className="relatedItems">
						{relatedProducts.relatedProducts.length > 0 ? (
							relatedProducts.relatedProducts.map(
								(product, index) => (
									<ProductCard
										key={index}
										name={product.name}
										price={product.price}
										description={product.description}
										image={
											product.images.length > 0
												? product.images[0]
												: "https://via.placeholder.com/400"
										}
									/>
								),
							)
						) : (
							<Loader />
						)}
					</div>
				</>
			)}
			<Footer />
		</>
	);
};
export default ProductDetails;
