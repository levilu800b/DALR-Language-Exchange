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

//🍉🍉🍉🍉🍉🍉🍉🍉
import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { TextArea, SendButton } from "./Users/textErea/TextErea";
import Friends from "./Users/Friends";
import Exam from "./Users/Exam";
import imfg from "../../assets/bg1.jpg";
import "./massage.css";
import "./navbar.css";

const { Header, Footer, Content } = Layout;

export default function Massage({ data, selectedUser }) {
	const [text, setText] = useState("");

	const handleChange = (event) => {
		setText(event.target.value);
	};
	const handleClick = () => {
		// Send the message to the server or do something else
		console.log(`Sending message: ${text}`);
	};
	const [showExam, setShowExam] = useState(false);
	const { userId } = useParams();
	const user = data.find((u) => u.user_id === parseInt(userId));

	const navigate = useNavigate();

	const handleFriendClick = () => {
		setShowExam(true);
		navigate("/friends");
	};

	const handleProfileClick = () => {
		setShowExam(true);
		navigate("/profile");
	};

	const handleMessageClick = () => {
		setShowExam(false);
		navigate("/message");
	};

	const handleCorrectionsClick = () => {
		setShowExam(false);
		navigate("/corrections");
	};

	return (
		<>
			<div>
				<h2 className="title">Exchange with {selectedUser.user_firstname}</h2>
			</div>
			<Layout>
				<Header className="headerMessage">
					<Menu mode="horizontal" theme="light">
						<Menu.Item className="menu-item-Message" key="friends">
							<Link to="#" className="a" onClick={handleFriendClick}>
								Friends
							</Link>
						</Menu.Item>
						<Menu.Item className="menu-item-Message" key="profile">
							<Link to="#" className="a" onClick={handleProfileClick}>
								Profile
							</Link>
						</Menu.Item>
						<Menu.Item className="menu-item-Message" key="message">
							<Link to="#" className="a" onClick={handleMessageClick}>
								Message
							</Link>
						</Menu.Item>
						<Menu.Item className="menu-item-Message" key="corrections">
							<Link to="#" className="a" onClick={handleCorrectionsClick}>
								Corrections
							</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content className="contentMessage">
					{showExam ? (
						<Friends />
					) : (
						<>
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
							<div style={{ marginLeft: "10%" }}>New message</div>
							<div className="ereaText">
								<h1>My Text Area</h1>
								<TextArea value={text} onChange={handleChange} />
							</div>
							<div style={{ marginLeft: "10%" }}>
								<SendButton onClick={handleClick} />
							</div>
						</>
					)}
				</Content>
				<Footer className="footerMessage">Footer</Footer>
			</Layout>
		</>
	);
}
