import {
	LogoutOutlined,
	SettingOutlined,
	UsergroupAddOutlined,
	UserSwitchOutlined,
	OrderedListOutlined,
	SearchOutlined,
	DashboardOutlined,
	ProfileOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
// import Link from "antd/es/typography/Link";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const items = [
	getItem("Dashboard", "dashboard", <DashboardOutlined />, [
		getItem(<Link to="/profile">Profile</Link>, "profile", <ProfileOutlined />),
		getItem(<Link to="/logout">Logout</Link>, "logout", <LogoutOutlined />),
	]),
	getItem("Users management", "users", <UserSwitchOutlined />, [
		getItem(
			<Link to="/adduser/adduser">Add users</Link>,
			"post",
			<UsergroupAddOutlined />
		),
		getItem(
			<Link to="/users/listUsers">List of users</Link>,
			"list",
			<OrderedListOutlined />
		),
	]),
	getItem("Search for users", "search", <SearchOutlined />, [
		getItem(
			<Link to="/users/language">Search by language</Link>,
			"search",
			<SearchOutlined />
		),
		getItem(
			<Link to="/users/country">Search by country</Link>,
			"search",
			<SearchOutlined />
		),
		getItem(
			<Link to="/users/city">Search by city</Link>,
			"search",
			<SearchOutlined />
		),
	]),
	getItem("Settings", "setting", <SettingOutlined />, [getItem("Option", "9")]),
];

const rootSubmenuKeys = ["dashboard", "users", "search", "setting"];

export default function Sidebar() {
	const [openKeys, setOpenKeys] = useState(["search", "users", "dashboard"]);
	const onOpenChange = (keys) => {
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};
	return (
		<div>
			<Sider>
				<Menu
					mode="inline"
					openKeys={openKeys}
					onOpenChange={onOpenChange}
					style={{
						width: 256,
					}}
					items={items}
				/>
			</Sider>
		</div>
	);
}
