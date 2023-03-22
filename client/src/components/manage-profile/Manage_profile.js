import "./Manage_profile.css";
import React, { useEffect, useState } from "react";
import Table from "../utils/Table";

const columnsEvents = [
	{ title: "Location", key: "id" },
	{ title: "Event", key: "title" },
	{ title: "Languages	", key: "Languages" },
	{ title: "Date", key: "Date" },
	{
		key: "action",
		//   render: (f, record) => (
		// 	<Link to={`/post/${record.id}`}>
		// 	  <EyeOutlined />
		// 	</Link>
		//   )
	},
];

const columnsMessages = [
	{ title: "Member", key: "id" },
	{ title: "Message", key: "title" },
	{ title: "Date	", key: "Languages" },
	{
		key: "action",
		//   render: (f, record) => (
		// 	<Link to={`/post/${record.id}`}>
		// 	  <EyeOutlined />
		// 	</Link>
		//   )
	},
];

export default function Manage_profile() {
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
	console.log(data);
	return (
		<div>
			<h1 className="Manage">Dashboard</h1>
			<h3>Welcome {data.user_firstname}</h3>
			<div className="containerTable">
				<div className="bordered-box">
					<h3 className="section-title">Events proposals</h3>
				</div>
				<Table columns={columnsEvents} />
			</div>

			<div className="containerTable">
				<div className="bordered-box">
					<h3 className="section-title">Messages not answered</h3>
				</div>
				<Table columns={columnsMessages} />
			</div>
		</div>
	);
}
