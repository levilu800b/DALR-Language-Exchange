const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
	try {
		const jwtToken = req.header("token");
		if (!jwtToken) {
			return res.status(403).json("Not Authorize");
		}
		const payload = jwt.verify(jwtToken, process.env.jwtSecret);
		req.user = payload.user;
		next();
	} catch (error) {
		console.error(error.message);
		res.status(403).json("Not Authorize");
	}
	// const token = req.header("jwt_token");

	// if (!token) {
	// 	return res.status(403).json({ msg: "authorization denied" });
	// }

	// try {
	// 	const verify = jwt.verify(token, process.env.jwtSecret);

	// 	req.user = verify.user;
	// 	next();
	// } catch (err) {
	// 	res.status(401).json({ msg: "Token is not valid" });
	// }
};
