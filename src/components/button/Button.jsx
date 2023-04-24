import React from 'react';
import '../../App.css';

export default function Button({ disabled, children, ...props }) {
	return (
		<button {...props} className="primary-btn" disabled={disabled}>
			{children}
		</button>
	);
}
