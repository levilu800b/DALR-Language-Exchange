import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TextArea, SendButton } from "../Users/textErea/TextErea";
import imfg from "../../../assets/faceImoje.png";
import "../massage.css";
import "../navbar.css";
import "./textErea/textErea.css";

export default function Profile({ data, selectedUser }) {
	// const [text, setText] = useState("");
	const [message, setMessage] = useState("");

	const handleChangeText = (event) => {
		setMessage(event.target.value);
	};

	const handleClick = async () => {
		// Create a new message object
		const newMessage = {
			senderId: data.user_id, // Sender's user ID
			recipientId: parseInt(userId), // Recipient's user ID from URL parameters
			text: message, // Message text
		};

		try {
			// Send the message to the server
			const response = await fetch("/api/dashboard/send-message", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newMessage),
			});

			// Clear the message text area
			setMessage("");
		} catch (error) {
			console.error(error);
		}
	};

	const { userId } = useParams();
	const user = data.find((u) => u.user_id === parseInt(userId));
	console.log(message);
	return (
		<div>
			<section className="container_all">
				<div className="overall_ditail">
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
			{/* <div className="ereaText">
				<h1>My Text Area</h1>

				<TextArea value={message} onChange={handleChangeText} />
			</div>
			<div style={{ marginLeft: "10%" }}>
				<SendButton onClick={handleClickMessage} />
			</div> */}
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
		</div>
	);
}
