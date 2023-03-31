import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import imfg from "../../../assets/faceImoje.png";
import "../massage.css";
import "../navbar.css";
import "./textErea/textErea.css";
import "./ProfileMessage.css";
export default function Profile({ data, selectedUser }) {
	const [sender, setSender] = useState("");

	const getProfile = async () => {
		try {
			const res = await fetch("api/dashboard/", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseData = await res.json();
			setSender(parseData);
			// if else statement to check if the message was sent use toast to display a message to the user=>
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

	//🏆

	const handleClick = async (e) => {
		e.preventDefault();
		if (!message) {
			toast.error("Message cannot be empty");
			return;
		}
		const newMessage = {
			senderId: sender.user_id, // Sender's user ID
			senderEmail: sender.user_email, // Sender's email
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

			const parseRes = await response.json();
			console.log(parseRes);
			// Clear the message text area
			setMessage("");
			if (response.ok) {
				toast.success("Message Sent Successfully");
			} else {
				toast.error("Message Not Sent");
			}
		} catch (error) {
			console.error(error);
			toast.error("Message Not Sent");
		}
	};
	// selectedUser(selectedUser.user_firstname);
	return (
		<div>
			<section className="container_all">
				<div className="overall_ditail profile_message">
					<div className="img">
						<img src={imfg} alt="" />
					</div>

					<div className="text">
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
							<p>{selectedUser.user_firstname}</p>
							<p>{selectedUser.user_secondname}</p>
							<p>{selectedUser.user_city}</p>
							<p>{selectedUser.user_country}</p>
							<p>{selectedUser.user_language_speak}</p>
							<p>{selectedUser.user_language_interest}</p>
						</div>
					</div>
				</div>
			</section>
			<div style={{ marginLeft: "10%" }}>New message</div>

			<form className="container-textArea-message" onSubmit={handleClick}>
				<textarea
					className="textArea-message"
					value={message}
					onChange={handleChangeText}
					placeholder="Enter your text here"
				/>
				<button className="button-message" type="submit">
					Send
				</button>
			</form>
		</div>
	);
}
