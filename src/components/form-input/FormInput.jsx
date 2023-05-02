import React from 'react';
import Label from '../input-label/Label.jsx';
import './form-input.style.scss';

export default function FormInput({
	handleOnChange,
	labelText,
	name,
	type,
	field,
	...props
}) {
	let testClass = null;
	let inputType = 'text';
	if (type === 'email') inputType = 'email';
	if (type === 'password') inputType = 'password';
	if (type === 'telephone') inputType = 'number';

	if (field.valid === false) testClass = 'form-input--invalid';
	if (field.valid === true) testClass = 'form-input--valid';

	return (
		<>
			<Label htmlFor={name} labelText={labelText} />
			<input
				type={inputType}
				className={`form-input
			${testClass}`}
				id={name}
				name={name}
				value={field.value}
				{...props}
				onChange={handleOnChange}
			/>
		</>
	);
}
