import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./messageSend.css";
import imfg from "../../../../assets/faceImoje.png";

const MessageSend = ({ data, selectedUser }) => {
	const [text, setText] = useState("");
	const { userId } = useParams();
	const user = data.find((u) => u.user_id === parseInt(userId));

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(text); // Replace this with your submission logic
	};

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
			<form className="container-textArea-message" onSubmit={handleSubmit}>
				<textarea
					className="textArea-message"
					value={text}
					onChange={handleChange}
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
