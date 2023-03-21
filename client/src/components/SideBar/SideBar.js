import React from "react";
import { Menu, Layout } from "antd";
import {
	LogoutOutlined,
	SettingOutlined,
	CalendarOutlined,
	UserSwitchOutlined,
	OrderedListOutlined,
	SearchOutlined,
	DashboardOutlined,
	ProfileOutlined,
	EditOutlined,
	ContainerOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const items = [
	{ key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
	{ key: "profile", icon: <ProfileOutlined />, label: "Profile" },
	{ key: "edit-profile", icon: <EditOutlined />, label: "Edit Profile" },
	{
		key: "dashboard2",
		icon: <DashboardOutlined />,
		label: "Dashboard",
		children: [
			{ key: "profile", icon: <ProfileOutlined />, label: "Profile" },
			{
				key: "manageProfile",
				icon: <UsergroupAddOutlined />,
				label: "manage profile",
			},
		],
	},

	{
		key: "user",
		icon: <UserSwitchOutlined />,
		label: "User management",
		children: [
			{
				key: "user-lists",
				icon: <OrderedListOutlined />,
				label: "List of Users",
			},
			{
				key: "create-events",
				icon: <CalendarOutlined />,
				label: "Create Events",
			},
			{
				key: "event-lists",
				icon: <OrderedListOutlined />,
				label: "List of Events",
			},
		],
	},
	{
		key: "search",
		icon: <SearchOutlined />,
		label: "Search for users",
		children: [
			{
				key: "search-language",
				icon: <SearchOutlined />,
				label: "Search by language",
			},
			{
				key: "search-country",
				icon: <SearchOutlined />,
				label: "Search by country",
			},
			{ key: "search-city", icon: <SearchOutlined />, label: "Search by city" },
		],
	},
	{
		key: "setting",
		icon: <SettingOutlined />,
		label: "Settings",
		children: [{ key: "option", label: "Option" }],
	},
	{ key: "logout", icon: <LogoutOutlined />, label: "Logout" },
];

const Sidebar = ({ onMenuClick }) => {
	const renderMenuItems = (menuItems) =>
		menuItems.map((menuItem) =>
			menuItem.children ? (
				<Menu.SubMenu
					key={menuItem.key}
					icon={menuItem.icon}
					title={menuItem.label}
				>
					{renderMenuItems(menuItem.children)}
				</Menu.SubMenu>
			) : (
				<Menu.Item
					key={menuItem.key}
					icon={menuItem.icon}
					onClick={() => onMenuClick(menuItem.key)}
				>
					{menuItem.label}
				</Menu.Item>
			)
		);

	return (
		<Sider>
			<Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
				{renderMenuItems(items)}
			</Menu>
		</Sider>
	);
};

export default Sidebar;
//how to push branch to github=>git push -u origin master
