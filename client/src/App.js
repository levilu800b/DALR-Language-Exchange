import { Route, Routes } from "react-router-dom";
import CreateYourProfilePage from "./components/CreateProfile/CreateYourProfilePage";

// import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
	<div>

	<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/createprofile" element={<CreateYourProfilePage />} />
	</Routes>
	</div>
);

export default App;
