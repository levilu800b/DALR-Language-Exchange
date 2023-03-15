const router = require("express").Router();
const authorize = require("../middleware/authorize");
import db from "../db.js";

router.post("/", authorize, async (req, res) => {
	try {
		const user = await db.query(
			"SELECT user_name FROM users WHERE user_id = $1",
			[req.user.id]
		);

		res.json(user.rows[0]);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
