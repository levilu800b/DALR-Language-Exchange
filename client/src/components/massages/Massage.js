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
import imfg from "../../assets/bg1.jpg";
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
							<Link to="#" className="a">
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
					<section className="recipe_all">
						<div className="overall_ditail">
							<div className="img">
								<img src={imfg} alt="" width="150px" height="200px" />
							</div>

							<div className="text">
								<div>
									<p>
										<span>First name:</span>
									</p>
									<p>
										<span>Last name:</span>
									</p>
									<p>
										<span>City:</span>
									</p>
									<p>
										<span>Native country:</span>
									</p>
									<p>
										<span>Native language:</span>
									</p>
									<p>
										<span>Studied language:</span>
									</p>
								</div>
								<div>
									<p>{selectedUser.user_firstname}</p>
									<p>{selectedUser.user_secondname}</p>
									<p>{selectedUser.user_city}</p>
									<p>{selectedUser.user_country}</p>
									<p>{selectedUser.user_language_speak}</p>
									<p>{selectedUser.user_language_interest}</p>
								</div>
							</div>
						</div>
					</section>
					<div class="icon">
						<h3>Description</h3>
						<p>
							There's nobody to talk to in my village, so maybe with a bit of
							luck I'll meet some talkative people here. I'm into languages,
							travelling, and meaningful or meaningless conversations,
							preferably in English, but I'll gladly help with Polish. Also I'll
							gladly pick up some words in Italian, French and Arabic.
						</p>
					</div>
					<div class="icon">
						<h3>New message</h3>
						<textarea
							name="message"
							id="message"
							cols="30"
							rows="10"
						></textarea>
						<button>Send</button>
					</div>
				</Content>
				<Footer className="footerMessage">Footer</Footer>
			</Layout>
		</>
	);
}
