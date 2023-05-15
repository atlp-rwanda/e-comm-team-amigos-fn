import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '../Button/index.jsx';
import ItemCard from './ItemCard.jsx';
import PageIndicator from './PageIndicator.jsx';
import SectionTitle from '../SectionHeader.jsx';
import './style.css';

const Section = styled(Box)(({ theme }) => ({
	width: '100%',
	marginBottom: '60px',
	[theme.breakpoints.down('sm')]: {
		paddingLeft: '20px',
		paddingRight: '20px',
	},
}));

const GroupButton = styled(Box)(({ theme }) => ({
	width: '991px',
	display: 'flex',
	justifyContent: 'space-between',
	marginRight: 'auto',
}));

const GroupButtonResponsive = styled(Box)(({ theme }) => ({
	width: 'auto',
	overflowX: 'scroll',
	[theme.breakpoints.up('md')]: {
		marginLeft: '59px',
	},
}));

const SectionHeader = styled(SectionTitle)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		marginLeft: '59px',
	},
}));

const DealsContainer = styled(Box)(({ theme }) => ({
	width: '95%',
	display: 'flex',
	justifyContent: 'space-between',
	[theme.breakpoints.down('sm')]: {
		justifyContent: 'center',
		width: '100%',
	},
	alignItems: 'center',
	flexWrap: 'wrap',
	marginLeft: 'auto',
	marginRight: 'auto',
}));

export default function TodayDeals() {
	return (
		<Section>
			<SectionHeader>Today’s Best Deals For You</SectionHeader>
			<GroupButtonResponsive className="deal-button-container">
				<GroupButton>
					{[
						'Gadgets',
						'Fashion',
						'Toys',
						'Education',
						'Beauty',
						'Fitnes',
						'Furniture',
						'Sneakers',
					].map((item, index) => (
						<Button
							label={item}
							key={index}
							borderRadius="80px"
							padding="14.22px 23.37px"
							fontSize="14.22px"
							mr="23.34px"
						/>
					))}
				</GroupButton>
			</GroupButtonResponsive>
			<DealsContainer>
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
			</DealsContainer>
			<PageIndicator />
		</Section>
	);
}