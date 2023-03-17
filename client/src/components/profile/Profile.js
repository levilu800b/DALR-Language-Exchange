// // all posebilty for text color=> text-primary, text-secondary, text-success, text-danger, text-warning, text-info, text-light, text-dark, text-body, text-muted, text-white, text-black-50, text-white-50, text-reset
// // make a card for profile with image and name by bootstrap=> https://getbootstrap.com/docs/4.0/components/card/
// // when hover on button change the color with botsrap=> https://getbootstrap.com/docs/4.0/utilities/colors/
// // make a margin for buttom with bootstrap=> https://getbootstrap.com/docs/4.0/utilities/spacing/
//🌧
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import profile from "../../assets/bg1.jpg";

import "./ProfileStyle.css";

import { Link } from "react-router-dom";
import { Descriptions } from "antd";
const Profile = ({ setAuth }) => {
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

	const logout = async (e) => {
		e.preventDefault();
		try {
			localStorage.removeItem("token");
			setAuth(false);
			toast.success("Logout successfully");
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);
	console.log(data);
	return (
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
					<Descriptions.Item label="city"> {data.user_city} </Descriptions.Item>
					<Descriptions.Item label="Country">
						{data.user_country}{" "}
					</Descriptions.Item>
				</Descriptions>
			</main>
			<button
				onClick={(e) => logout(e)}
				className="mt-5 btn btn-primary text-buttom bg-info"
			>
				Logout
			</button>
		</div>
	);
};

export default Profile;
