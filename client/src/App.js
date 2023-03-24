import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./pages/Home";
import Login from "./components/Sign-In/SignIn";
import Register from "./components/Sign-Up/SignUp";
import Head from "./components/Dashboard/Dashboard";
import Manage_profile from "./components/manage-profile/Manage_profile";
import NavBar from "./components/HomePage/NavBar/NavBar";
import CreateEvents from "./components/CreateEvents/CreateEvents";
import Massage from "./components/massages/Massage";
import Friends from "./components/massages/Users/Friends";

toast.configure();

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const checkAuthenticated = async () => {
		try {
			const res = await fetch("/api/verify", {
				method: "GET",
				headers: { token: localStorage.token },
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
		<div>
			<NavBar isAuthenticated={isAuthenticated} setAuth={setAuth} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/events" element={<CreateEvents />} />
				<Route path="/manageProfile" element={<Manage_profile />} />
				<Route path="/massages" element={<Massage />} />
				<Route path="/friends" element={<Friends />} />

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
							<Navigate to="/signin" replace />
						)
					}
				/>
				<Route
					path="/dashboard"
					element={
						isAuthenticated ? (
							<Head setAuth={setAuth} />
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
