import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Select from "react-select";
import "./EditUser.css";
import languageOptions from "./LanguageOptions.json";
import { toast } from "react-toastify";

function EditProfilePage ({ setAuth }) {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [country, setCountry] = useState("");
	const [languagesKnow, setLanguagesKnow] = useState([]);
	const [languagesInterested, setLanguagesInterested] = useState([]);

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};

	const handleLastNameChange = (event) => {
		setLastName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleCountryChange = (event) => {
		setCountry(event.target.value);
	};

	const handleLanguagesKnowChange = (selectedOptions) => {
		setLanguagesKnow(selectedOptions);
	};

	const handleLanguagesInterestedChange = (selectedOptions) => {
		setLanguagesInterested(selectedOptions);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		navigate("/dashboard");

		// Prepare form data
		const formData = {
			firstName,
			lastName,
			email,
			country,
			languagesKnow: languagesKnow.map((language) => language.value),
			languagesInterested: languagesInterested.map(
				(language) => language.value
			),
		};

		// Send form data to the server for processing
		try {
			const response = await fetch("/api/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const parseRes = await response.json();
			console.log(parseRes);
			if (parseRes.jwtToken) {
				localStorage.setItem("token", parseRes.jwtToken);
				setAuth(true);
				toast.success("Register Successfully");
			} else {
				setAuth(false);
				toast.error(parseRes);
			}
		} catch (err) {
			console.error(err.message);
		}

		// Clear the form
		setFirstName("");
		setLastName("");
		setEmail("");
		setCountry("");
		setLanguagesKnow([]);
		setLanguagesInterested([]);
	};

	const handleCancel = () => {
		// Clear the form
		setFirstName("");
		setLastName("");
		setEmail("");
		setCountry("");
		setLanguagesKnow([]);
		setLanguagesInterested([]);
	};

	return (
		<div className="signup-page">
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label className="first_name" htmlFor="firstName">
						First Name
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={firstName}
						onChange={handleFirstNameChange}
						required
					/>
				</div>
				<div className="form-group">
					<label className="last_name" htmlFor="lastName">
						Last Name
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={lastName}
						onChange={handleLastNameChange}
						required
					/>
				</div>
				<div className="form-group">
					<label className="email" htmlFor="email">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</div>
				<div className="form-group">
					<label className="country" htmlFor="country">
						Country
					</label>
					<input
						type="text"
						id="country"
						name="country"
						value={country}
						onChange={handleCountryChange}
						required
					/>
				</div>
				<div className="form-group">
					<label className="language" htmlFor="languagesKnow">
						Languages you know
					</label>
					<Select
						id="languagesKnow"
						name="languagesKnow"
						value={languagesKnow}
						onChange={handleLanguagesKnowChange}
						options={languageOptions}
						isMulti
						required
					/>
				</div>
				<div className="form-group">
					<label className="language" htmlFor="languagesInterested">
						Languages you are interested in
					</label>
					<Select
						id="languagesInterested"
						name="languagesInterested"
						value={languagesInterested}
						onChange={handleLanguagesInterestedChange}
						options={languageOptions}
						isMulti
						required
					/>
				</div>
				<div className="form-group">
					<button className="signup" type="submit" onClick={handleSubmit}>
						Sign Up
					</button>
					<button className="cancel" type="button" onClick={handleCancel}>
						Cancel
					</button>
					<Link className="login_button" to="/signin">
						Already have an account? Log in
					</Link>
				</div>
			</form>
		</div>
	);
}

export default EditProfilePage;
