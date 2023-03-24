import React from "react";
import "./textErea.css";

export const TextArea = ({ value, onChange }) => {
	return (
		<textarea
			className="textarea"
			value={value}
			onChange={onChange}
			placeholder="New message"
		/>
	);
};

export const SendButton = ({ onClick }) => {
	return (
		<button className="send-button" onClick={onClick}>
			Send
		</button>
	);
};
