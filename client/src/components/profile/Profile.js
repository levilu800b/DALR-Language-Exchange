// import React, { useEffect, useState } from "react";
// import profile from "../../assets/bg2.jpg";

// import "./ProfileStyle.css";
// import Manage_profile from "../manage-profile/Manage_profile";

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
// 	console.log(data);

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
// 						<br />
// 						<h3>
// 							{data.user_city}, {data.user_country}
// 						</h3>
// 						<br />
// 						<div className="bt-profile">
// 							<Link to="/" className="btn-light">
// 								Follow
// 							</Link>
// 							<Link to="/" className="btn-light">
// 								Chat
// 							</Link>
// 						</div>
// 					</div>
// 				</header>
// 				<main className="main-profile">
// 					<Descriptions title="User Info">
// 						<Descriptions.Item label="UserName">
// 							{data.user_firstname} {data.user_secondname}
// 						</Descriptions.Item>
// 						<Descriptions.Item label="Email">
// 							<a href="#email" style={{ color: "black" }}>
// 								{data.user_email}
// 							</a>
// 						</Descriptions.Item>
// 						<Descriptions.Item label="Language Speak">
// 							{data.user_language_speak}
// 						</Descriptions.Item>
// 						<Descriptions.Item label="Language Interest">
// 							{data.user_language_interest}
// 						</Descriptions.Item>
// 						<Descriptions.Item label="city">
// 							{" "}
// 							{data.user_city}{" "}
// 						</Descriptions.Item>
// 						<Descriptions.Item label="Country">
// 							{data.user_country}{" "}
// 						</Descriptions.Item>
// 					</Descriptions>
// 				</main>
// 			</div>
// 			<Manage_profile data={data} />
// 		</>
// 	);
// };
// export default Profile;

//🌧
import React, { useEffect, useState } from "react";
import profile from "../../assets/bg2.jpg";

import "./ProfileStyle.css";
import Manage_profile from "../manage-profile/Manage_profile";

import { Link } from "react-router-dom";
import { Descriptions } from "antd";

const Profile = () => {
	const [data, setData] = useState("");

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
						<br />
						<h3>
							{data.user_city}, {data.user_country}
						</h3>
						<br />
						<div className="bt-profile">
							<Link to="/" className="btn-light">
								Follow
							</Link>
							<Link to="/" className="btn-light">
								Chat
							</Link>
						</div>
					</div>
				</header>
				<main className="main-profile">
					<Descriptions title="User Info">
						<Descriptions.Item label="UserName">
							{data.user_firstname} {data.user_secondname}
						</Descriptions.Item>
						<Descriptions.Item label="Email">
							<a href="#email" style={{ color: "black" }}>
								{data.user_email}
							</a>
						</Descriptions.Item>
						<Descriptions.Item label="Language Speak">
							{data.user_language_speak}
						</Descriptions.Item>
						<Descriptions.Item label="Language Interest">
							{data.user_language_interest}
						</Descriptions.Item>
						<Descriptions.Item label="city">
							{" "}
							{data.user_city}{" "}
						</Descriptions.Item>
						<Descriptions.Item label="Country">
							{data.user_country}{" "}
						</Descriptions.Item>
					</Descriptions>
				</main>
			</div>
			{/* Pass parseData as a prop to Manage_profile component */}
		</>
	);
};

export default Profile;
