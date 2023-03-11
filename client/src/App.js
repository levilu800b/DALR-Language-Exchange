import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CreateYourProfilePage from "./components/CreateProfile/CreateYourProfilePage";
import NavBar from "./components/HomePage/NavBar/NavBar";
import Dashboard from "./pages/dashboard";
const App = () => (<>
<NavBar />
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/CreateYourProfile" element={<CreateYourProfilePage />} />
		<Route path="/Dashboard" element={<Dashboard />} />
	</Routes>
	</>
);

export default App;