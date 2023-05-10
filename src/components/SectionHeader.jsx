import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import colors from '../constants/colors';

const SectionTitle = styled(Typography)(({ theme }) => ({
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontWeight: '600',
	fontSize: '28px',
	lineHeight: '42px',
	color: colors.black,
	marginBottom: '54px',
	[theme.breakpoints.down('sm')]: {
		fontSize: '18px',
		lineHeight: '32px',
	},
}));

export default SectionTitle;