import { Route, Routes, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CreateYourProfilePage from "./components/CreateProfile/CreateYourProfilePage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./pages/Home";
import SignInPage from "./components/Sign-In/SignIn";
import SignUpPage from "./components/Sign-Up/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/HomePage/NavBar/NavBar";

const App = () => (
	<div>
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/createprofile" element={<CreateYourProfilePage />} />
			<Route path="/signup" element={<SignUpPage />} />
			<Route path="/signin" element={<SignInPage />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	</div>
);

export default App;
