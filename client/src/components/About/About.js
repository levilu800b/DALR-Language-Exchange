import React, { useState, useEffect } from "react";
import "./About.css";

const teamMembers = [
	{
		id: 1,
		name: "AHMED",
		position: "FULL-STACK DEVELOPER",
		linkedin: "https://www.linkedin.com/in/ahmed-mohamed-193005242/",
		image: require("./ahm.jpg"),
	},
	{
		id: 2,
		name: "REBWAR",
		position: "FULL-STACK DEVELOPER",
		linkedin: "https://www.linkedin.com/in/anvar-azizi/",
		image: require("./reb.jpg"),
	},
	{
		id: 3,
		name: "LEVI",
		position: "FULL-STACK DEVELOPER",
		linkedin: "https://www.linkedin.com/in/leviudeh/",
		image: require("./levi.jpg"),
	},
	{
		id: 4,
		name: "DAVOOD",
		position: "FULL-STACK DEVELOPER",
		linkedin: "https://www.linkedin.com/in/davood-moradi-2279539a/",
		image: require("./dav.jpg"),
	},
];

function About() {
  const [showMembers, setShowMembers] = useState(false);
  const [showProject, setShowProject] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMembers(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (showMembers) {
      setTimeout(() => {
        setShowProject(true);
      }, 1000);
    }
  }, [showMembers]);

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }} className="about_cont">
      <div style={{ padding: "20px", color: "black" }}>
        <h1 style={{ textAlign: "center" }}>WHO WE ARE</h1>
        <p style={{ textAlign: "center", fontSize: "28px" }} className="font_p">
          We are team DALR, including Ahmed, Rebwar, Levi and Davood and this is our final project to create a website called Language Exchange for CodeYourFuture.
        </p>
      </div>

      {showMembers && (
        <div style={{ display: "flex", justifyContent: "center" }} className="card_about">
          {teamMembers.map((member) => (
            <div key={member.id} style={{ textAlign: "center", margin: "20px" }} className="card_info">
              <img
                src={member.image.default}
                alt={member.name}
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
              <h3>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  {member.name}
                </a>
              </h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      )}

      {showProject && (
        <>
          <h2 style={{ textAlign: "center", marginTop: "100px", color: "white" }}>OUR PROJECT</h2>
          <p style={{ textAlign: "center", color: "white", fontSize: "28px" }} className="font_p">
          Language Exchange is a platform designed to help individuals learn new languages and discover events in their community. <p>If attending events in person is not feasible, participants can join virtually via Zoom.</p>  <p> In addition to learning, participants can also teach their native language to others who are interested.</p> Users are free to join any event they wish, as well as create their own events. For inquiries, please feel free to contact us via email on our contact page. Users can view their dashboard to access a list of events and a user directory
          </p>
        </>
      )}
    </div>
  );
}

export default About;
