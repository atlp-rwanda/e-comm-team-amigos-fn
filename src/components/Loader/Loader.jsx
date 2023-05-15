// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots, Puff, Circles } from 'react-loader-spinner';
import React from 'react';
import './Loader.scss'
const Loader = () => {
	return (

		<div className="loader-container">
			<ThreeDots
				height="100"
				width="100"
				color="#096F3E"
				ariaLabel="Loading"
			/>
		</div>
	);
};
export default Loader;
