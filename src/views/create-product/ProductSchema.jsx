import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
	name: Yup.string().required("Name can't be empty"),
	quantity: Yup.number()
		.required('Quantity is required')
		.positive('Quantity has to be positive'),
	price: Yup.number()
		.required('Specify Unit price')
		.positive('Enter a valid price'),
	category: Yup.string().required('Specify Category'),
	expiryDate: Yup.date().required('Enter Expiry date'),
	bonus: Yup.number(),
	ec: Yup.number(),
	available: Yup.boolean(),
});

export default ProductSchema;
