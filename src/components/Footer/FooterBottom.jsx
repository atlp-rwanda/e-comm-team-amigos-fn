import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';

import * as footerStyles from './styles.footer';

const {
	logoContainer,
	logoName,
	footerPayment,
	footerRowTitle,
	footerRowLinks,
	...styles
} = footerStyles;

const FooterBottomContainer = styled(Box)(({ theme }) => ({
	display: 'grid',
	paddingTop: '40px',
	borderTop: '2px solid #C5C5C5;',
	gridTemplateColumns: '186px 143px 181px 139px 282px 309px',
	[theme.breakpoints.between('sm', 'lg')]: {
		gridTemplateColumns: '50% 50%',
	},
	[theme.breakpoints.down('sm')]: {
		gridTemplateColumns: '100%',
	},
}));

const FooterBottomLink = styled(Link)(({ theme }) => ({
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '17px',
	lineHeight: '20px',
	color: '#848181',
	display: 'flex',
	// justifyContent: 'space-between',
	alignItems: 'center',
	cursor: 'pointer',
}));

export default function FooterBottom() {
	return (
		<FooterBottomContainer>
			<FooterBottomLink underline="hover">
				<BriefCaseIcon sx={{ mr: '3px' }} />
				Become a seller
			</FooterBottomLink>
			<FooterBottomLink underline="hover">
				<GiftIcon sx={{ mr: '3px' }} />
				Gift Cards
			</FooterBottomLink>
			<FooterBottomLink underline="hover">
				<ExclamationIcon sx={{ mr: '3px' }} />
				Help Centre
			</FooterBottomLink>
			<FooterBottomLink underline="hover">Terms of use</FooterBottomLink>
			<FooterBottomLink underline="hover">
				Privacy Policy
			</FooterBottomLink>
			<FooterBottomLink underline="hover">
				All right reserved by Amigos team | 2023
			</FooterBottomLink>
		</FooterBottomContainer>
	);
}

export const BriefCaseIcon = (props) => (
	<SvgIcon {...props}>
		<path
			d="M19.375 8.91019C16.266 8.91019 13.75 11.2069 13.75 14.0449C13.75 16.8829 16.266 19.1796 19.375 19.1796C22.484 19.1796 25 16.8829 25 14.0449C25 11.2069 22.484 8.91019 19.375 8.91019ZM21.875 14.2692C21.875 14.4596 21.7043 14.6154 21.4957 14.6154H19.1297C18.9211 14.6154 18.7504 14.4596 18.7504 14.2692V11.5389C18.7504 11.3485 18.9211 11.1926 19.1297 11.1926H19.6207C19.8293 11.1926 20 11.3485 20 11.5389V13.4744H21.4957C21.7043 13.4744 21.875 13.6302 21.875 13.8206V14.2692ZM19.375 7.76914C19.5859 7.76914 19.7938 7.78091 20 7.79802V6.05757C20 5.14473 19.125 4.34599 18.125 4.34599H15V2.63442C15 1.72159 14.125 0.922852 13.125 0.922852H6.875C5.875 0.922852 5 1.72159 5 2.63442V4.34599H1.875C0.875 4.34599 0 5.14473 0 6.05757V8.91019H15.4344C16.5516 8.19382 17.909 7.76914 19.375 7.76914ZM12.5 4.34599H7.5V3.20495H12.5V4.34599ZM12.7664 12.3333H8.125C7.77969 12.3333 7.5 12.078 7.5 11.7628V10.0512H0V15.1859C0 16.0988 0.875 16.8975 1.875 16.8975H13.259C12.7773 16.0403 12.5 15.0726 12.5 14.0449C12.5 13.4508 12.5969 12.8782 12.7664 12.3333Z"
			fill="#B54E80"
		/>
	</SvgIcon>
);

export const GiftIcon = (props) => (
	<SvgIcon {...props}>
		<path
			d="M1.5625 19.4346C1.5625 20.2235 2.26074 20.8609 3.125 20.8609H10.9375V13.7294H1.5625V19.4346ZM14.0625 20.8609H21.875C22.7393 20.8609 23.4375 20.2235 23.4375 19.4346V13.7294H14.0625V20.8609ZM23.4375 6.59782H21.3818C21.6846 6.05849 21.875 5.46123 21.875 4.81493C21.875 2.65318 19.9463 0.892578 17.5781 0.892578C15.5469 0.892578 14.2334 1.84197 12.5488 3.93686C10.8643 1.84197 9.55078 0.892578 7.51953 0.892578C5.15137 0.892578 3.22266 2.65318 3.22266 4.81493C3.22266 5.46123 3.4082 6.05849 3.71582 6.59782H1.5625C0.698242 6.59782 0 7.2352 0 8.02413V11.5899C0 11.9821 0.351562 12.3031 0.78125 12.3031H24.2188C24.6484 12.3031 25 11.9821 25 11.5899V8.02413C25 7.2352 24.3018 6.59782 23.4375 6.59782ZM7.51465 6.59782C6.43555 6.59782 5.56152 5.79998 5.56152 4.81493C5.56152 3.82989 6.43555 3.03204 7.51465 3.03204C8.48633 3.03204 9.2041 3.17913 11.7188 6.59782H7.51465ZM17.5781 6.59782H13.374C15.8838 3.18805 16.582 3.03204 17.5781 3.03204C18.6572 3.03204 19.5312 3.82989 19.5312 4.81493C19.5312 5.79998 18.6572 6.59782 17.5781 6.59782Z"
			fill="#B54E80"
		/>
	</SvgIcon>
);

export const ExclamationIcon = (props) => (
	<SvgIcon {...props}>
		<path
			d="M24.2188 11.9465C24.2188 18.0527 18.7967 23.0004 12.1094 23.0004C5.42202 23.0004 0 18.0527 0 11.9465C0 5.84379 5.42202 0.892578 12.1094 0.892578C18.7967 0.892578 24.2188 5.84379 24.2188 11.9465ZM12.1094 14.1751C10.8689 14.1751 9.86328 15.0931 9.86328 16.2254C9.86328 17.3578 10.8689 18.2757 12.1094 18.2757C13.3499 18.2757 14.3555 17.3578 14.3555 16.2254C14.3555 15.0931 13.3499 14.1751 12.1094 14.1751ZM9.9769 6.80526L10.3391 12.8671C10.3561 13.1507 10.613 13.3728 10.9242 13.3728H13.2946C13.6058 13.3728 13.8627 13.1507 13.8796 12.8671L14.2418 6.80526C14.2602 6.49887 13.9929 6.24124 13.6568 6.24124H10.5619C10.2258 6.24124 9.95859 6.49887 9.9769 6.80526Z"
			fill="#B54E80"
		/>
	</SvgIcon>
);
