
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "antd";

const MessageTable = ({ data, selectedUser }) => {
	const [messageData, setMessageData] = useState([]);
	const { userId } = useParams();
	const user = data.find((u) => u.user_id === parseInt(userId));

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
