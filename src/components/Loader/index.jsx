// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots} from 'react-loader-spinner';
import './style.scss'
const Loader = () => {
	return (

		<div data-testid="loading-indicator" className="loader-container">
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
