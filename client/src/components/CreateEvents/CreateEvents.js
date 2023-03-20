import React, { useState } from "react";
import axios from "axios";

const CreateEvents = () => {
	const [formData, setFormData] = useState({
		languages: "",
		location: "",
		link: "",
		title: "",
		description: "",
		datetime: "",
	});

	const [formErrors, setFormErrors] = useState({});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post("/api/events", formData);
			if (response.status === 201) {
				setFormData({
					languages: "",
					location: "",
					link: "",
					title: "",
					description: "",
					datetime: "",
				});
				setFormErrors({});
				// Add the newly created event to a list of events displayed on the page
			}
		} catch (error) {
			if (error.response) {
				setFormErrors(error.response.data);
			} else {
				setFormErrors({
					submit: "Something went wrong. Please try again later.",
				});
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="languages">Language(s):</label>
				<input
					type="text"
					id="languages"
					name="languages"
					value={formData.languages}
					onChange={handleInputChange}
				/>
				{formErrors.languages && <span>{formErrors.languages}</span>}
			</div>
			<div>
				<label htmlFor="location">Location:</label>
				<input
					type="text"
					id="location"
					name="location"
					value={formData.location}
					onChange={handleInputChange}
				/>
				{formErrors.location && <span>{formErrors.location}</span>}
			</div>
			<div>
				<label htmlFor="link">
					Link for Zoom or Google Meeting(if online):
				</label>
				<input
					type="text"
					id="link"
					name="link"
					value={formData.link}
					onChange={handleInputChange}
				/>
				{formErrors.link && <span>{formErrors.link}</span>}
			</div>
			<div>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formData.title}
					onChange={handleInputChange}
				/>
				{formErrors.title && <span>{formErrors.title}</span>}
			</div>
			<div>
				<label htmlFor="description">Description:</label>
				<textarea
					id="description"
					name="description"
					value={formData.description}
					onChange={handleInputChange}
				/>
				{formErrors.description && <span>{formErrors.description}</span>}
			</div>
			<div>
				<label htmlFor="datetime">Date & Time:</label>
				<input
					type="datetime-local"
					id="datetime"
					name="datetime"
					value={formData.datetime}
					onChange={handleInputChange}
				/>
				{formErrors.datetime && <span>{formErrors.datetime}</span>}
			</div>
			<button type="submit">Submit</button>
			{formErrors.submit && <span>{formErrors.submit}</span>}
		</form>
	);
};

export default CreateEvents;
