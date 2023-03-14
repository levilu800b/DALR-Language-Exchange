import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../../components/SideBar/SideBar";
import Profile from "../../components/Profile/Profile";
import AddUsers from "../../components/AddUser/AddUser";
import UserList from "../../components/ListUsers/ListUsers";
import SearchCity from "../../components/SearchCity/SearchCity";
import SearchLanguage from "../../components/SearchLanguage/SearchLanguage";
import SearchCountry from "../../components/SearchCountry/SearchCountry";

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
			case "add-users":
				return <AddUsers />;
			case "user-list":
				return <UserList />;
			case "search-city":
				return <SearchCity />;
			case "search-language":
				return <SearchLanguage />;
			case "search-country":
				return <SearchCountry />;
			default:
				return <Profile />;
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
