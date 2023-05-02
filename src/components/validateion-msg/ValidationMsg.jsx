import React from 'react';
import './validation-msg.style.scss';

export default function ValidationMsg({ field, msg }) {
	return (
		<span className="form-validation-msg">
			{field.valid === false && `${msg}`}
		</span>
	);
}
