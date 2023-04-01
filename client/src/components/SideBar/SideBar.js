import React , { useState } from "react";
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
	UsergroupAddOutlined,
} from "@ant-design/icons";
import "./SideBar.css";
const { Sider } = Layout;

const items = [
	{
		key: "dashboard",
		icon: <DashboardOutlined />,
		label: "Dashboard",
		children: [
			{ key: "profile", icon: <ProfileOutlined />, label: "Profile" },
			{
				key: "message",
				icon: <UsergroupAddOutlined />,
				label: "Message",
			},
		],
	},

	{
		key: "users",
		icon: <UserSwitchOutlined />,
		label: "Users",
		children: [
			{
				key: "user-lists",
				icon: <OrderedListOutlined />,
				label: "List of Users",
			},
		],
	},

	{
		key: "events",
		icon: <CalendarOutlined />,
		label: "Events",
		children: [
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
		const [collapsed, setCollapsed] = useState(false);

	return (
<Sider className="sider" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
{/* <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        /> */}
	<Menu mode="inline"  theme="dark"  className="menu_cont">
				{renderMenuItems(items)}
			</Menu>
		</Sider>
	);
};

export default Sidebar;
//how to push branch to github=>git push -u origin master
