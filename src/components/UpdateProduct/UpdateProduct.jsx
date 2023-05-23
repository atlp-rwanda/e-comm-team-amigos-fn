import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { update_product } from "../../redux/actions/update-product.js";
// import { handleUpdateProductResponse } from "../../utils/product/handleUpdateProductSuccess.js";
import "./style.scss";
import ImageUploader from "./ImageUploader.jsx";
import { fetchProduct, updateProductAction } from "../../redux/actions";

const UpdateProduct = ({ currentPage }) => {
	const { productUpdateSuccess, productUpdateStart } = useSelector(
		(state) => state.productUpdateState,
	);
	const { updateProductId } = useSelector((state) => state.fetchProductState);
	const productId = updateProductId;
	const dispatch = useDispatch();

	const handleUpdateProductResponse = () => {
		const updateSuccess = productUpdateSuccess;
		if (updateSuccess === true) {
			toast.success("Product Updated Successfully");
			setTimeout(() => {
				// setUpdateProduct(false);
				dispatch(updateProductAction(""));
			}, 5000);
		} else if (updateSuccess === 500) {
			toast.error("Internal server error");
			setTimeout(() => {}, 5000);
		} else if (updateSuccess === 401) {
			toast.warn("Unauthorized");
			setTimeout(() => {}, 5000);
		} else if (updateSuccess === 400) {
			toast.warn("Bad request");
			setTimeout(() => {}, 5000);
		}
	};
	useEffect(() => {
		if (productUpdateSuccess === true) {
			dispatch(fetchProduct(currentPage));
		}
		handleUpdateProductResponse();
	}, [productUpdateSuccess]);

	const [imageUrl, setImageUrl] = useState("");
	const [initialValues, setInitialValues] = useState({
		name: "",
		price: "",
		quantity: "",
		bonus: "",
		expiryDate: "",
		ec: "",
		category: "",
	});
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [quantity, setQuantity] = useState("");
	const [bonus, setBonus] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [ec, setEc] = useState("");
	const [category, setCategory] = useState("");

	useEffect(() => {
		fetch(
			`https://e-comm-team-amigos-bn-project.onrender.com/product/${productId}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setInitialValues(data.item);
				setName(data.item.name);
				setPrice(data.item.price);
				setQuantity(data.item.quantity);
				setBonus(data.item.bonus);
				setExpiryDate(data.item.expiryDate);
				setEc(data.item.ec);
				setCategory(data.item.category);
			})
			.catch((err) => console.log(err));
	}, [productId]);

	const handleUpload = (url) => {
		setImageUrl(url);
	};
	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={() => {
					dispatch(
						update_product(
							{
								name: name ? name : initialValues.name,
								price: price ? price : initialValues.price,
								quantity: quantity
									? quantity
									: initialValues.quantity,
								bonus: bonus ? bonus : initialValues.bonus,
								expiryDate: expiryDate
									? expiryDate
									: initialValues.expiryDate,
								ec: ec ? ec : initialValues.ec,
								category: category
									? category
									: initialValues.category,
								images: imageUrl
									? imageUrl
									: initialValues.imageUrl,
							},
							{
								productId: productId,
							},
						),
					);
				}}
			>
				{({ values }) => (
					<Form className="super-container">
						<div className="product-container">
							<div className="left">
								<div className="input">
									<label htmlFor="name">Name</label>
									<Field
										name="name"
										className="field"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>

									<ErrorMessage
										name="name"
										className="error"
									/>
								</div>
								<div className="input">
									<label htmlFor="quantity">Quantity</label>
									<Field
										name="quantity"
										className="field"
										value={quantity}
										onChange={(e) =>
											setQuantity(e.target.value)
										}
									/>
									<ErrorMessage name="quantity" />
								</div>
								<div className="input">
									<label htmlFor="bonus">Bonus</label>
									<Field
										name="bonus"
										className="field"
										value={bonus}
										onChange={(e) =>
											setBonus(e.target.value)
										}
									/>
									<ErrorMessage name="bonus" />
								</div>
								<div className="input">
									<label htmlFor="ec">ec</label>
									<Field
										name="ec"
										className="field"
										type="number"
										value={ec}
										onChange={(e) => setEc(e.target.value)}
									/>
									<ErrorMessage name="ec" />
								</div>
							</div>
							<div className="right">
								<div className="input">
									<label htmlFor="price">Price</label>
									<Field
										name="price"
										className="field"
										value={price}
										onChange={(e) =>
											setPrice(e.target.value)
										}
									/>
									<ErrorMessage name="price" />
								</div>
								<div className="input">
									<label htmlFor="category">Category</label>
									<Field
										name="category"
										className="field"
										value={category}
										onChange={(e) =>
											setCategory(e.target.value)
										}
									/>
									<ErrorMessage name="category" />
								</div>
								<div className="input">
									<label htmlFor="expiryDate">
										Expiry Date
									</label>
									<Field
										name="expiryDate"
										className="field"
										type="date"
										value={expiryDate}
										onChange={(e) =>
											setExpiryDate(e.target.value)
										}
									/>
									<ErrorMessage name="expiryDate" />
								</div>
								<ImageUploader onUpload={handleUpload} />
							</div>
						</div>
						<div className="buttons-container">
							<button
								className="btn"
								type="submit"
								id="update"
								data-testid="update"
							>
								{productUpdateStart ? "Updating ..." : "Update"}
							</button>
							<button
								className="btn"
								type="button"
								id="cancel"
								data-testid="cancel"
								onClick={() => {
									// false);
									dispatch(updateProductAction(""));
									setName(initialValues.name);
									setPrice(initialValues.price);
									setQuantity(initialValues.quantity);
									setBonus(initialValues.bonus);
									setExpiryDate(initialValues.expiryDate);
									setEc(initialValues.ec);
									setCategory(initialValues.category);
								}}
								style={{ backgroundColor: "#E4002B" }}
							>
								Cancel
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};
export default UpdateProduct;
