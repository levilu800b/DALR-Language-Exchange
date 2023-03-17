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
	const { first_name, last_name, language_speak } = req.query;

	if (first_name) {
		const searchResults = await getLearnersByName(first_name);
		res.json({
			success: true,
			message: `Searched First name for ${first_name}`,
			payload: searchResults,
		});
		return;
	}
	if (last_name) {
		const searchResults = await getLearnersByLastName(last_name);
		res.json({
			success: true,
			message: `Searched Last name for ${last_name}`,
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
		first_name,
		last_name,
		email,
		language_speak,
		language_interest,
		city,
		country,
	} = req.body;
	const newLearner = await postLearners(
		first_name,
		last_name,
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
