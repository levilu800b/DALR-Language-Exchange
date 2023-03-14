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
		getItem("Profile", "profile", <ProfileOutlined />),
		getItem("Logout", "logout", <LogoutOutlined />),
	]),
	getItem("Users management", "users", <UserSwitchOutlined />, [
		getItem("Add users", "post", <UsergroupAddOutlined />),
		getItem("List of users", "list", <OrderedListOutlined />),
	]),
	getItem("Search for users", "search", <SearchOutlined />, [
		getItem("Search by language", "search", <SearchOutlined />),
		getItem("Search by country", "search", <SearchOutlined />),
		getItem("Search by city", "search", <SearchOutlined />),
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
