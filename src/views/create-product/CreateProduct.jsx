import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProductSchema from './ProductSchema.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { create_product } from '../../redux/create-product/create_product.js';
import { handleProductResponse } from '../../utils/product/handleProductSuccess.js';
import './product.style.scss';
import ImageUploader from './ImageUploader.jsx';
const CreateProduct = () => {
	const dispatch = useDispatch();
	const [imageUrl, setImageUrl] = useState();
	const { productSuccess, productStart } = useSelector(
		(state) => state.productState,
	);
	useEffect(() => {
		handleProductResponse(productSuccess, toast);
	}, [productSuccess]);

	const handleUpload = (url) => {
		setImageUrl(url);
	};

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					price: '',
					quantity: '',
					bonus: '',
					expiryDate: '',
					ec: '',
					category: '',
				}}
				validationSchema={ProductSchema}
				onSubmit={(values) => {
					dispatch(
						create_product(
							values.name,
							values.price,
							values.quantity,
							values.bonus,
							values.expiryDate,
							values.ec,
							values.category,
							imageUrl,
						),
					);
					console.log(values);
				}}
			>
				{({ values }) => (
					<Form className="super-container">
						<h1 className="header">Create Product</h1>
						<div className="product-container">
							<div className="left">
								<div className="input">
									<label htmlFor="name">Name</label>
									<Field
										name="name"
										className="field"
										value={values.name}
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
										value={values.quantity}
									/>
									<ErrorMessage name="quantity" />
								</div>
								<div className="input">
									<label htmlFor="bonus">Bonus</label>
									<Field
										name="bonus"
										className="field"
										value={values.bonus}
									/>
									<ErrorMessage name="bonus" />
								</div>
								<div className="input">
									<label htmlFor="ec">ec</label>
									<Field
										name="ec"
										className="field"
										type="number"
										value={values.ec}
									/>
									<ErrorMessage name="ec" />
								</div>
								<div>
									<button
										className="btn"
										type="submit"
										id="create"
										data-testid="create"
									>
										{productStart
											? 'Creating ....'
											: 'Create'}
									</button>
								</div>
							</div>
							<div className="right">
								<div className="input">
									<label htmlFor="price">Price</label>
									<Field
										name="price"
										className="field"
										value={values.price}
									/>
									<ErrorMessage name="price" />
								</div>
								<div className="input">
									<label htmlFor="category">Category</label>
									<Field name="category" className="field" />
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
										value={values.expiryDate}
									/>
									<ErrorMessage name="expiryDate" />
								</div>
								<ImageUploader onUpload={handleUpload} />
								<button
									className="btn"
									type="reset"
									id="cancel"
									data-testid="cancel"
								>
									Cancel
								</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
			<ToastContainer />
		</>
	);
};

export default CreateProduct;
