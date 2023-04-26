import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import colors from '../constants/colors';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: '15px',
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	border: `0.989903px solid ${colors.gray}`,
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	right: '0',
	left: 'auto',
	top: '0',
	bottom: 'auto',
	cursor: 'pointer',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 0, 1, 1),
		paddingRight: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

function SearchIcon(props) {
	return (
		<SvgIcon {...props}>
			<path
				d="M25.5663 22.9354L20.559 17.9282C20.333 17.7022 20.0267 17.5766 19.7052 17.5766H18.8866C20.2728 15.8037 21.0964 13.5738 21.0964 11.148C21.0964 5.37734 16.4206 0.701538 10.65 0.701538C4.87929 0.701538 0.203491 5.37734 0.203491 11.148C0.203491 16.9187 4.87929 21.5945 10.65 21.5945C13.0757 21.5945 15.3057 20.7708 17.0785 19.3846V20.2033C17.0785 20.5247 17.2041 20.8311 17.4301 21.0571L22.4374 26.0643C22.9095 26.5364 23.6729 26.5364 24.14 26.0643L25.5613 24.643C26.0334 24.1709 26.0334 23.4075 25.5663 22.9354ZM10.65 17.5766C7.09916 17.5766 4.22136 14.7038 4.22136 11.148C4.22136 7.59721 7.09414 4.71941 10.65 4.71941C14.2007 4.71941 17.0785 7.59219 17.0785 11.148C17.0785 14.6988 14.2058 17.5766 10.65 17.5766Z"
				fill="#C5C5C5"
			/>
		</SvgIcon>
	);
}

export default function SearchInput() {
	return (
		<Search>
			<StyledInputBase
				placeholder="Search product"
				inputProps={{ 'aria-label': 'search' }}
			/>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
		</Search>
	);
}
