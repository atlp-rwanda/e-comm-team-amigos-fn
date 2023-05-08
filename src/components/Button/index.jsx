import { styled } from '@mui/material/styles';
import BaseButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import colors from '../../constants/colors';

const Label = styled(Typography)(({ theme }) => ({
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontWeight: '500',
	fontSize: '27px',
	lineHeight: '40px',
	display: 'flex',
	alignItems: 'center',
	textAlign: 'center',

	color: colors.white,
}));

function Button({
	label,
	borderRadius,
	background,
	type,
	width,
	height,
	color,
	fontSize,
	variant,
	active,
	labelVariant,
	...props
}) {
	const Button2 = styled(BaseButton)(({ theme }) => ({
		':disabled': {
			background: colors.gray,
		},
		':hover': {
			color: colors.white,
			background: colors.darkGreen,
		},
		':active': {
			color: colors.white,
			background: colors.darkGreen,
		},
		flexShrink: '0',
		background: active ? colors.darkGreen : '',
		borderRadius,
		color: active ? colors.white : colors.darkGreen,
		width,
		height,
		textTransform: 'none',
		...props,
	}));
	return (
		<Button2 type={type} variant={variant}>
			<Label
				sx={{
					color: 'inherit',
					fontSize,
					labelVariant,
					lineHeight: fontSize,
					padding: '0',
				}}
				component="p"
			>
				{label}
			</Label>
		</Button2>
	);
}

Button.propTypes = {
	borderRadius: PropTypes.oneOf(['50px', '80px', '10.16px', '0px']),
	background: PropTypes.string,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['a', 'button']),
	color: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	fontSize: PropTypes.string,
	border: PropTypes.string,
	active: PropTypes.bool,
};

Button.defaultProps = {
	borderRadius: '50px',
	background: 'none',
	type: 'button',
	color: colors.darkGreen,
	variant: 'primary',
	width: 'auto',
	height: 'auto',
	border: '1.01591px solid #C5C5C5',
	ative: false,
};

export default Button;
