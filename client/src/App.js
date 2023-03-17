import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
	BrowserRouter as Router,
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
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/HomePage/NavBar/NavBar";

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
