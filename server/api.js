// import express from "express";
// import logger from "./utils/logger";
// const router = express.Router();

// import {
// 	getAllLearner,
// 	getLearnersByName,
// 	getLearnersByLastName,
// 	getLearnersByLanguage,
// 	postLearners,
// } from "./models/users.js";

// router.use(express.json());

// router.get("/", async (req, res) => {
// 	const { firstname, secondname, language_speak } = req.query;

// 	if (firstname) {
// 		const searchResults = await getLearnersByName(firstname);
// 		res.json({
// 			success: true,
// 			message: `Searched First name for ${firstname}`,
// 			payload: searchResults,
// 		});
// 		return;
// 	}
// 	if (secondname) {
// 		const searchResults = await getLearnersByLastName(secondname);
// 		res.json({
// 			success: true,
// 			message: `Searched Last name for ${secondname}`,
// 			payload: searchResults,
// 		});
// 		return;
// 	}
// 	if (language_speak) {
// 		const searchResults = await getLearnersByLanguage(language_speak);
// 		res.json({
// 			success: true,
// 			message: `Searched Language for ${language_speak}`,
// 			payload: searchResults,
// 		});
// 		return;
// 	}

// 	const learners = await getAllLearner();
// 	logger.debug("Welcoming everyone...");
// 	res.json({ success: true, message: "all learner", payload: learners });
// });

// router.post("/", async (req, res) => {
// 	const {
// 		firstname,
// 		secondname,
// 		email,
// 		language_speak,
// 		language_interest,
// 		city,
// 		country,
// 	} = req.body;
// 	const newLearner = await postLearners(
// 		firstname,
// 		secondname,
// 		email,
// 		language_speak,
// 		language_interest,
// 		city,
// 		country
// 	);
// 	res.json({
// 		success: true,
// 		message: `Added learner ${first_name} ${last_name}`,
// 		payload: newLearner,
// 	});
// });

// export default router;

const router = require("express").Router();
const authorize = require("./middleware/authorize");
import db from "./db.js";

router.get("/", authorize, async (req, res) => {
	try {
		const user = await db.query(
			"SELECT User_id, User_firstname, User_secondname, User_email, User_language_speak, User_language_interest, User_city, user_country FROM user_profiles WHERE user_id = $1 ",
			[req.user]
		);

		res.json(user.rows[0]);
		// res.json(req.user);
	} catch (err) {
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
		res.status(500).send("Server error");
	}
});
//💫

router.post("/create_events", async (req, res) => {
	const { Languages, Location, Link, Title, Description, Datetime } = req.body;

	try {
		const result = await db.query(
			"INSERT INTO create_events (Languages, Location, Link, Title, Description, Datetime) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
			[Languages, Location, Link, Title, Description, Datetime]
		);

		res.status(201).json(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: "Server error" });
	}
});

router.get("/events", async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM create_events");
		res.status(200).json(result.rows);
	} catch (error) {
		res.status(500).json({ error: "Server error" });
	}
});

router.post("/send-message", authorize, async (req, res) => {
	try {
		const { recipientEmail, message, senderEmail } = req.body;
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
			"INSERT INTO messages (sender_id, sender_email, recipient_id, recipient_email, message) VALUES ($1, $2, $3, $4, $5) RETURNING *",
			[
				senderId,
				senderEmail,
				recipient.rows[0].user_id,
				recipientEmail,
				message,
			]
		);
		if (!newMessage.rows[0]) {
			return res
				.status(500)
				.json({ message: "Failed to insert message into database" });
		}

		res.json(newMessage.rows[0]);
	} catch (err) {
		res.status(500).send("Server error");
	}
});

router.get("/messages", authorize, async (req, res) => {
	try {
		const userId = req.user;
		const messages = await db.query(
			"SELECT * FROM messages WHERE sender_id = $1 OR recipient_id = $1 ORDER BY created_at DESC",
			[userId]
		);
		//sender_id = $1 OR
		res.json(messages.rows);
	} catch (err) {
		res.status(500).send("Server error");
	}
});

module.exports = router;
