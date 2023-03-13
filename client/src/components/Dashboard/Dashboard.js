import React, { useState, useEffect } from "react";
// import "antd/dist/reset.css";
// import "../assets/css/general.css";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import ContactForm from "../components/users/AddUsers";
import UserList from "../components/users/ListUsers";

const { Content } = Layout;

function Dashboard() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("/api")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	const AddUser = (video, id) => {
		video.id = id;
		setUsers([...users, video]);
	};

	return (
		<Layout>
			<Layout>
				<Sidebar />
				<Content className="content">
					<Routes>
						{/* <Route path="/login" element={<DashboardLogin />} />
						<Route path="/signup" element={<DashboardSignup />} /> */}
						<Route
							path="/adduser/addUser"
							element={<ContactForm AddUsers={AddUser} />}
						/>

						<Route
							path="/users/listUsers"
							element={<UserList users={users} />}
						/>
					</Routes>
				</Content>
			</Layout>
		</Layout>
	);
}

export default Dashboard;
