import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../../components/SideBar/SideBar";
import Profile from "../../components/Profile/Profile";
import EditProfile from "../../components/EditProfile/EditProfile";
import UserLists from "../../components/ListUsers/ListUsers";
import SearchCity from "../../components/SearchCity/SearchCity";
import SearchLanguage from "../../components/SearchLanguage/SearchLanguage";
import SearchCountry from "../../components/SearchCountry/SearchCountry";
import CreateEvents from "../../components/CreateEvents/CreateEvents";
import EventLists from "../../components/EventLists/EventLists";
import Logout from "../../components/Logout/Logout";

const { Content } = Layout;

function Dashboard({ setAuth }) {
	const [selectedMenu, setSelectedMenu] = useState("profile");

	const handleMenuClick = (key) => {
		setSelectedMenu(key);
	};

	const renderContent = () => {
		switch (selectedMenu) {
			case "profile":
				return <Profile setAuth={setAuth} />;
			case "edit-profile":
				return <EditProfile />;
			case "user-lists":
				return <UserLists />;
			case "create-events":
				return <CreateEvents />;
			case "event-lists":
				return <EventLists />;
			case "search-city":
				return <SearchCity />;
			case "search-language":
				return <SearchLanguage />;
			case "search-country":
				return <SearchCountry />;
			case "logout":
				return <Logout setAuth={setAuth} />;
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
