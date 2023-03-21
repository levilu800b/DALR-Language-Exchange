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
		console.log(req);
		next();
	} catch (error) {
		console.error(error.message);
		res.status(403).json("Not Authorize");
	}
};
