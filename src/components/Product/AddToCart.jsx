import { useEffect, useState } from "react";
import AddtoCartForm from "./addtocartform.jsx";
import imagePlaceHolder from "../../assets/img/placeholder-image.png";
import "../../assets/css/addToCart.scss";
import Loader from "../Loader/index.jsx";
// eslint-disable-next-line react/prop-types
export default function Cart({ id }) {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedImage, setSelectedImage] = useState("");
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
			setProduct(data?.item);
			setSelectedImage(data?.item?.images[0]);
		};
		getProduct();
	}, []);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div>
					<div className="adcontainer">
						<div className="col-1">
							<img src={selectedImage} alt="Product image" />
						</div>
						<AddtoCartForm product={product} />
					</div>
					<div className="col-3">
						{product?.images.map((img) => {
							return (
								// eslint-disable-next-line react/jsx-key
								<div className="imageCard">
									<img
										onClick={() => handleSelectedImage(img)}
										style={{
											width: "100px",
											height: "90px",
											borderRadius: "10px",
										}}
										src={img ? img : imagePlaceHolder}
										alt="product images"
									/>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
}
