import { validateEmail, validatePassword } from "../../utils/utils";
import { signUp } from "../../redux/signup-form/actions";

/**
 * return true if data passes test, otherwise false
 * @param   {string} data  value to test the length
 * @return  {boolean}      true or false
 */
function validateEmptyField(data, tel = false) {
	if (tel === "true") {
		return !isNaN(data) && data.length === 10;
	}

	return data.length > 0 ? true : false;
}

/**
 * return true if formData pass test, otherwise false
 * @param   {array} formData  an array of state objects
 * @return  {boolean}      true or false
 */
function validateFormData(latestChangedField, formData) {
	const formDataObjToTest = {
		...formData,
		[latestChangedField.name]: undefined,
	};

	let lastFieldValid = false;

	lastFieldValid = validateEmptyField(
		latestChangedField.value,
		latestChangedField.name === "telephone" ? "true" : "false",
	);

	if (latestChangedField.name === "email")
		lastFieldValid = validateEmail(latestChangedField.value);

	if (latestChangedField.name === "password") {
		lastFieldValid = validatePassword(latestChangedField.value);
	}

	delete formDataObjToTest[latestChangedField.name];
	const verified = Object.values(formDataObjToTest)
		.map((datum) => datum.valid)
		.every((validity) => validity === true);

	return verified && lastFieldValid;
}

function handleOnChange(e, user, dispatch) {
	const { name, value } = e.target;

	let valid = false;

	if (name === "email") valid = validateEmail(value);
	if (name === "password") valid = validatePassword(value);
	else
		valid = validateEmptyField(
			value,
			name === "telephone" ? "true" : "false",
		);

	dispatch({
		type: "ON_CHANGE",
		payload: {
			name,
			value,
			valid,
			formValid: validateFormData({ name, value }, user),
		},
	});
}

function handleSubmit(e, formData, dispatch) {
	e.preventDefault();
	const reqObj = Object.entries(formData).reduce((acc, datum) => {
		return {
			...acc,
			[datum[0]]: datum[1].value,
		};
	}, {});

	dispatch(signUp(reqObj));
}

const formFields = [
	{
		id: 1,
		name: "firstName",
		labelTxt: "First Name",
		placeholder: "First Name...",
		msg: "First Name cannot be empty.",
	},

	{
		id: 2,
		name: "lastName",
		labelTxt: "Last Name",
		placeholder: "Last Name...",
		msg: "Last Name cannot be empty.",
	},

	{
		id: 3,
		name: "address",
		labelTxt: "Address",
		placeholder: "Address...",
		msg: "Address cannot be empty.",
	},

	{
		id: 4,
		name: "userName",
		labelTxt: "Username",
		placeholder: "Username...",
		msg: "Username cannot be empty.",
	},

	{
		id: 5,
		name: "telephone",
		labelTxt: "Telephone",
		type: "number",
		placeholder: "Telephone number...",
		msg: "Telephone number must be 10 digits.",
	},

	{
		id: 6,
		name: "email",
		labelTxt: "Email",
		type: "email",
		placeholder: "Your Email Address...",
		msg: "Provide a valid email address.",
	},

	{
		id: 7,
		name: "password",
		labelTxt: "Password",
		type: "password",
		placeholder: "Password...",
		msg: `Provide a valid email address.Your password must have at least, 8 characters long, 1 uppercase character, 1 lowercase character, 1 number, and 1 special character.`,
	},

	{
		id: 8,
		name: "role",
		labelTxt: "Select Trade role",
		type: "select",
		placeholder: "Select a role",
		options: ["", "Customer", "Merchant"],
		msg: `Role must be merchant or customer`,
	},
];

export {
	validateEmptyField,
	validateFormData,
	formFields,
	handleOnChange,
	handleSubmit,
};
