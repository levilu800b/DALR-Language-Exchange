const router = require("express").Router();
const authorize = require("../middleware/authorize");
import db from "../db.js";

router.get("/", authorize, async (req, res) => {
	try {
		const user = await db.query(
			"SELECT user_firstname, user_secondname, user_email, user_language_speak, user_language_interest, user_city, user_country FROM user_profiles WHERE user_id = $1 ",
			[req.user]
		);

		res.json(user.rows[0]);
	} catch (err) {
		res.status(500).send("Server error");
	}
});

router.get("/all", authorize, async (req, res) => {
	try {
		const user = await db.query(
			"SELECT user_firstname, user_secondname, user_email, user_language_speak, user_language_interest, user_city, user_country FROM user_profiles"
		);

		res.json(user.rows);
	} catch (err) {
		res.status(500).send("Server error");
	}
});

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

	try {
		const updateUserQuery = `
		UPDATE user_profiles
		SET user_firstname=$1, user_secondname=$2, user_email=$3,
			user_language_speak=$4, user_language_interest=$5,
			user_city=$6, user_country=$7
		WHERE user_id=$8
		RETURNING *;
	  `;
		db.query(updateUserQuery, [
			user_firstname,
			user_secondname,
			user_email,
			user_language_speak,
			user_language_interest,
			user_city,
			user_country,
			userId,
		]);
		res.status(200).json({
			success: true,
			message: `User with ID ${userId} was updated.`,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: `Could not update user with ID ${userId}.`,
		});
	}
});
module.exports = router;
