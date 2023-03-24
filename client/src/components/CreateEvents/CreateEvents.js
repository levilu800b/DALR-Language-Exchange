import React, { useState } from "react";
import axios from "axios";
import "./CreateEvents.css";

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

    const { languages, location, link, title, description, datetime } = formData;

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
        const result = await axios.post("api/dashboard/create_events", {
          languages,
          location,
          link,
          title,
          description,
          datetime,
        });

        if (result.status === 201) {
          setFormSuccess(true);
          setFormData({
            languages: "",
            location: "",
            link: "",
            title: "",
            description: "",
            datetime: "",
          });
        }
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
    });

    if (formErrors.cancel) {
      setFormErrors({ ...formErrors, cancel: "" });
    }
  };
//className="create_form"
	return (
		<form onSubmit={handleSubmit} className="cont-form">
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
      <button type="cancel" onClick={handleCancel}>Cancel</button>
		</form>
	);
};

export default CreateEvents;
