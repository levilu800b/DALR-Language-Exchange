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
import { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";

const columns = [
	{
		title: "Email",
		dataIndex: "email",
		key: "email",
		render: (text, record) => <div>{record.recipient_email}</div>,
	},
	{
		title: "Message",
		dataIndex: "message",
		key: "message",
		render: (text, record) => <div>{record.message}</div>,
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "date",
		render: (text, record) => <div>{record.created_at}</div>,
	},
];

const MessageTable = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		// Fetch data from backend when component mounts
		const fetchData = async () => {
			try {
				const response = await axios.get("api/dashboard/send-message");
				setData(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);
	console.log(data);
	return (
		<div>
			<Table dataSource={data} columns={columns} />
		</div>
	);
};

export default MessageTable;
