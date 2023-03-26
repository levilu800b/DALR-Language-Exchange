import React, { useEffect, useState } from "react";
import { List } from "antd";
import "./EventLists.css";
import img from "../../assets/faceImoje.png";

const EventsList = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
<<<<<<< HEAD
				const response = await fetch("/api/events");
=======
				const response = await fetch("api/events");
>>>>>>> main
				const data = await response.json();
				setEvents(data);
			} catch (error) {
				console.error(error.message);
			}
		};
		fetchEvents();
	}, []);

	return (
		<div className="event_conte">
			<List
				itemLayout="vertical"
				dataSource={events}
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
										<span>Datetime:</span> {event.datetime}
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
