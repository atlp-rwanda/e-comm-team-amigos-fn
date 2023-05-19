import './styles.scss';
export default function MainLoader(props) {
	return (
		<div className="main-loader-container">
			{props.children}
		</div>
	);
}