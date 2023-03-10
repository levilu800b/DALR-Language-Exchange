import db from "../../../db.js";
const sqlString = `CREATE TABLE IF NOT EXISTS learners (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  languages_speak TEXT[],
  languages_interested TEXT[]
)`;

async function createBooksTable() {
	const res = await db.query(sqlString);
	console.log("created table", res);
}

createBooksTable();

// CREATE DATABASE mydatabase;

// \c mydatabase

//push your branch to github=> git push origin your-branch-name
