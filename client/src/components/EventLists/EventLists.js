import React, { useEffect, useState } from "react";
import { List, Select } from "antd";
import "./EventLists.css";
import img from "../../assets/faceImoje.png";

const { Option } = Select;

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/dashboard/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchEvents();
  }, []);

  const handleLocationFilterChange = (value) => {
    setLocationFilter(value);
  };

  const handleLanguageFilterChange = (value) => {
    setLanguageFilter(value);
  };

  const filteredEvents = events.filter((event) => {
    if (locationFilter && event.location !== locationFilter) {
      return false;
    }
    if (languageFilter && event.languages.indexOf(languageFilter) === -1) {
      return false;
    }
    return true;
  });

  return (
    <div className="event_conte">
      <div className="filters">
        <Select
          placeholder="Filter by location"
          style={{ width: 300 }}
          onChange={handleLocationFilterChange}
          allowClear
        >
          <Option value="Manchester">Manchester</Option>
          <Option value="London">London</Option>
          <Option value="Leeds">Leeds</Option>
          <Option value="Sheffield">Sheffield</Option>
        </Select>
        <Select
          placeholder="Filter by language"
          style={{ width: 300 }}
          onChange={handleLanguageFilterChange}
          allowClear
        >
          <Option value="English">English</Option>
          <Option value="Arabic">Arabic</Option>
          <Option value="Farsi">Farsi</Option>
          <Option value="Turkish">Turkish</Option>
          <Option value="French">French</Option>
          <Option value="Spanish">Spanish</Option>
          <Option value="Japanese">Japanese</Option>
        </Select>
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
