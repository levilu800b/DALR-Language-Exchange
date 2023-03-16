// import { Route, Routes, Redirect } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import React, { Fragment, useState, useEffect } from "react";

import { useState, useEffect, Fragment } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import CreateYourProfilePage from "./components/CreateProfile/CreateYourProfilePage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./pages/Home";
import Login from "./components/Sign-In/SignIn";
import Register from "./components/Sign-Up/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/HomePage/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

// const App = () => (
// 	<div>
// 		<NavBar />
// 		<Routes>
// 			<Route path="/" element={<Home />} />
// 			<Route path="/createprofile" element={<CreateYourProfilePage />} />
// 			<Route path="/signup" element={<SignUpPage />} />
// 			<Route path="/signin" element={<SignInPage />} />
// 			<Route path="/about" element={<About />} />
// 			<Route path="/contact" element={<Contact />} />
// 			<Route path="/dashboard" element={<Dashboard />} />
// 		</Routes>
// 	</div>
// );

//🌧

// import NavBar from "./NavBar";
// import Home from "./Home";
// import CreateYourProfilePage from "./CreateYourProfilePage";
// import About from "./About";
// import Contact from "./Contact";
// import Login from "./Login";
// import Register from "./Register";
// import Dashboard from "./Dashboard";

// function App() {
// 	const [isAuthenticated, setIsAuthenticated] = useState(false);

// 	const checkAuthenticated = async () => {
// 		try {
// 			const res = await fetch("/api/verify", {
// 				method: "POST",
// 				headers: { jwt_token: localStorage.token },
// 			});

// 			const parseRes = await res.json();

// 			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
// 		} catch (err) {
// 			console.error(err.message);
// 		}
// 	};

// 	useEffect(() => {
// 		checkAuthenticated();
// 	}, []);

// 	const setAuth = (boolean) => {
// 		setIsAuthenticated(boolean);
// 	};

// 	return (
// 		<Fragment>
// 			<NavBar isAuthenticated={isAuthenticated} setAuth={setAuth} />
// 			<Routes>
// 				<Route path="/" element={<Home />} />
// 				<Route path="/createprofile" element={<CreateYourProfilePage />} />
// 				<Route path="/about" element={<About />} />
// 				<Route path="/contact" element={<Contact />} />
// 				<Route path="/dashboard" element={<Dashboard />} />
// 				<Route
// 					path="/signin"
// 					element={
// 						!isAuthenticated ? (
// 							<Login setAuth={setAuth} />
// 						) : (
// 							<Navigate to="/dashboard" replace />
// 						)
// 					}
// 				/>
// 				<Route
// 					path="/signup"
// 					element={
// 						!isAuthenticated ? (
// 							<Register setAuth={setAuth} />
// 						) : (
// 							<Navigate to="/dashboard" replace />
// 						)
// 					}
// 				/>
// 				<Route
// 					path="/dashboard"
// 					element={
// 						isAuthenticated ? (
// 							<Dashboard setAuth={setAuth} />
// 						) : (
// 							<Navigate to="/signin" replace />
// 						)
// 					}
// 				/>
// 			</Routes>
// 		</Fragment>
// 	);
// }

// export default App;

//☁️
function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const checkAuthenticated = async () => {
		try {
			const res = await fetch("/api/verify", {
				method: "POST",
				headers: { jwt_token: localStorage.token },
			});

			const parseRes = await res.json();

			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		checkAuthenticated();
	}, []);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};

	return (
		<div className="container">
			<NavBar isAuthenticated={isAuthenticated} setAuth={setAuth} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/createprofile" element={<CreateYourProfilePage />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />

				<Route
					path="/signin"
					element={
						!isAuthenticated ? (
							<Login setAuth={setAuth} />
						) : (
							<Navigate to="/dashboard" replace />
						)
					}
				/>
				<Route
					path="/signup"
					element={
						!isAuthenticated ? (
							<Register setAuth={setAuth} />
						) : (
							<Navigate to="/dashboard" replace />
						)
					}
				/>
				<Route
					path="/dashboard"
					element={
						isAuthenticated ? (
							<Dashboard setAuth={setAuth} />
						) : (
							<Navigate to="/signin" replace />
						)
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
