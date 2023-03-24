const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
import db from "../db.js";
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils-copy/jwtGenerator");
const authorize = require("../middleware/authorize");

router.post("/register", validInfo, async (req, res) => {
	try {
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
		const user = await db.query(
			"SELECT * FROM user_profiles WHERE user_email = $1",
			[email]
		);

		if (user.rows.length > 0) {
			return res.status(401).json("User already exist!");
		}

		const salt = await bcrypt.genSalt(10);
		const bcryptPassword = await bcrypt.hash(password, salt);

		let newUser = await db.query(
			"INSERT INTO user_profiles ( user_firstname, user_secondname, user_email, user_password, user_language_speak, user_language_interest, user_city, user_country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
			[
				firstname,
				secondname,
				email,
				bcryptPassword,
				language_speak,
				language_interest,
				city,
				country,
			]
		);

		const jwtToken = jwtGenerator(newUser.rows[0].user_id);

		res.json({ jwtToken });
	} catch (err) {
		res.status(500).send("Server error");
	}
});

router.post("/login", validInfo, async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await db.query(
			"SELECT * FROM user_profiles WHERE user_email = $1",
			[email]
		);

		if (user.rows.length === 0) {
			return res.status(401).json("password or email is incorrect");
		}

		const validPassword = await bcrypt.compare(
			password,
			user.rows[0].user_password
		);
		if (!validPassword) {
			return res.status(401).json("Invalid Credential");
		}
		const jwtToken = jwtGenerator(user.rows[0].user_id);
		return res.json({ jwtToken });
	} catch (err) {
		res.status(500).send("Server error");
		console.log(err.message);
	}
});

router.get("/verify", authorize, (req, res) => {
	try {
		res.json(true);
	} catch (err) {
		res.status(500).send("Server error");
	}
});

module.exports = router;
