import express from "express";
import logger from "./utils/logger";
const router = express.Router();

import {
	getAllLearner,
	getLearnersByName,
	getLearnersByLastName,
	getLearnersByLanguage,
	postLearners,
} from "./models/users.js";

router.use(express.json());

router.get("/", async (req, res) => {
	const { firstname, secondname, language_speak } = req.query;

	if (firstname) {
		const searchResults = await getLearnersByName(firstname);
		res.json({
			success: true,
			message: `Searched First name for ${firstname}`,
			payload: searchResults,
		});
		return;
	}
	if (secondname) {
		const searchResults = await getLearnersByLastName(secondname);
		res.json({
			success: true,
			message: `Searched Last name for ${secondname}`,
			payload: searchResults,
		});
		return;
	}
	if (language_speak) {
		const searchResults = await getLearnersByLanguage(language_speak);
		res.json({
			success: true,
			message: `Searched Language for ${language_speak}`,
			payload: searchResults,
		});
		return;
	}

	const learners = await getAllLearner();
	logger.debug("Welcoming everyone...");
	res.json({ success: true, message: "all learner", payload: learners });
});

router.post("/", async (req, res) => {
	const {
		firstname,
		secondname,
		email,
		language_speak,
		language_interest,
		city,
		country,
	} = req.body;
	const newLearner = await postLearners(
		firstname,
		secondname,
		email,
		language_speak,
		language_interest,
		city,
		country
	);
	res.json({
		success: true,
		message: `Added learner ${first_name} ${last_name}`,
		payload: newLearner,
	});
});

export default router;
