import React, { useState } from "react";
import Select from "react-select";
import "./CreateYourProfilePage.css";
import languageOptions from "./LanguageOptions.json";


function CreateYourProfilePage() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
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

	const handleLanguagesKnowChange = (selectedOptions) => {
		setLanguagesKnow(selectedOptions);
	};

	const handleLanguagesInterestedChange = (selectedOptions) => {
		setLanguagesInterested(selectedOptions);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Prepare form data
		const formData = {
			firstName,
			lastName,
			email,
			languagesKnow: languagesKnow.map((language) => language.value),
			languagesInterested: languagesInterested.map(
				(language) => language.value
			),
		};

		// Send form data to the server for processing
		try {
			const response = await fetch("/api/create-profile", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			// Handle response from the server
			if (response.ok) {
				// Navigate to the homepage
				history.push("/");
				// Clear the form
				setFirstName("");
				setLastName("");
				setEmail("");
				setLanguagesKnow([]);
				setLanguagesInterested([]);
			} else {
				console.error("Failed to create profile");
			}
		} catch (error) {
			console.error(error);
		}
	};

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	// Send form data to the server for processing
	// 	fetch("/api/createProfile", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			firstName: firstName,
	// 			lastName: lastName,
	// 			email: email,
	// 			languagesKnow: languagesKnow,
	// 			languagesInterested: languagesInterested,
	// 		}),
	// 	})
	// 		.then((response) => {
	// 			if (response.ok) {
	// 				// Navigate to the homepage
	// 				history.push("/");
	// 				// Clear the form
	// 				setFirstName("");
	// 				setLastName("");
	// 				setEmail("");
	// 				setLanguagesKnow([]);
	// 				setLanguagesInterested([]);
	// 			} else {
	// 				throw new Error("Failed to create profile");
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// };

	const handleCancel = () => {
		// Navigate to the homepage

		// Clear the form
		setFirstName("");
		setLastName("");
		setEmail("");
		setLanguagesKnow([]);
		setLanguagesInterested([]);
	};

	return (
		<div className="create-profile-page">
			<h1>Create Your Profile</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="firstName">First Name</label>
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
					<label htmlFor="lastName">Last Name</label>
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
					<label htmlFor="email">Email</label>
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
					<label htmlFor="languagesKnow">Languages You Know</label>
					<Select
						id="languagesKnow"
						name="languagesKnow"
						value={languagesKnow}
						onChange={handleLanguagesKnowChange}
						options={languageOptions}
						isMulti
					/>
				</div>
				<div className="form-group">
					<label htmlFor="languagesInterested">Languages You are Interested In</label>
					<Select
						id="languagesInterested"
						name="languagesInterested"
						value={languagesInterested}
						onChange={handleLanguagesInterestedChange}
						options={languageOptions}
						isMulti
					/>
				</div>
				<div className="form-group">
					<button className="button" type="submit">Create Profile</button>
					<button className="button" type="button" onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateYourProfilePage;
