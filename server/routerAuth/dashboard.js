const router = require("express").Router();
const authorize = require("../middleware/authorize");
import db from "../db.js";

router.get("/", authorize, async (req, res) => {
	try {
		const user = await db.query(
			"SELECT user_id, user_firstname, user_secondname, user_email, user_language_speak, user_language_interest, user_city, user_country FROM user_profiles WHERE user_id = $1 ",
			[req.user]
		);

		res.json(user.rows[0]);
		// res.json(req.user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});

router.get("/all", authorize, async (req, res) => {
	try {
		const user = await db.query(
			"SELECT user_id, user_firstname, user_secondname, user_email, user_language_speak, user_language_interest, user_city, user_country FROM user_profiles"
		);

		res.json(user.rows);
		// res.json(req.user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});
//💫

router.post("/send-message", authorize, async (req, res) => {
	try {
		const { recipientEmail, message } = req.body;
		const senderId = req.user;

		// Check if recipient exists
		const recipient = await db.query(
			"SELECT * FROM user_profiles WHERE user_email = $1",
			[recipientEmail]
		);

		if (recipient.rows.length === 0) {
			return res.status(404).json("Recipient not found");
		}
		const newMessage = await db.query(
			"INSERT INTO messages (sender_id, recipient_id, recipient_email, message) VALUES ($1, $2, $3, $4) RETURNING *",
			[senderId, recipient.rows[0].user_id, recipientEmail, message]
		);
		if (!newMessage.rows[0]) {
			return res
				.status(500)
				.json({ message: "Failed to insert message into database" });
		}

		res.json(newMessage.rows[0]);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;

//how to delete table in postgresql=> DROP TABLE messages;
