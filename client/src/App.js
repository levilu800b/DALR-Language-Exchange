import { Route, Routes } from "react-router-dom";
import CreateYourProfilePage from "./components/CreateProfile/CreateYourProfilePage";
// import About from "./pages/About";
import Home from "./pages/Home";
import SignInPage from "./components/Sign-In/SignIn";
import SignUpPage from "./components/Sign-Up/SignUp";
import Sidebar from "./components/SideBar/SideBar";
import Profile from "./components/profile/Profile";

const App = () => (
	<div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/createprofile" element={<CreateYourProfilePage />} />
			<Route path="/signin" element={<SignInPage />} />
			<Route path="/signup" element={<SignUpPage />} />
			<Route path="/sidebar" element={<Sidebar />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	</div>
);

export default App;
