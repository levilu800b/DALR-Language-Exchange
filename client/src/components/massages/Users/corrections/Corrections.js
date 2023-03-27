// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Table } from "antd";

// const MessageTable = ({ data, selectedUser }) => {
// 	const [messageData, setMessageData] = useState([]);
// 	const { userId } = useParams();
// 	const user = data.find((u) => u.user_id === parseInt(userId));

// 	const fetchMessages = async () => {
// 		try {
// 			const response = await fetch("/api/dashboard/messages", {
// 				headers: {
// 					token: localStorage.token,
// 				},
// 			});
// 			const data = await response.json();
// 			const messages = data.filter((message) => {
// 				return message.sender_id === selectedUser.user_id;
// 			});
// 			setMessageData(messages);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchMessages();
// 	}, []);

// 	const columns = [
// 		{
// 			title: "Sender Email",
// 			dataIndex: "sender_email",
// 			key: "sender_email",
// 		},
// 		// {
// 		// 	title: "Recipient Email",
// 		// 	dataIndex: "recipient_email",
// 		// 	key: "recipient_email",
// 		// },
// 		{
// 			title: "Message",
// 			dataIndex: "message",
// 			key: "message",
// 		},
// 		{
// 			title: "Created At",
// 			dataIndex: "created_at",
// 			key: "created_at",
// 		},
// 	];
// 	console.log(data);
// 	console.log(selectedUser.user_firstname);
// 	return (
// 		<>
// 			<div className="bordered-box">
// 				<h3 className="section-title">
// 					{`messages received from
// 					${selectedUser.user_firstname}`}
// 				</h3>
// 			</div>
// 			<Table
// 				columns={columns}
// 				dataSource={messageData}
// 				rowKey={(record) => record.id}
// 			/>

// 			<div className="bordered-box">
// 				<h3 className="section-title">
// 					{`Messages you sent to ${selectedUser.user_firstname}`}
// 				</h3>
// 			</div>
// 			<Table
// 				columns={columns}
// 				dataSource={messageData}
// 				rowKey={(record) => record.id}
// 			/>
// 		</>
// 	);
// };

// export default MessageTable;
//✅

import "../../../manage-profile/Manage_profile.css";
import React, { useEffect, useState } from "react";
import Table from "../../../utils/Table";
// import { useParams } from "react-router-dom";

const columnss = [
	{
		title: "Sender Email",
		dataIndex: "sender_email",
		key: "sender_email",
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
const columns = [
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

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		return date.toLocaleDateString("en-US", options);
		// return ` ${date.toLocaleDateString()}   ${date.toLocaleTimeString()}`;
	};

	return (
		<div>
			<div className="containerTable">
				<div className="bordered-box">
					<h3 className="section-title">
						{`Messages received from this user`}{" "}
					</h3>
				</div>
				<Table
					columns={columnss}
					dataSource={filteredRecipientMessage.map((message) => ({
						...message,
						created_at: formatDate(message.created_at),
					}))}
					rowKey={(record) => record.id}
				/>
			</div>
			<div className="containerTable">
				<div className="bordered-box">
					<h3 className="section-title">Messages you sent to this user</h3>
				</div>
				<Table
					columns={columns}
					dataSource={filteredSenderMessage.map((message) => ({
						...message,
						created_at: formatDate(message.created_at),
					}))}
					rowKey={(record) => record.id}
				/>
			</div>
		</div>
	);
}
