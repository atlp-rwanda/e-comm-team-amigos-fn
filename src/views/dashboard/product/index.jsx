import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../../redux/actions";
import PrimaryBtn from "../../../components/button/PrimaryButton.jsx";
import ProductCard from "../../../components/product-card/index.jsx";
import imagePlaceHolder from "../../../assets/img/placeholder-image.png";
import Loader from "../../../components/loader/index.jsx";
import * as Unicons from "@iconscout/react-unicons";
import "./style.scss";
import ProductLayout from "./product-layout";
import CreateProduct from "../../create-product/CreateProduct.jsx";
import UpdateProduct from "../../../components/UpdateProduct/UpdateProduct.jsx";

const Product = () => {
	const { products, fetchProductStart } = useSelector(
		(state) => state.fetchProductState,
	);
	const [productId, setProductId] = useState(null);
	const [page, setPage] = useState(1);
	const [createProduct, setCreateProduct] = useState(false);
	const [updateProduct, setUpdateProduct] = useState(false);
	const [imageIsVisible, setImageIsVisible] = useState(null);
	const productDetails = products?.product?.filter(
		(product) => product?.id === productId,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProduct(page));
	}, [page]);

	const handlePrevious = () => {
		setPage(page - 1);
	};
	const handleNext = () => {
		setPage(page + 1);
	};

	return (
		<div className="dashboard-content">
			<div className="product-header-content">
				{updateProduct ? (
					<span
						data-testid="seller-collection-title"
						className="seller-collection-title"
					>
						Update product
					</span>
				) : (
					<span
						data-testid="seller-collection-title"
						className="seller-collection-title"
					>
						{createProduct ? "Create product" : "Seller collection"}
					</span>
				)}
			</div>

			<div className="product-controller">
				<PrimaryBtn
					onClick={() => setCreateProduct(true)}
					title={"Create product"}
					width={"150px"}
				/>
			</div>

			<div className="product-card-title">
				<div className="product-details-indicator">
					<span
						data-testid="seller-collection-sub-title"
						onClick={() => {
							setProductId(null);
							setUpdateProduct(false);
						}}
						className="seller-collection-sub-title"
					>
						{createProduct ? "" : "Products"}
					</span>
					{productId && (
						<>
							<Unicons.UilAngleRight size="24" color="#096E3E" />
							{productDetails?.map((product) => {
								return (
									<span className="seller-collection-sub-title-item">
										{product?.name}
									</span>
								);
							})}
						</>
					)}
				</div>
			</div>
			{createProduct ? (
				<ProductCard>
					<CreateProduct setCreateProduct={setCreateProduct} />
				</ProductCard>
			) : updateProduct ? (
				<ProductCard>
					<UpdateProduct
						setUpdateProduct={setUpdateProduct}
						productId={productId}
						setProductId={setProductId}
						currentPage={products?.currentPage}
					/>
				</ProductCard>
			) : productId ? (
				<ProductCard data-testid="product-card">
					{productDetails?.map((product) => {
						return (
							<>
								<div
									key={product?.id}
									style={{ padding: "2rem" }}
									className="product-detail-information"
								>
									<div className="product-details">
										<div className="image-container">
											{!imageIsVisible ? (
												<img
													className="product-cover"
													src={
														product?.images[0]
															? product?.images[0]
															: imagePlaceHolder
													}
													alt="product images"
												/>
											) : (
												<img
													className="product-cover"
													src={imageIsVisible}
													alt="product images"
												/>
											)}
										</div>
										<div className="product-detailed-info">
											<span className="item-title">
												{product?.name}
											</span>
											<span className="item-title">
												In stock: {product?.quantity}
											</span>
											<span className="item-title">
												Product price: {product?.price}
											</span>
											<span className="item-title">
												Status:{" "}
												{product?.available
													? "Available"
													: "Not available"}
											</span>
										</div>
									</div>
								</div>
								<div className="product-mages">
									{product?.images.map((img) => {
										return (
											<img
												onClick={() =>
													setImageIsVisible(img)
												}
												style={{
													width: "100px",
													height: "70px",
													borderRadius: "1rem",
												}}
												className="product-image-1"
												src={
													img ? img : imagePlaceHolder
												}
												alt="product images"
											/>
										);
									})}
								</div>
							</>
						);
					})}
				</ProductCard>
			) : fetchProductStart ? (
				<ProductCard>
					<Loader />
				</ProductCard>
			) : (
				<ProductCard>
					<ProductLayout
						products={products}
						handleNext={handleNext}
						handlePrevious={handlePrevious}
						setProductId={setProductId}
						setUpdateProduct={setUpdateProduct}
					/>
				</ProductCard>
			)}
		</div>
	);
};

export default Product;
