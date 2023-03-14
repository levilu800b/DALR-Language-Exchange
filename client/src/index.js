// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import App from "./App";

// createRoot(document.getElementById("root")).render(
// 	<BrowserRouter>
// 		<App />
// 	</BrowserRouter>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<ConfigProvider direction="ltr">
		<Router>
			<App />
		</Router>
	</ConfigProvider>
	// </React.StrictMode>
);
