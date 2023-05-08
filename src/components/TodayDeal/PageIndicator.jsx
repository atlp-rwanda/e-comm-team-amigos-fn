import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import colors from '../../constants/colors';

const Container = styled(Box)(({ theme }) => ({
	width: '332.2px',
	[theme.breakpoints.down('md')]: {
		width: '270px',
	},
	[theme.breakpoints.down('sm')]: {
		width: '90%',
	},
	height: '40px',
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: '40px',
	marginLeft: 'auto',
	marginRight: 'auto',
}));

const PageNumber = styled(Box)(({ theme }) => ({
	width: '59.86px',
	[theme.breakpoints.down('md')]: {
		width: '3ch',
	},
	height: '40px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontWeight: '500',
	fontSize: '18.2864px',
	lineHeight: '27px',
	borderRadius: '10px',
	border: `1.01591px solid ${colors.darkGreen}`,
	color: colors.black,
	':active': {
		background: colors.darkGreen,
		color: colors.white,
	},
	':hover': {
		background: colors.darkGreen,
		color: colors.white,
		cursor: 'pointer',
	},
}));

const PageNext = styled(Box)(({ theme }) => ({
	width: '107.74px',
	[theme.breakpoints.down('md')]: {
		width: '6ch',
	},
	height: '39px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontWeight: '500',
	fontSize: '18.2864px',
	borderRadius: '10px',
	lineHeight: '27px',
	background: colors.darkGreen,
	color: colors.white,
	':active': {
		background: colors.darkGreen,
		color: colors.white,
	},
	':hover': {
		background: colors.white,
		color: colors.darkGreen,
		cursor: 'pointer',
	},
}));

export default function PageIndicator() {
	return (
		<Container>
			<PageNumber>1</PageNumber>
			<PageNumber>2</PageNumber>
			<PageNumber>3</PageNumber>
			<PageNext>Next</PageNext>
		</Container>
	);
}
