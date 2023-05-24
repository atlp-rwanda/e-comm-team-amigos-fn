export function formatDateTime(dateTime) {
	const date = new Date(dateTime);
	const hour = date.getHours();
	const minutes = date.getMinutes();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	return `${hour}:${minutes} ${day}/${month}`;
}
