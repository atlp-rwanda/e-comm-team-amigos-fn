import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

function LoadingSpin({ type, color, height, width }) {
	return (
		<ReactLoading
			type={type}
			color={color}
			height={`${height}px`}
			width={`${width}px`}
			className="mx-auto"
		/>
	);
}

LoadingSpin.propTypes = {
	type: PropTypes.oneOf([
		'blank',
		'balls',
		'bars',
		'bubbles',
		'cubes',
		'cylon',
		'spin',
		'spinningBubbles',
		'spokes',
	]),
	color: PropTypes.string,
	height: PropTypes.number,
	width: PropTypes.number,
};

LoadingSpin.defaultProps = {
	type: 'spin',
	color: colors.darkGreen,
	height: 30,
	width: 30,
};

export default LoadingSpin;
