// import React, { useEffect, useState } from "react";
// import profile from "../../assets/bg2.jpg";
// import EditProfile from "./EditProfile";

// import "./ProfileStyle.css";

// import { Link } from "react-router-dom";
// import { Descriptions } from "antd";

// const Profile = () => {
// 	const [data, setData] = useState("");

// 	const getProfile = async () => {
// 		try {
// 			const res = await fetch("api/dashboard/", {
// 				method: "GET",
// 				headers: { token: localStorage.token },
// 			});

// 			const parseData = await res.json();
// 			setData(parseData);
// 		} catch (err) {
// 			console.error(err.message);
// 		}
// 	};

// 	useEffect(() => {
// 		getProfile();
// 	}, []);

// 	return (
// 		<>
// 			<div className="profile-content">
// 				<header className="profile-header">
// 					<img src={profile} alt="Profile picture" aria-hidden />
// 					<br />
// 					<div className="profile-info">
// 						<h2>
// 							{data.user_firstname} {data.user_secondname}
// 						</h2>
// 						<Descriptions bordered>
// 							<Descriptions.Item label="Email">{data.user_email}</Descriptions.Item>
// 							<Descriptions.Item label="City">{data.user_city}</Descriptions.Item>
// 							<Descriptions.Item label="Country">{data.user_country}</Descriptions.Item>
// 							<Descriptions.Item label="Language You Speak">{data.user_language_speak}</Descriptions.Item>
// 							<Descriptions.Item label="Language You're Interested In">{data.user_language_interest}</Descriptions.Item>
// 						</Descriptions>
// 						<br />
// 						<Link to="/change-password" className="profile-link">
// 							Change Password
// 						</Link>
// 					</div>
// 				</header>

// 				<EditProfile user={data} setUser={setData} />
// 			</div>
// 		</>
// 	);
// };

// export default Profile;
//🌧🍉✅
import React, { useEffect, useState } from "react";
import profile from "../../assets/bg2.jpg";
import EditProfile from "./EditProfile";
import "./ProfileStyle.css";

import { Link } from "react-router-dom";
import { Descriptions, Button, Modal } from "antd";

const Profile = () => {
	const [data, setData] = useState("");
	const [isModalVisible, setIsModalVisible] = useState(false);

	const getProfile = async () => {
		try {
			const res = await fetch("api/dashboard/", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseData = await res.json();
			setData(parseData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<div className="profile-content">
				<header className="profile-header">
					<img src={profile} alt="Profile picture" aria-hidden />
					<br />
					<div className="profile-info">
						<h2>
							{data.user_firstname} {data.user_secondname}
						</h2>
						<Descriptions bordered>
							<Descriptions.Item label="Email">
								{data.user_email}
							</Descriptions.Item>
							<Descriptions.Item label="City">
								{data.user_city}
							</Descriptions.Item>
							<Descriptions.Item label="Country">
								{data.user_country}
							</Descriptions.Item>
							<Descriptions.Item label="Language You Speak">
								{data.user_language_speak}
							</Descriptions.Item>
							<Descriptions.Item label="Language You're Interested In">
								{data.user_language_interest}
							</Descriptions.Item>
						</Descriptions>
						<br />
						<Button type="primary" onClick={() => setIsModalVisible(true)}>
							Edit Profile
						</Button>
					</div>
				</header>

				<Modal
					title="Edit Profile"
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={null}
				>
					<EditProfile user={data} setUser={setData} handleOk={handleOk} />
				</Modal>
			</div>
		</>
	);
};

export default Profile;
