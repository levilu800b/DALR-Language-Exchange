import db from "../../../db.js";
const sqlString = `CREATE TABLE IF NOT EXISTS learners (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  languages_speak TEXT[],
  languages_interested TEXT[]
)`;

async function createBooksTable() {
	await db.query(sqlString);
}

createBooksTable();
