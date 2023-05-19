import React from 'react';
import '../../App.css';

export default function Button({ disabled, children, isSet, ...props }) {
	return (
		<button
			{...props}
			className={`primary-btn ${isSet && `is-set`} `}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
