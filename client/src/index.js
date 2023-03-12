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
// import { Provider as ReduxProvider } from "react-redux";
// import store from "./redux/store/index";

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
// root.render(
// 	// <React.StrictMode>
// 	<ConfigProvider direction="rtl">
// 		<ReduxProvider store={store}>
// 			<Router>
// 				<App />
// 			</Router>
// 		</ReduxProvider>
// 	</ConfigProvider>
// 	// </React.StrictMode>
// );
