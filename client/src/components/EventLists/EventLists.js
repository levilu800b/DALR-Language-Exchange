import React, { useEffect, useState } from "react";
import { Input, List } from "antd";
import "./EventLists.css";
import img from "../../assets/faceImoje.png";

const { Search } = Input;

const EventsList = () => {
	const [events, setEvents] = useState([]);
	const [filteredEvents, setFilteredEvents] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [searchLocation, setSearchLocation] = useState("");

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await fetch("/api/dashboard/events");
				const data = await response.json();
				setEvents(data);
				setFilteredEvents(data);
			} catch (error) {
				console.error(error.message);
			}
		};
		fetchEvents();
	}, []);

	const handleSearch = (text, location) => {
		const filtered = events.filter(
			(event) =>
				event.languages.toLowerCase().includes(text.toLowerCase()) &&
				event.location.toLowerCase().includes(location.toLowerCase())
		);
		setFilteredEvents(filtered);
		setSearchText(text);
		setSearchLocation(location);
	};

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		};
		return date.toLocaleDateString("en-US", options);
	};
	console.log(events);

	return (
		<div className="event_conte">
			<div className="search-container">
				<Search
				className="inputsearch"
					placeholder="Search by language"
					allowClear
					onSearch={(value) => handleSearch(value, searchLocation)}
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					style={{ width: 300 }}
				/>
				<Search
				className="inputsearch"
					placeholder="Search by location"
					allowClear
					onSearch={(value) => handleSearch(searchText, value)}
					value={searchLocation}
					onChange={(e) => setSearchLocation(e.target.value)}
					style={{ width: 300 }}
				/>
			</div>
			<List
				itemLayout="vertical"
				dataSource={filteredEvents}
				renderItem={(event) => (
					<section className="container_all-message" key={event.id}>
						<div>
							<img className="img-message" src={img} alt="img" />
						</div>
						<div className="overall_detail-message">
							<div className="text-message">
								<div className="Native">
									<p>
										<span className="span_text">Title:</span>{" "}
										<span className="span_des"> {event.title} </span>
									</p>
									<p>
										<span className="span_text">Description:</span>{" "}
										<span className="span_des"> {event.description} </span>
									</p>
									<p>
										<span className="span_text">Datetime:</span>{" "}
										<span className="span_des">
											{formatDate(event.datetime)}{" "}
										</span>
									</p>
									<p>
										<span className="span_text">Created by:</span>{" "}
										<span className="span_des">
										{event.senderemail}
										</span>
									</p>
								</div>
								<div className="Nav2">
									<p>
										<span className="span_text">Languages:</span>{" "}
										<span className="span_des">{event.languages} </span>
									</p>
									<p>
										<span className="span_text">Location:</span>{" "}
										<span className="span_des">{event.location} </span>
									</p>
									<br />
									<p>
										<br />
										<span className="span_text">
											Link: <a href={event.link}> Link </a>
										</span>
									</p>
									<p>
										<span className="span_text">full name: </span>{" "}
										<span className="span_des">
										{`${event.user_firstname} ${event.user_secondname}`}
										</span>
									</p>
								</div>
							</div>
						</div>
					</section>
				)}
			/>
		</div>
	);
};

export default EventsList;
