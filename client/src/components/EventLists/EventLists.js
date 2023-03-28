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

	return (
		<div className="event_conte">
			<div className="search-container">
				<Search
					placeholder="Search by language"
					allowClear
					onSearch={(value) => handleSearch(value, searchLocation)}
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					style={{ width: 200 }}
				/>
				<Search
					placeholder="Search by location"
					allowClear
					onSearch={(value) => handleSearch(searchText, value)}
					value={searchLocation}
					onChange={(e) => setSearchLocation(e.target.value)}
					style={{ width: 200 }}
				/>
			</div>
			<List
				itemLayout="vertical"
				dataSource={filteredEvents}
				renderItem={(event) => (
					<section className="container_all-message" key={event.id}>
						<div className="overall_detail-message">
							<div>
								<img className="img-message" src={img} alt="" />
							</div>

							<div className="text-message">
								<div className="Native">
									<p>
										<span>Title:</span> {event.title}
									</p>
									<p>
										<span>Description:</span> {event.description}
									</p>
									<p>
										<span>Datetime:</span> {formatDate(event.datetime)}
									</p>
								</div>
								<div>
									<p>
										<span>Languages:</span> {event.languages}
									</p>
									<p>
										<span>Location:</span> {event.location}
									</p>
									<p>
										<span>Link:</span> {event.link}
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
