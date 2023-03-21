import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./messageSend.css";
import imfg from "../../../../assets/faceImoje.png";

const MessageSend = ({ data, selectedUser }) => {
	const [sender, setSender] = useState("");

	const getProfile = async () => {
		try {
			const res = await fetch("api/dashboard/", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseData = await res.json();
			setSender(parseData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	const [message, setMessage] = useState("");
	// const [text, setText] = useState("");
	const { userId } = useParams();
	const user = data.find((u) => u.user_id === parseInt(userId));

	const handleChangeText = (event) => {
		setMessage(event.target.value);
	};

	// const handleClick = async () => {
	// 	// Create a new message object
	// 	const newMessage = {
	// 		senderId: sender.user_id, // Sender's user ID
	// 		recipientId: selectedUser.user_id, // Recipient's user ID from URL parameters
	// 		text: message, // Message text
	// 	};

	// 	try {
	// 		// Send the message to the server
	// 		const response = await fetch("/api/dashboard/send-message", {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify(newMessage),
	// 		});

	// 		// Clear the message text area
	// 		setMessage("");
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	//🏆

	const handleClick = async (e) => {
		e.preventDefault();
		// Create a new message object
		const newMessage = {
			senderId: sender.user_id, // Sender's user ID
			recipientEmail: selectedUser.user_email, // Recipient's email
			message: message, // Message text
		};

		try {
			// Send the message to the server
			const response = await fetch("/api/dashboard/send-message", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					token: localStorage.token,
				},
				body: JSON.stringify(newMessage),
			});

			// Clear the message text area
			setMessage("");
		} catch (error) {
			console.error(error);
		}
	};

	console.log("senderId:" + sender.user_id, sender.user_firstname);
	console.log(
		"user_email:" + selectedUser.user_email,
		selectedUser.user_firstname
	);
	console.log("text:" + message);
	return (
		<>
			<section className="container_all-message">
				<div className="overall_ditail-message">
					<div>
						<img className="img-message" src={imfg} alt="" />
					</div>

					<div className="text-message">
						<div>
							<p>
								<span>First name:</span>
							</p>
							<p>
								<span>Last name:</span>
							</p>
							<p>
								<span>City:</span>
							</p>
						</div>

						<div>
							<p>{selectedUser.user_firstname}</p>
							<p>{selectedUser.user_secondname}</p>
							<p>{selectedUser.user_city}</p>
						</div>
						<div className="Native">
							<p>
								<span>Native country:</span>
							</p>
							<p>
								<span>Native language:</span>
							</p>
							<p>
								<span>Studied language:</span>
							</p>
						</div>
						<div>
							<p>{selectedUser.user_country}</p>
							<p>{selectedUser.user_language_speak}</p>
							<p>{selectedUser.user_language_interest}</p>
						</div>
					</div>
				</div>
			</section>
			<form className="container-textArea-message" onSubmit={handleClick}>
				<textarea
					className="textArea-message"
					value={message}
					onChange={handleChangeText}
					placeholder="Enter your text here"
				/>
				<button className="button-message" type="submit">
					Submit
				</button>
			</form>
		</>
	);
};

export default MessageSend;
