import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../../components/SideBar/SideBar";
import Profile from "../../components/profile/Profile";
import UserLists from "../../components/ListUsers/ListUsers";
import SearchCity from "../../components/SearchCity/SearchCity";
import SearchLanguage from "../../components/SearchLanguage/SearchLanguage";
import SearchCountry from "../../components/SearchCountry/SearchCountry";
import CreateEvents from "../../components/CreateEvents/CreateEvents";
import EventLists from "../../components/EventLists/EventLists";
import Manage_profile from "../../components/manage-profile/Manage_profile";
import Logout from "../../components/Logout/Logout";
import Massages from "../../components/massages/Massage";
import Friends from "../../components/massages/Users/Friends";

const { Content } = Layout;

function Head({ setAuth }) {
	const [selectedMenu, setSelectedMenu] = useState("");

	const handleMenuClick = (key) => {
		setSelectedMenu(key);
	};

	const renderContent = () => {
		switch (selectedMenu) {
			case "profile":
				return <Profile setAuth={setAuth} />;
			case "user-lists":
				return <UserLists />;
			case "search-city":
				return <SearchCity />;
			case "search-language":
				return <SearchLanguage />;
			case "search-country":
				return <SearchCountry />;
			case "create-events":
				return <CreateEvents />;
			case "event-lists":
				return <EventLists />;
				case "logout":
				return <Logout setAuth={setAuth} />;
			case "massages":
				return <Massages />;
			case "friends":
				return <Friends />;
			default:
				return <Manage_profile />;
		}
	};

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sidebar onMenuClick={handleMenuClick} />
			<Layout className="site-layout ">
				<Content  className="main_content">{renderContent()}</Content>
			</Layout>
		</Layout>
	);
}

export default Head;
