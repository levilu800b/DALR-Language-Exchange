// import { useState } from "react";
// import { Table, Input, Button } from "antd";
// import axios from "axios";

// const columns = [
// 	{
// 		title: "Email",
// 		dataIndex: "email",
// 		key: "email",
// 		render: (text, record) => <div>{record.recipient_email}</div>,
// 	},
// 	{
// 		title: "Message",
// 		dataIndex: "message",
// 		key: "message",
// 		render: (text, record) => <div>{record.message}</div>,
// 	},
// 	{
// 		title: "Date",
// 		dataIndex: "date",
// 		key: "date",
// 		render: (text, record) => <div>{record.created_at}</div>,
// 	},
// ];

// const MessageTable = () => {
// 	const [email, setEmail] = useState("");
// 	const [message, setMessage] = useState("");
// 	const [data, setData] = useState([]);

// 	const handleSubmit = async () => {
// 		try {
// 			const response = await axios.post("api/dashboard/send-message", {
// 				recipientEmail: email,
// 				message: message,
// 			});

// 			setData([...data, response.data]);
// 			setEmail("");
// 			setMessage("");
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	return (
// 		<div>
// 			<Input
// 				placeholder="Enter recipient email"
// 				value={email}
// 				onChange={(e) => setEmail(e.target.value)}
// 				style={{ marginBottom: 16 }}
// 			/>
// 			<Input.TextArea
// 				placeholder="Enter message"
// 				value={message}
// 				onChange={(e) => setMessage(e.target.value)}
// 				style={{ marginBottom: 16 }}
// 			/>
// 			<Button type="primary" onClick={handleSubmit}>
// 				Send
// 			</Button>
// 			<Table dataSource={data} columns={columns} />
// 		</div>
// 	);
// };

// export default MessageTable;
//🌧
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "antd";

const MessageTable = ({ data, selectedUser }) => {
	const [messageData, setMessageData] = useState([]);
	const { userId } = useParams();
	const user = data.find((u) => u.user_id === parseInt(userId));

	// const fetchMessages = async () => {
	// 	try {
	// 		const response = await fetch("/api/dashboard/messages", {
	// 			headers: {
	// 				token: localStorage.token,
	// 			},
	// 		});
	// 		const data = await response.json();
	// 		setMessageData(data);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };
	const fetchMessages = async () => {
		try {
			const response = await fetch("/api/dashboard/messages", {
				headers: {
					token: localStorage.token,
				},
			});
			const data = await response.json();
			const messages = data.filter((message) => {
				return message.sender_id === selectedUser.user_id;
			});
			setMessageData(messages);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchMessages();
	}, []);

	const columns = [
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

	return (
		<Table
			columns={columns}
			dataSource={messageData}
			rowKey={(record) => record.id}
		/>
	);
};

export default MessageTable;
