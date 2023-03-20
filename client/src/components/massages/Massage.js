// import React from "react";
// import { Menu } from "antd";

// import "./massage.css";

// export default function Massage({ data, selectedUser }) {
// 	console.log("selectedUser", selectedUser);
// 	const user = data.find((u) => u.user_id === selectedUser.user_id);

// 	return (
// 		<>
// 			<div>
// 				<h2 className="title">Exchange with {selectedUser.user_firstname} </h2>
// 			</div>

// 			<Menu mode={"horizontal"} theme={"light"}>
// 				<Menu.Item key={"home"} style={{ width: "10%" }}>
// 					Friends
// 				</Menu.Item>
// 				<Menu.Item key={"message"} style={{ width: "10%" }}>
// 					Profile
// 				</Menu.Item>
// 				<Menu.Item key={"post"} style={{ width: "10%" }}>
// 					Message
// 				</Menu.Item>
// 				<Menu.Item key={"homepage"} style={{ width: "10%" }}>
// 					Corrections
// 				</Menu.Item>
// 			</Menu>
// 		</>
// 	);
// }
//🌧
import React from "react";
import { Menu } from "antd";
import { Layout } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import Friends from "./Users/Friends";

const { Header, Footer, Content } = Layout;

import "./massage.css";
import "./navbar.css";

export default function Massage({ data, selectedUser }) {
	console.log("selectedUser", selectedUser);
	const user = data.find((u) => u.user_id === selectedUser.user_id);

	return (
		<>
			<div>
				<h2 className="title">Exchange with {selectedUser.user_firstname} </h2>
			</div>
			<Layout>
				<Header className="headerMessage" style={{ backgroundColor: "#fff" }}>
					<Menu mode={"horizontal"} theme={"light"}>
						<Menu.Item
							className="menu-item-Message"
							key={"friends"}
							style={{ width: "25%" }}
						>
							<Link to="/friends" className="a">
								Friends
							</Link>
						</Menu.Item>
						<Menu.Item
							className="menu-item-Message"
							key={"profile"}
							style={{ width: "25%" }}
						>
							<Link to="#" className="a">
								Profile
							</Link>
						</Menu.Item>
						<Menu.Item
							className="menu-item-Message"
							key={"message"}
							style={{ width: "25%" }}
						>
							<Link to="#" className="a">
								Message
							</Link>
						</Menu.Item>
						<Menu.Item
							className="menu-item-Message"
							key={"corrections"}
							style={{ width: "25%" }}
						>
							<Link to="#" className="a">
								Corrections
							</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content className="contentMessage">
					{/* <Routes>
						<Route path="/friends" element={<Friends />} />
					</Routes> */}
					<Friends />
				</Content>
				<Footer className="footerMessage">Footer</Footer>
			</Layout>
		</>
	);
}
