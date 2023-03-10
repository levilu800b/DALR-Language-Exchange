// import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";
// import Home from "./pages/Home";

// const App = () => (
// 	<Routes>
// 		<Route path="/" element={<Home />} />
// 		<Route path="/about/this/site" element={<About />} />
// 	</Routes>
// );

// export default App;
import React, { useState, useEffect } from "react";
import "antd/dist/reset.css";
// import "./assets/css/general.css";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Hedear from "./components/generic/Header";
import Footer from "./components/generic/Footer";
import Sidebar from "./components/generic/Sidebar";
import DashboardLogin from "./components/generic/DashboardLogin";
import DashboardSignup from "./components/generic/DashboardSignup";
import ContactForm from "./components/users/AddUsers";
import UserList from "./components/users/ListUsers";

const { Content } = Layout;

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	const AddUsers = (video, id) => {
		video.id = id;
		setUsers([...users, video]);
	};
	// console.log(users);
	return (
		<div className="App">
			<Layout>
				<Hedear />
				<Layout>
					<Sidebar />
					<Content className="content">
						<Routes>
							<Route path="/login" element={<DashboardLogin />} />
							<Route path="/signup" element={<DashboardSignup />} />
							<Route
								path="/users/addUsers"
								element={<ContactForm AddUsers={AddUsers} />}
							/>

							<Route
								path="/users/listUsers"
								element={<UserList users={users} />}
							/>
						</Routes>
					</Content>
				</Layout>
				<Footer />
			</Layout>
		</div>
	);
}

export default App;
