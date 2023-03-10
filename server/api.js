import { Router } from "express";
const { Pool } = require("pg");

import logger from "./utils/logger";

const router = Router();

const pool = new Pool({
	// create using the .env file
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
});

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/api", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/api/profiles", async (_, res) => {
	try {
		const client = await pool.connect();
		const result = await client.query("SELECT * FROM profiles");
		const results = { results: result ? result.rows : null };
		res.json(results);
		client.release();
	} catch (err) {
		logger.error(err);
		res.send("Error " + err);
	}
});


export default router;
