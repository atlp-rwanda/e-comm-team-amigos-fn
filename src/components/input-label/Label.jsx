import React from 'react';
import './label.style.scss';

export default function Label({ labelText, ...props }) {
	return (
		<label className="input-label" {...props}>
			{labelText}
		</label>
	);
}
