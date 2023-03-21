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

router.post("/create_events", async (req, res) => {
	const { languages, location, link, title, description, datetime } = req.body;

	try {
		const result = await db.query(
			"INSERT INTO create_events (languages, location, link, title, description, datetime) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
			[languages, location, link, title, description, datetime]
		);

		res.status(201).json(result.rows[0]);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: "Server error" });
	}
});

// router.put("/update/:userId", async (req, res) => {
// 	const { userId } = req.params;
// 	const {
// 		user_firstname,
// 		user_secondname,
// 		user_email,
// 		user_language_speak,
// 		user_language_interest,
// 		user_city,
// 		user_country,
// 	} = req.body;

// 	try {
// 		const updateUserQuery = `
// 		UPDATE user_profiles
// 		SET user_firstname=$1, user_secondname=$2, user_email=$3,
// 			user_language_speak=$4, user_language_interest=$5,
// 			user_city=$6, user_country=$7
// 		WHERE user_id=$8
// 		RETURNING *;
// 	  `;
// 		const values = [
// 			user_firstname,
// 			user_secondname,
// 			user_email,
// 			user_language_speak,
// 			user_language_interest,
// 			user_city,
// 			user_country,
// 			userId,
// 		];

// 		const { rows } = await db.query(updateUserQuery, values);

// 		res.status(200).json({
// 			success: true,
// 			message: `User with ID ${userId} updated successfully.`,
// 			data: rows[0],
// 		});
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({
// 			success: false,
// 			message: `Could not update user with ID ${userId}.`,
// 		});
// 	}
// });

//💫💫💫💫💫💫
router.put("/update/:userId", async (req, res) => {
	const { userId } = req.params;
	const {
		user_firstname,
		user_secondname,
		user_email,
		user_language_speak,
		user_language_interest,
		user_city,
		user_country,
	} = req.body;

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

		// Insert message into database
		const newMessage = await db.query(
			"INSERT INTO messages (sender_id, recipient_id, message) VALUES ($1, $2, $3) RETURNING *",
			[senderId, recipient.rows[0].user_id, message]
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
