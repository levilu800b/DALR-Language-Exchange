import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TextArea, SendButton } from "../Users/textErea/TextErea";
import imfg from "../../../assets/bg1.jpg";
import "../massage.css";
import "../navbar.css";
import "./textErea/textErea.css";

export default function Profile({ data, selectedUser }) {
	const [text, setText] = useState("");

	const handleChangeText = (event) => {
		setText(event.target.value);
	};
	const handleClick = () => {
		// Send the message to the server or do something else
		console.log(`Sending message: ${text}`);
	};
	const { userId } = useParams();
	const user = data.find((u) => u.user_id === parseInt(userId));
	return (
		<div>
			<section className="recipe_all">
				<div className="overall_ditail">
					<div className="img">
						<img src={imfg} alt="" width="150px" height="200px" />
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
			<div className="ereaText">
				<h1>My Text Area</h1>
				<TextArea value={text} onChange={handleChangeText} />
			</div>
			<div style={{ marginLeft: "10%" }}>
				<SendButton onClick={handleClick} />
			</div>
		</div>
	);
}
