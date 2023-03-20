import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./EditProfile.css";

const EditProfile = () => {
	const [inputs, setInputs] = useState({
		firstname: "",
		secondname: "",
		email: "",
		password: "",
		language_speak: "",
		language_interest: "",
		city: "",
		country: "",
	});
	const {
		firstname,
		secondname,
		email,
		password,
		language_speak,
		language_interest,
		city,
		country,
	} = inputs;
	const onChange = (e) =>
		setInputs({ ...inputs, [e.target.name]: e.target.value });

	return <div>Edit Profile</div>;
};

export default EditProfile;
