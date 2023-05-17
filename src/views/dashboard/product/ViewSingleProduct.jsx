import { useState } from "react";
import imagePlaceHolder from "../../../assets/img/placeholder-image.png";

export default function ViewSingleProduct({ productDetails }) {
	const [imageIsVisible, setImageIsVisible] = useState(null);
	return (
		<>
			{productDetails?.map((product) => {
				return (
					<>
						<div
							key={product.id}
							style={{ padding: "2rem" }}
							className="product-detail-information"
						>
							<div className="product-details">
								<div className="image-container">
									{!imageIsVisible ? (
										<img
											style={{
												width: "80%",
												height: "150px",
											}}
											className="product-cover"
											src={
												product.images[0]
													? product.images[0]
													: imagePlaceHolder
											}
											alt="product images"
										/>
									) : (
										<img
											style={{
												width: "80%",
												height: "150px",
											}}
											className="product-cover"
											src={imageIsVisible}
											alt="product images"
										/>
									)}
								</div>
								<div className="product-detailed-info">
									<span className="item-title">
										{product.name}
									</span>
									<span className="item-title">
										In stock: {product.quantity}
									</span>
									<span className="item-title">
										Product price: {product.price}
									</span>
									<span className="item-title">
										Status:{" "}
										{product.available
											? "Available"
											: "Not available"}
									</span>
								</div>
							</div>
						</div>
						<div className="product-mages">
							{product.images.map((img) => {
								return (
									<img
										onClick={() => setImageIsVisible(img)}
										style={{
											width: "100px",
											height: "70px",
											borderRadius: "1rem",
										}}
										className="product-image-1"
										src={img ? img : imagePlaceHolder}
										alt="product images"
									/>
								);
							})}
						</div>
					</>
				);
			})}
		</>
	);
}
