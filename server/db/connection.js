import pg from "pg";
import { db } from "../config.js";
// console.log(process.env.TEST_DB);

//localhost credentials
const pool = new pg.Pool({
	user: db.databaseUser,
	host: db.databaseHost,
	database: db.database,
	password: db.userPassword,
	port: db.port,

	// ssl: {rejectUnauthorized: false},
});

export default function query(text, params) {
	return pool.query(text, params);
}
