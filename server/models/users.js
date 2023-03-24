import db from "../db.js";

export async function getAllLearner() {
	const data = await db.query("SELECT * FROM learners;");
	return data.rows;
}

export async function getLearnersByName(firstName) {
	const data = await db.query(
		"SELECT * FROM learners WHERE first_name ILIKE '%' || $1 || '%'",
		[firstName]
	);
	return data.rows;
}
export async function getLearnersByLastName(lastName) {
	const data = await db.query(
		"SELECT * FROM learners WHERE last_name ILIKE '%' || $1 || '%'",
		[lastName]
	);
	return data.rows;
}

export async function getLearnersByLanguage(language) {
	const data = await db.query(
		"SELECT * FROM learners WHERE $1 ILIKE ANY (languages_speak)",
		[language]
	);
	return data.rows;
}

export async function postLearners(
	first_name,
	last_name,
	languages_speak,
	languages_interested
) {
	const data = await db.query(
		`INSERT INTO learners (first_name, last_name, languages_speak, languages_interested)
    VALUES ($1, $2, $3, $4::text[])
    RETURNING *`,
		[
			first_name,
			last_name,
			Object.values(languages_speak),
			Object.values(languages_interested),
		]
	);
	return data.rows[0];
}

/**
 * {
    "first_name": "ppppp",
    "last_name": "kkkkk",
    "languages_speak": {"first": "arabic", "second": "japanes"},
     "languages_interested": {"first": "korean", "second": "aspanish"}
}
 */
