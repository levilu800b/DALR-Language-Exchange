import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../../components/SideBar/SideBar";
import Profile from "../../components/Profile/Profile";
import AddUsers from "../../components/AddUser/AddUser";
import UserList from "../../components/ListUsers/ListUsers";

const { Content } = Layout;

function Dashboard() {
	const [selectedMenu, setSelectedMenu] = useState("profile");

	const handleMenuClick = (key) => {
		setSelectedMenu(key);
	};

	const renderContent = () => {
		switch (selectedMenu) {
			case "profile":
				return <Profile />;
			case "post":
				return <AddUsers />;
			case "list":
				return <UserList />;
			default:
				return null;
		}
	};

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sidebar onMenuClick={handleMenuClick} />
			<Layout className="site-layout">
				<Content style={{ margin: "0 16px" }}>{renderContent()}</Content>
			</Layout>
		</Layout>
	);
}

export default Dashboard;
