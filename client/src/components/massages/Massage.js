//🍉
import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { useParams } from "react-router-dom";
import Friends from "./Users/Friends";
import Exam from "./Users/Exam";
import Profile from "./Users/Profile";

import imfg from "../../assets/bg1.jpg";
import "./massage.css";
import "./navbar.css";

const { Header, Footer, Content } = Layout;

export default function Massage({ data, selectedUser }) {
	const { userId } = useParams();
	const user = data.find((u) => u.user_id === parseInt(userId));

	const [activeNavItem, setActiveNavItem] = useState("Profile");

	const navigationItems = [
		{
			name: "Friends",
			path: "/friends",
			component: <Friends data={data} selectedUser={selectedUser} />,
		},
		{
			name: "Profile",
			path: "/profile",
			component: <Profile data={data} selectedUser={selectedUser} />,
		},
		{
			name: "Message",
			path: "/message",
			component: (
				<div>
					<Exam />
				</div>
			),
		},
		{
			name: "Corrections",
			path: "/corrections",
			component: <div>Corrections Component</div>,
		},
	];

	const handleNavItemClick = (item) => {
		setActiveNavItem(item.name);
	};

	return (
		<>
			<div>
				<h2 className="title">Exchange with {selectedUser.user_firstname}</h2>
			</div>
			<Layout>
				<Header className="headerMessage">
					<Menu mode="horizontal" selectedKeys={[activeNavItem]}>
						{navigationItems.map((item) => (
							<Menu.Item
								key={item.name}
								onClick={() => handleNavItemClick(item)}
							>
								{item.name}
							</Menu.Item>
						))}
					</Menu>
				</Header>
				<Content className="contentMessage">
					{
						navigationItems.find((item) => item.name === activeNavItem)
							?.component
					}
				</Content>
				<Footer className="footerMessage">
					<p>©2023 All Rights Reserved | Language.Exchange Language Exchange</p>
					<p>
						Websites | Contact us | Privacy & Cookies | Terms of Use | Thanks |
						Pen Pal
					</p>
				</Footer>
			</Layout>
		</>
	);
}
