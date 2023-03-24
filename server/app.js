import express from "express";

import apiRouter from "./api";
import jwtAuth from "./routerAuth/jwtAuth";
import dashboard from "./routerAuth/dashboard";
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const apiRoot = "/api";

const app = express();

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());

if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
app.use(apiRoot, jwtAuth);
app.use(apiRoot, dashboard);

app.use("/health", (_, res) => res.sendStatus(200));

// app.use(apiRoot + require("./routerAuth/jwtAuth"));
// app.use(apiRoot + "/dashboard", require("./routerAuth/dashboard"));

app.use(clientRouter(apiRoot));

app.use(logErrors());

export default app;
