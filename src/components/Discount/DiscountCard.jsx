import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';

const Card = styled(Paper)(({ theme }) => ({
	width: '295.37px',
	height: '332px',
	background: '#F0E4DA',
	borderRadius: '20px',
	paddingTop: '24px',
	marginBottom: '24px',
	position: 'relative',
}));

const CardTile = styled(Typography)(({ theme }) => ({
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: '500',
	fontSize: '30px',
	lineHeight: '35px',
	marginLeft: '28.25px',
	color: colors.black,
}));

const CardSubTitle = styled(Typography)(({ theme }) => ({
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: '700',
	fontSize: '30px',
	lineHeight: '35px',
	marginLeft: '28.25px',
	color: '#8D6442',
}));

const CardDescription = styled(Typography)(({ theme }) => ({
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '17px',
	lineHeight: '20px',
	marginLeft: '28.25px',
	marginTop: '5px',
	color: colors.black,
}));

const CardImg = styled('img')(({ theme }) => ({
	width: '100%',
	height: '165.21px',
	borderRadius: '0px 0px 15px 15px',
	position: 'absolute',
	top: 'auto',
	bottom: '0',
	left: 'auto',
	right: 'auto',
}));

export default function DiscountCard({
	img,
	title,
	potentialSave,
	description,
}) {
	return (
		<Card>
			<CardTile>{title}</CardTile>
			<CardSubTitle>{potentialSave}</CardSubTitle>
			<CardDescription>{description}</CardDescription>
			<CardImg src={img} />
		</Card>
	);
}

DiscountCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string,
	potentialSave: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

DiscountCard.defaultProps = {
	title: 'Save',
};