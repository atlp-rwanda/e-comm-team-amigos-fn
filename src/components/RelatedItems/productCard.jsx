import React from "react";
import Rating from "@mui/material/Rating";
import { Star } from "../TodayDeal/ItemCard";
import { useNavigate } from "react-router-dom";
import { StarDisabled } from "../TodayDeal/ItemCard";
import "./related.scss";

const ProductCard = (props) => {
	const { id, image, name, description, price } = props;
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/product/${id}`);
		window.location.reload();
	};
	return (
		<>
			<div onClick={handleClick}>
				<div className="related-image-container">
					<img src={image} alt="product Image" />
				</div>
				<div className="text-container">
					<div className="price">
						<p className="related-name">{name} </p>
						<span>
							<sup>$</sup>
							{price}
							<sup>.00</sup>
						</span>
					</div>
					<p className="related-desc">{description}</p>
					<Rating
						value={4}
						max={5}
						icon={<Star />}
						emptyIcon={<StarDisabled />}
						readOnly
					/>{" "}
					<br />
					<button onClick={handleClick} className="related-button">
						Add to Cart
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
