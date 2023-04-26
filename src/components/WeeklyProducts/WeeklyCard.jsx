import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';
import Button from '../Button';

const Card = styled(Box)(({ theme }) => ({
	width: '391.8px',
	height: '372.42px',
	display: 'flex',
	flexDirection: 'column',
	marginBottom: '40px',

	[theme.breakpoints.down('sm')]: {
		width: '300px',
		height: 'auto',
	},
}));

const ImageContainer = styled(Box)(({ theme }) => ({
	width: '391.55px',
	height: '236.24px',
	background: '#F5F6F6',
	borderRadius: '20px',
	position: 'relative',
	[theme.breakpoints.down('sm')]: {
		width: '100%',
	},
}));

const Image = styled('img')(({ theme }) => ({
	width: '256.15px',
	height: '166.93px',
	top: '58.57px',
	position: 'absolute',
	left: '67.8px',
	right: 'auto',
	bottom: 'auto',
	[theme.breakpoints.down('sm')]: {
		width: '65%',
		left: '17.3%',
	},
}));

const CardTitleContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '44px',
	marginTop: '14.76px',
	display: 'flex',
	justifyContent: 'space-between',
}));

const CardTitle = styled(Typography)(({ theme }) => ({
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontWeight: '500',
	fontSize: '30px',
	lineHeight: '45px',
	color: colors.black,
}));

const CardDescription = styled(Typography)(({ theme }) => ({
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '15px',
	lineHeight: '22px',
	color: colors.black,
	marginBottom: '21.71px',
}));

export default function WeeklyCard({ img, title, price, description }) {
	const { amount, currency } = price;
	return (
		<Card>
			<ImageContainer>
				<Image src={img} />
			</ImageContainer>
			<CardTitleContainer>
				<CardTitle>{title}</CardTitle>
				<WeeklyPrice amount={amount} currency={currency} />
			</CardTitleContainer>
			<CardDescription>{description}</CardDescription>
			<Box>
				<Button
					label="Add to cart"
					padding="10px 11px"
					fontSize="12px"
				/>
			</Box>
		</Card>
	);
}

WeeklyCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.exact({
		currency: PropTypes.oneOf(['RWF', '$']),
		amount: PropTypes.number.isRequired,
	}),
};

export const WeeklyPrice = ({ currency, amount }) => {
	return (
		<CardTitle>
			<sup>{currency}</sup>
			{amount}
		</CardTitle>
	);
};

WeeklyPrice.propTypes = {
	currency: PropTypes.oneOf(['RWF', '$']),
	amount: PropTypes.number.isRequired,
};

WeeklyPrice.defaultProps = {
	currency: '$',
};
