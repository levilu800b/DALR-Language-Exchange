import "./Manage_profile.css";
import React, { useEffect, useState } from "react";
import Table from "../utils/Table";
// import { useParams } from "react-router-dom";

const columns = [
	{
		title: "Sender Email",
		dataIndex: "sender_email",
		key: "sender_email",
	},
	{
		title: "Recipient Email",
		dataIndex: "recipient_email",
		key: "recipient_email",
	},
	{
		title: "Message",
		dataIndex: "message",
		key: "message",
	},
	{
		title: "Created At",
		dataIndex: "created_at",
		key: "created_at",
	},
];

export default function Manage_profile() {
	const [messageData, setMessageData] = useState([]);
	const [data, setData] = useState([]);

	const getProfile = async () => {
		try {
			const res = await fetch("api/", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseData = await res.json();
			setData(parseData);
		} catch (err) {
			console.error(err.message);
		}
	};

	const fetchMessages = async () => {
		try {
			const response = await fetch("/api/dashboard/messages", {
				headers: {
					token: localStorage.token,
				},
			});
			const data = await response.json();
			setMessageData(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getProfile();
		fetchMessages();
	}, []);

	const filteredSenderMessage = messageData.filter(
		(message) => message.sender_email === data.user_email
	);
	//   .map((message) => ({ recipient_email: message.recipient_email, message: message.message }));
	const filteredRecipientMessage = messageData.filter(
		(message) => message.recipient_email === data.user_email
	);

	console.log(data);
	console.log(messageData);

	return (
		<div>
			<h1 className="Manage">Dashboard</h1>
			<h3>Welcome {data.user_firstname}</h3>
			<div className="containerTable">
				<div className="bordered-box">
					<h3 className="section-title">Events proposals</h3>
				</div>
				<Table
					columns={columns}
					dataSource={""}
					rowKey={(record) => record.id}
				/>
			</div>

			<div className="containerTable">
				<div className="bordered-box">
					<h3 className="section-title">Message sent</h3>
				</div>
				<Table
					columns={columns}
					dataSource={filteredSenderMessage}
					rowKey={(record) => record.id}
				/>
			</div>
			<div className="containerTable">
				<div className="bordered-box">
					<h3 className="section-title">Messages received </h3>
				</div>
				<Table
					columns={columns}
					dataSource={filteredRecipientMessage}
					rowKey={(record) => record.id}
				/>
			</div>
		</div>
	);
}
