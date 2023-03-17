module.exports = (req, res, next) => {
	const {
		firstname,
		secondname,
		email,
		password,
		language_speak,
		language_interest,
		city,
		country,
	} = req.body;

	function validEmail(userEmail) {
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
	}

	if (req.path === "/register") {
		if (
			![
				firstname,
				secondname,
				email,
				password,
				language_speak,
				language_interest,
				city,
				country,
			].every(Boolean)
		) {
			return res.status(401).json("Missing Credentials");
		} else if (!validEmail(email)) {
			return res.status(401).json("Invalid Email");
		}
	} else if (req.path === "/login") {
		if (![email, password].every(Boolean)) {
			return res.status(401).json("Missing Credentials");
		} else if (!validEmail(email)) {
			return res.status(401).json("Invalid Email");
		}
	}

	next();
};
