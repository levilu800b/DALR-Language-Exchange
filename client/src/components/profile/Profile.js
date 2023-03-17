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
				<button
					onClick={(e) => logout(e)}
					className="mt-5 btn btn-primary text-buttom bg-info"
				>
					Logout
				</button>
			</div>
		</>
	);
};

export default Profile;

//🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import { toast } from "react-toastify";
// import profile from "../../assets/bg1.jpg";

// import "./ProfileStyle.css";

// import { Link } from "react-router-dom";
// import { Descriptions } from "antd";
// const Profile = ({ setAuth }) => {
// 	const [editableStr, setEditableStr] = useState("This is an editable text.");
// 	const [editable, setEditable] = useState(false);

// 	const [data, setData] = useState("");

// 	const getProfile = async () => {
// 		try {
// 			const res = await fetch("api/dashboard/", {
// 				method: "GET",
// 				headers: { token: localStorage.token },
// 			});

// 			const parseData = await res.json();
// 			setData(parseData);
// 			setEditableStr(
// 				parseData.user_firstname + " " + parseData.user_secondname
// 			);
// 		} catch (err) {
// 			console.error(err.message);
// 		}
// 	};

// 	const logout = async (e) => {
// 		e.preventDefault();
// 		try {
// 			localStorage.removeItem("token");
// 			setAuth(false);
// 			toast.success("Logout successfully");
// 		} catch (err) {
// 			console.error(err.message);
// 		}
// 	};

// 	const handleSave = async () => {
// 		try {
// 			const res = await fetch("api/dashboard/", {
// 				method: "PUT",
// 				headers: {
// 					"Content-type": "application/json",
// 					token: localStorage.token,
// 				},
// 				body: JSON.stringify({
// 					user_firstname: data.user_firstname,
// 					user_secondname: data.user_secondname,
// 					user_email: data.user_email,
// 					user_language_speak: data.user_language_speak,
// 					user_language_interest: data.user_language_interest,
// 					user_city: data.user_city,
// 					user_country: data.user_country,
// 				}),
// 			});

// 			const parseRes = await res.json();
// 			setEditableStr(parseRes.user_firstname + " " + parseRes.user_secondname);
// 			setData(parseRes);
// 		} catch (err) {
// 			console.error(err.message);
// 		}
// 	};

// 	const handleEdit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const updatedProfile = {
// 				firstname: firstname,
// 				secondname: secondname,
// 				email: email,
// 				language_speak: language_speak,
// 				language_interest: language_interest,
// 				city: city,
// 				country: country,
// 			};

// 			await axios.put("api/dashboard/update", updatedProfile);

// 			setEditable(false);
// 			setEditableStr(`${firstname} ${secondname}`);
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
// 							<div
// 								contentEditable={true}
// 								suppressContentEditableWarning={true}
// 								onInput={(e) => setEditableStr(e.target.innerText)}
// 							>
// 								{editableStr}
// 							</div>
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
// 						<Descriptions.Item label="city">{data.user_city}</Descriptions.Item>
// 						<Descriptions.Item label="country">
// 							{data.user_country}
// 						</Descriptions.Item>
// 					</Descriptions>

// 					<div className="btn-group">
// 						<button className="btn-edit" onClick={() => setEditable(true)}>
// 							Edit Profile
// 						</button>
// 					</div>
// 					{editable && (
// 						<div className="form-edit">
// 							<form onSubmit={handleEdit}>
// 								<label htmlFor="firstname">First Name:</label>
// 								<input
// 									type="text"
// 									name="firstname"
// 									id="firstname"
// 									defaultValue={data.user_firstname}
// 									onChange={(e) =>
// 										setData({ ...data, user_firstname: e.target.value })
// 									}
// 								/>
// 								<label htmlFor="secondname">Last Name:</label>
// 								<input
// 									type="text"
// 									name="secondname"
// 									id="secondname"
// 									defaultValue={data.user_secondname}
// 									onChange={(e) =>
// 										setData({ ...data, user_secondname: e.target.value })
// 									}
// 								/>
// 								<label htmlFor="email">Email:</label>
// 								<input
// 									type="text"
// 									name="email"
// 									id="email"
// 									defaultValue={data.user_email}
// 									onChange={(e) =>
// 										setData({ ...data, user_email: e.target.value })
// 									}
// 								/>
// 								<label htmlFor="language_speak">Language Speak:</label>
// 								<input
// 									type="text"
// 									name="language_speak"
// 									id="language_speak"
// 									defaultValue={data.user_language_speak}
// 									onChange={(e) =>
// 										setData({ ...data, user_language_speak: e.target.value })
// 									}
// 								/>
// 								<label htmlFor="language_interest">Language Interest:</label>
// 								<input
// 									type="text"
// 									name="language_interest"
// 									id="language_interest"
// 									defaultValue={data.user_language_interest}
// 									onChange={(e) =>
// 										setData({ ...data, user_language_interest: e.target.value })
// 									}
// 								/>
// 								<label htmlFor="city">City:</label>
// 								<input
// 									type="text"
// 									name="city"
// 									id="city"
// 									defaultValue={data.user_city}
// 									onChange={(e) =>
// 										setData({ ...data, user_city: e.target.value })
// 									}
// 								/>
// 								<label htmlFor="country">Country:</label>
// 								<input
// 									type="text"
// 									name="country"
// 									id="country"
// 									defaultValue={data.user_country}
// 									onChange={(e) =>
// 										setData({ ...data, user_country: e.target.value })
// 									}
// 								/>
// 								<button onClick={handleSave} type="submit">
// 									Save Changes
// 								</button>
// 								<button type="button" onClick={() => setEditable(false)}>
// 									Cancel
// 								</button>
// 							</form>
// 						</div>
// 					)}
// 				</main>

// 				<button
// 					onClick={(e) => logout(e)}
// 					className="mt-5 btn btn-primary text-buttom bg-info"
// 				>
// 					Logout
// 				</button>
// 			</div>
// 		</>
// 	);
// };
// export default Profile;
//💫//🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉

// const EditUserForm = ({ data, setData, setEditable }) => {
// 	const [formData, setFormData] = useState({
// 		user_firstname: data.user_firstname,
// 		user_secondname: data.user_secondname,
// 		user_email: data.user_email,
// 		user_language_speak: data.user_language_speak,
// 		user_language_interest: data.user_language_interest,
// 		user_city: data.user_city,
// 		user_country: data.user_country,
// 	});

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prevFormData) => ({
// 			...prevFormData,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const res = await fetch("api/dashboard/", {
// 				method: "PUT",
// 				headers: {
// 					"Content-type": "application/json",
// 					token: localStorage.token,
// 				},
// 				body: JSON.stringify(formData),
// 			});

// 			const parseRes = await res.json();
// 			setData(parseRes);
// 			setEditable(false);
// 		} catch (err) {
// 			console.error(err.message);
// 		}
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<label htmlFor="user_firstname">First Name:</label>
// 			<input
// 				type="text"
// 				name="user_firstname"
// 				id="user_firstname"
// 				value={formData.user_firstname}
// 				onChange={handleChange}
// 			/>
// 			<label htmlFor="user_secondname">Last Name:</label>
// 			<input
// 				type="text"
// 				name="user_secondname"
// 				id="user_secondname"
// 				value={formData.user_secondname}
// 				onChange={handleChange}
// 			/>
// 			<label htmlFor="user_email">Email:</label>
// 			<input
// 				type="email"
// 				name="user_email"
// 				id="user_email"
// 				value={formData.user_email}
// 				onChange={handleChange}
// 			/>
// 			<label htmlFor="user_language_speak">Language Speak:</label>
// 			<input
// 				type="text"
// 				name="user_language_speak"
// 				id="user_language_speak"
// 				value={formData.user_language_speak}
// 				onChange={handleChange}
// 			/>
// 			<label htmlFor="user_language_interest">Language Interest:</label>
// 			<input
// 				type="text"
// 				name="user_language_interest"
// 				id="user_language_interest"
// 				value={formData.user_language_interest}
// 				onChange={handleChange}
// 			/>
// 			<label htmlFor="user_city">City:</label>
// 			<input
// 				type="text"
// 				name="user_city"
// 				id="user_city"
// 				value={formData.user_city}
// 				onChange={handleChange}
// 			/>
// 			<label htmlFor="user_country">Country:</label>
// 			<input
// 				type="text"
// 				name="user_country"
// 				id="user_country"
// 				value={formData.user_country}
// 				onChange={handleChange}
// 			/>
// 			<button type="submit">Save Changes</button>
// 		</form>
// 	);
// };
