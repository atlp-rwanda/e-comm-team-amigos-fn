import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import InterDesignBanner from '../assets/img/InteriorDesignBanner.png';
import Typography from '@mui/material/Typography';
import colors from '../constants/colors';
import Button from './Button';

const Section = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '784.92px',
	position: 'relative',
	background: `url(${InterDesignBanner})`,
	[theme.breakpoints.down('sm')]: {
		height: '500px',
		paddingTop: '40px',
	},
}));

export default function InteriorDesignSection() {
	return (
		<Section>
			<InteriorGlassCard
				title="Get 5% Cash Back On $200"
				description="Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance."
				actionLabel="View Products"
			/>
		</Section>
	);
}

const Card = styled(Box)(({ theme }) => ({
	width: '384.82px',
	height: '438.84px',
	background:
		'linear-gradient(136.73deg, rgba(255, 255, 255, 0.4) 2.33%, rgba(22, 60, 42, 0) 100%)',
	filter: 'drop-shadow(0px 19.8568px 39.7136px rgba(0, 0, 0, 0.1))',
	backdropFilter: 'blur(9.9284px)',
	borderRadius: '14.8926px',
	padding: '51px 35px 72px 35px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	[theme.breakpoints.up('sm')]: {
		position: 'absolute',
		top: 'auto',
		bottom: '91.09px',
		left: 'auto',
		right: '80.18px',
	},

	[theme.breakpoints.down('sm')]: {
		width: '320px',
		height: '370px',
		padding: '38px 26px 60px 26px',
		position: 'relative',
		marginTop: '40px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
}));

const CardHeader = styled(Typography)(({ theme }) => ({
	fontFamily: 'Inter',
	fontStyle: 'normal',
	fontWeight: '700',
	fontSize: '39.7136px',
	lineHeight: '48px',
	color: colors.white,
	[theme.breakpoints.down('sm')]: {
		fontSize: '28px',
		lineHeight: '40px',
	},
}));

const CardSubHeader = styled(Typography)(({ theme }) => ({
	fontFamily: 'Inter',
	fontStyle: 'normal',
	fontWeight: '500',
	fontSize: '16.87px',
	lineHeight: '20px',
	color: colors.white,
}));

export const InteriorGlassCard = ({
	title,
	description,
	actionLabel,
	handleClick,
}) => {
	return (
		<Card>
			<CardHeader>{title}</CardHeader>
			<CardSubHeader>{description}</CardSubHeader>
			<Box>
				<Button
					label={actionLabel}
					padding="14.22px 23.37px"
					fontSize="14.22px"
					color={colors.white}
					onClick={handleClick}
				/>
			</Box>
		</Card>
	);
};

InteriorGlassCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	actionLabel: PropTypes.string.isRequired,
	handleClick: PropTypes.func,
};
