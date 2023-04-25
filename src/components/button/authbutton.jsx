export default function Button({isDisabled, isLoading, onClick }) {
	return (
		<div className="button">
			<button
				className={isLoading ? "disable" : ""}
				type="submit"
				disabled={isDisabled}
				onClick={onClick}
			>
				{isLoading ? "Laoding..." : "Confirm"}
			</button>
		</div>
	);
}
