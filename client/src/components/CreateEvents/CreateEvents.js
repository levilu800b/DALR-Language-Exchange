import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateEvents.css";

const CreateEvents = () => {
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

	const [formData, setFormData] = useState({
		languages: "",
		location: "",
		link: "",
		title: "",
		description: "",
		datetime: "",
		senderEmail: "",
		senderId: "",
	});

	const [formErrors, setFormErrors] = useState({});
	const [formSuccess, setFormSuccess] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });

		if (formErrors[name]) {
			setFormErrors({ ...formErrors, [name]: "" });
		}

		if (formSuccess) {
			setFormSuccess(false);
		}

		if (formErrors.submit) {
			setFormErrors({ ...formErrors, submit: "" });
		}

		if (formErrors.cancel) {
			setFormErrors({ ...formErrors, cancel: "" });
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { languages, location, link, title, description, datetime } =
			formData;

		const errors = {};

		if (!languages) {
			errors.languages = "Languages is required";
		}

		if (!location) {
			errors.location = "Location is required";
		}

		if (!link) {
			errors.link = "Link is required";
		}

		if (!title) {
			errors.title = "Title is required";
		}

		if (!description) {
			errors.description = "Description is required";
		}

		if (!datetime) {
			errors.datetime = "Date and time is required";
		}

		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
		} else {
			try {
				await axios.post("api/dashboard/create_events", {
					languages,
					location,
					link,
					title,
					description,
					datetime,
					senderEmail: sender.user_email,
					senderId: sender.user_id,
				});

				setFormSuccess(true);

				setFormData({
					languages: "",
					location: "",
					link: "",
					title: "",
					description: "",
					datetime: "",
					senderEmail: "",
					senderId: "",
				});
			} catch (error) {
				console.error(error);
				setFormErrors({ submit: "Something went wrong, please try again." });
			}
		}
	};

	const handleCancel = (event) => {
		event.preventDefault();

		setFormData({
			languages: "",
			location: "",
			link: "",
			title: "",
			description: "",
			datetime: "",
			senderEmail: "",
			senderId: "",
		});
		setFormErrors({});
	};

	return (
		<div className="create-events-container">
			<h2>Create Event</h2>
			<form className="create-events-form" onSubmit={handleSubmit}>
				<label htmlFor="languages">Languages *</label>
				<input
					type="text"
					id="languages"
					name="languages"
					value={formData.languages}
					onChange={handleInputChange}
				/>
				{formErrors.languages && (
					<span className="error">{formErrors.languages}</span>
				)}
				<label htmlFor="location">Location *</label>
				<input
					type="text"
					id="location"
					name="location"
					value={formData.location}
					onChange={handleInputChange}
				/>
				{formErrors.location && (
					<span className="error">{formErrors.location}</span>
				)}

				<label htmlFor="link">Link *</label>
				<input
					type="text"
					id="link"
					name="link"
					value={formData.link}
					onChange={handleInputChange}
				/>
				{formErrors.link && <span className="error">{formErrors.link}</span>}

				<label htmlFor="title">Title *</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formData.title}
					onChange={handleInputChange}
				/>
				{formErrors.title && <span className="error">{formErrors.title}</span>}

				<label htmlFor="description">Description *</label>
				<textarea
					id="description"
					name="description"
					value={formData.description}
					onChange={handleInputChange}
				/>
				{formErrors.description && (
					<span className="error">{formErrors.description}</span>
				)}

				<label htmlFor="datetime">Date and Time *</label>
				<input
					type="datetime-local"
					id="datetime"
					name="datetime"
					value={formData.datetime}
					onChange={handleInputChange}
				/>
				{formErrors.datetime && (
					<span className="error">{formErrors.datetime}</span>
				)}

				{formErrors.submit && (
					<span className="error">{formErrors.submit}</span>
				)}
				{formSuccess && (
					<span className="success">Event created successfully!</span>
				)}

				<div className="form-buttons">
					<button type="submit">Create</button>
					<button onClick={handleCancel}>Cancel</button>
				</div>
			</form>
		</div>
	);
};

export default CreateEvents;
