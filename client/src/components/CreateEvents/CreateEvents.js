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
    <div className="form_cont">
		<form onSubmit={handleSubmit} className="cont-form">
      <div className="one">
			<div className="full-width">
				<label htmlFor="languages">Language(s):</label>
				<input
					type="text"
					id="languages"
					name="languages"
					value={formData.languages}
					onChange={handleInputChange}
				/>
				{formErrors.languages && <span className="span_rec">{formErrors.languages}</span>}
			</div>
			<div className="full-width l">
				<label htmlFor="location">Location:</label>
				<input
					type="text"
					id="location"
					name="location"
					value={formData.location}
					onChange={handleInputChange}
				/>
				{formErrors.location && <span className="span_rec">{formErrors.location}</span>}
			</div>
      </div>
      <div className="one">

			<div className="full-width">
				<label htmlFor="link">
					Link for Zoom (if online):
				</label>
				<input
					type="text"
					id="link"
					name="link"
					value={formData.link}
					onChange={handleInputChange}
				/>
				{formErrors.link && <span className="span_rec">{formErrors.link}</span>}
			</div>
			<div className="full-width">
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formData.title}
					onChange={handleInputChange}
				/>
				{formErrors.title && <span className="span_rec">{formErrors.title}</span>}
			</div>

    </div>
			<div className="full-width">
				<label htmlFor="description">Description:</label>
				<textarea
					id="description"
					name="description"
					value={formData.description}
					onChange={handleInputChange}
				/>
				{formErrors.description && <span className="span_rec">{formErrors.description}</span>}
			</div>
			<div className="full-width">
				<label htmlFor="datetime">Date & Time:</label>
				<input
					type="datetime-local"
					id="datetime"
					name="datetime"
					value={formData.datetime}
					onChange={handleInputChange}
				/>
				{formErrors.datetime && <span className="span_rec">{formErrors.datetime}</span>}
			</div>
      <div>
			<button type="submit" className="btn-light">Submit</button>
			{formErrors.submit && <span className="span_rec">{formErrors.submit}</span>}
      <button type="cancel" onClick={handleCancel} className="btn-light">Cancel</button>
      </div>
		</form>
    </div>
	);
};

export default CreateEvents;
