import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PrimaryBtn from "../../../components/button/PrimaryButton.jsx";
import ProductCard from "../../../components/product-card/index.jsx";
import imagePlaceHolder from "../../../assets/img/placeholder-image.png";
import Loader from "../../../components/loader/index.jsx";
import * as Unicons from "@iconscout/react-unicons";
import "./style.scss";
import ProductLayout from "./product-layout";
import CreateProduct from "../../create-product/CreateProduct.jsx";
import UpdateProduct from "../../../components/UpdateProduct/UpdateProduct.jsx";
import ViewSingleProduct from "./ViewSingleProduct.jsx";
import { ToastContainer } from "react-toastify";
import { viewSingleProduct } from "../../../redux/actions/product.js";

const Product = () => {
	const { products, fetchProductStart, detailsProductId, updateProductId } =
		useSelector((state) => state.fetchProductState);
	const [updateProduct, setUpdateProduct] = useState(false);
	const dispatch = useDispatch();
	const [createProduct, setCreateProduct] = useState(false);
	const productDetails = products?.product?.filter(
		(product) => product.id === detailsProductId,
	);
	function handleUnmountProduct() {
		dispatch(viewSingleProduct(""));
	}
	const handleCreateProduct = () => {
		setCreateProduct(true);
	};

	return (
		<div className="dashboard-content">
			<ToastContainer />
			<div className="product-header-content">
				{updateProductId ? (
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
					onClick={() => handleCreateProduct()}
					title={"Create product"}
					width={"150px"}
				/>
			</div>

			<div className="product-card-title">
				<div className="product-details-indicator">
					<span
						data-testid="seller-collection-sub-title"
						onClick={() => handleUnmountProduct()}
						className="seller-collection-sub-title"
					>
						{createProduct ? "" : "Products"}
					</span>
					{detailsProductId && (
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
			) : updateProductId ? (
				<ProductCard>
					<UpdateProduct
						// setUpdateProduct={setUpdateProduct}
						// productId={productId}
						// setProductId={setProductId}
						currentPage={products?.currentPage}
					/>
				</ProductCard>
			) : detailsProductId ? (
				<ProductCard data-testid="product-card">
					<ViewSingleProduct productDetails={productDetails} />
				</ProductCard>
			) : (
				<ProductLayout />
			)}
		</div>
	);
};

export default Product;
