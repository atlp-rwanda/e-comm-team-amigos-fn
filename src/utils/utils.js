function validatePassword(password) {
	let upper = /[A-Z]/,
		lower = /[a-z]/,
		number = /[0-9]/,
		special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

	if (
		password.length >= 8 &&
		upper.test(password) &&
		lower.test(password) &&
		number.test(password) &&
		special.test(password)
	) {
		return true;
	}

	return false;
}

function validateEmail(email) {
	let validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (email.match(validRegex)) {
		return true;
	} else {
		return false;
	}
}

function formatDate(date) {
	return new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric",
	}).format(new Date(date));
}

export { validatePassword, validateEmail, formatDate };
