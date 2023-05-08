import Button from '../components/Button/index.jsx';
import colors from '../constants/colors.js';

export default {
	title: 'Button',
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const MainButton = Template.bind({});

MainButton.args = {
	label: 'Press Me',
	background: 'red',
	borderRadius: '50px',
	color: 'primary',
	variant: 'outline',
};
