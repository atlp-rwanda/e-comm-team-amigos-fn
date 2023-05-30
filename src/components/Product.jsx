import { useParams } from "react-router-dom";
import "../assets/css/Product.scss";
import Loader from "./Loader/index.jsx";
import ProductCard from "./RelatedItems/productCard.jsx";
import RelatedProduct from "./RelatedItems/RelatedProducts.jsx";
import Footer from "./Footer/index.jsx";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedProducts } from "../redux/RelatedProducts/actions";
import AddToCart from "./Product/AddToCart.jsx";
import Reviews from './review/Reviews.jsx'

const ProductDetails = () => {
	const relatedProducts = useSelector((state) => state.relatedProductState);
	const dispatch = useDispatch();
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState("");

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
			setCategory(data.item.category);
		};
		getProduct();
	}, []);

	useEffect(() => {
		if (category) dispatch(fetchRelatedProducts(category));
	}, [dispatch, category]);
	return (
		<div className="margin-to-header">
			{loading ? (
				<Loader />
			) : (
				<>
					<AddToCart id={id} />
					<Reviews id={id} />
					<RelatedProduct />
					<div className="relatedItems">
						{relatedProducts.relatedProducts.length > 0 ? (
							relatedProducts.relatedProducts.map(
								(product, index) => (
									<ProductCard
										key={index}
										id={product.id}
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
		</div>
	);
};
export default ProductDetails;

