import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import FooterBottom from './FooterBottom';
import FooterMap from './FooterMap';

const Container = styled(Box)(({ theme }) => ({
	width: '1294px',
	// height: '552px',
	[theme.breakpoints.down('lg')]: {
		width: '90%',
	},
	display: 'flex',
	flexDirection: 'column',
	paddingTop: '57.86px',
	paddingBottom: '57.86px',
	marginLeft: 'auto',
	borderTop: '2px solid #C5C5C5',
	marginRight: 'auto',
}));

export default function Footer() {
	return (
		<Container>
			<FooterMap />
			<FooterBottom />
		</Container>
	);
}