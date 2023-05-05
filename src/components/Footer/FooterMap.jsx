import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import logo from './../../assets/img/logo.png';
import visa from './../../assets/img/visa.png';
import payPalCard from './../../assets/img/payPal.png';
import masterCard from './../../assets/img/masterCard.png';

import * as footerStyles from './styles.footer';

const {
	logoContainer,
	logoName,
	footerPayment,
	footerRowTitle,
	footerRowLinks,
	...styles
} = footerStyles;

const FooterMapContainer = styled(Box)(({ theme }) => ({
	display: 'grid',
	marginBottom: '40px',
	gridTemplateColumns: '334px 303px 204px 243px 208px',
	[theme.breakpoints.between('sm', 'lg')]: {
		gridTemplateColumns: '50% 50%',
	},
	[theme.breakpoints.down('sm')]: {
		gridTemplateColumns: '100%',
	},
}));

const FooterLogoContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	[theme.breakpoints.between('sm', 'lg')]: {
		marginBottom: '30px',
		gridColumn: 'span 2',
	},
}));

const PaymentMethodsContainer = styled(Box)(({ theme }) => ({
	width: '191px',
	height: '35.53px',
	display: 'flex',
	marginTop: '11.62px',
	justifyContent: 'space-between',
}));

const FooterLink = styled(Link)(({ theme }) => ({
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontweight: '400',
	fontSize: '17px',
	lineHeight: '26px',
	cursor: 'pointer',
	color: '#848181',
}));

export default function FooterMap() {
	return (
		<FooterMapContainer>
			<FooterLogo />
			<FooterDepartement />
			<FooterAboutUs />
			<FooterServices />
			<FooterHelp />
		</FooterMapContainer>
	);
}

export const FooterLogo = () => (
	<FooterLogoContainer>
		<Box component="div" sx={logoContainer}>
			<img src={logo} alt="Amigos E-shop" />
			<Box component="span" sx={logoName}>
				Amigos
			</Box>
		</Box>
		<Typography variant="p" sx={footerPayment}>
			Accepted payments
		</Typography>
		<PaymentMethodsContainer>
			<img src={visa} />
			<img src={masterCard} />
			<img src={payPalCard} />
		</PaymentMethodsContainer>
	</FooterLogoContainer>
);

export const FooterDepartement = () => (
	<Box>
		<Typography variant="h6" sx={footerRowTitle}>
			Department
		</Typography>
		<Box sx={footerRowLinks}>
			{['Fashion', 'Education Product', 'Beverages', 'Frozen Food'].map(
				(el, key) => (
					<FooterLink underline="hover" key={key}>
						{el}
					</FooterLink>
				),
			)}
		</Box>
	</Box>
);

export const FooterAboutUs = () => (
	<Box>
		<Typography variant="h6" sx={footerRowTitle}>
			About Us
		</Typography>
		<Box sx={footerRowLinks}>
			{['Careers', 'News & Blog', 'Help', 'Press Centre'].map(
				(el, key) => (
					<FooterLink underline="hover" key={key}>
						{el}
					</FooterLink>
				),
			)}
		</Box>
	</Box>
);

export const FooterServices = () => (
	<Box>
		<Typography variant="h6" sx={footerRowTitle}>
			Services
		</Typography>
		<Box sx={footerRowLinks}>
			{[
				'Gift Card',
				'Mobile App',
				'Shopping & Delivery',
				'Order Pickup',
				'Account Signup',
			].map((el, key) => (
				<FooterLink underline="hover" key={key}>
					{el}
				</FooterLink>
			))}
		</Box>
	</Box>
);

export const FooterHelp = () => (
	<Box>
		<Typography variant="h6" sx={footerRowTitle}>
			Help
		</Typography>
		<Box sx={footerRowLinks}>
			{[
				'Shop Cart Centre',
				'Returns',
				'Track Orders',
				'Contact Us',
				'Feedback',
				'Security & Fraud',
			].map((el, key) => (
				<FooterLink underline="hover" key={key}>
					{el}
				</FooterLink>
			))}
		</Box>
	</Box>
);
