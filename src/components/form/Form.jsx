import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormInput from '../form-input/FormInput.jsx';
import ValidationMsg from '../validateion-msg/ValidationMsg.jsx';
import { formFields, handleSubmit, handleOnChange } from './form.utils.js';
import Button from '../button/Button.jsx';

function createInputs(formFields, user, dispatch) {
	return formFields.map((field) => (
		<div className="form-input-group" key={field.id}>
			<FormInput
				type={field.type && field.type}
				name={field.name}
				placeholder={field.placeholder}
				required
				labelText={field.labelTxt}
				field={user[field.name]}
				handleOnChange={(e) => handleOnChange(e, user, dispatch)}
			/>
			<ValidationMsg field={user[field.name]} msg={field.msg} />
		</div>
	));
}

export default function Form() {
	const { errorMsg } = useSelector((state) => state.signupForm);
	const { user, creatingAcc, formDataValid } = useSelector(
		(state) => state.signupForm,
	);
	const dispatch = useDispatch();

	return (
		<form
			onSubmit={(e) => handleSubmit(e, user, dispatch)}
			className="sign-up-form"
			aria-label="form"
		>
			{createInputs(formFields, user, dispatch)}
			{errorMsg && <span className="error">{errorMsg}</span>}
			<Button
				type="submit"
				disabled={((!formDataValid || creatingAcc) && true) || false}
			>
				{creatingAcc === true ? 'Processing...' : 'Signup'}
			</Button>
		</form>
	);
}
