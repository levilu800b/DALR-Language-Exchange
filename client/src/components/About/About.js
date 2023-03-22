import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "AHMED",
    position: "CEO",
    linkedin: "https://www.linkedin.com/in/ahmed-mohamed-193005242/",
  },
  {
    id: 2,
    name: "REBWAR",
    position: "CEO",
    linkedin: "https://www.linkedin.com/in/anvar-azizi/",
  },
  {
    id: 3,
    name: "LEVI",
    position: "CEO",
    linkedin: "https://www.linkedin.com/in/leviudeh/",
  },
  {
    id: 4,
    name: "DAVOOD",
    position: "CEO",
    linkedin: "https://www.linkedin.com/in/davood-moradi-2279539a/",
  },
];

function About() {
  return (
    <div style={{ backgroundColor: "skyblue", minHeight: "100vh" }}>
      <div style={{ padding: "20px", color: "black" }}>
        <h1 style={{ textAlign: "center" }}>WHO WE ARE</h1>
        <p style={{ textAlign: "center" }}>
          We are team DALR and our project is to create a website called Language Exchange for our final project in CYF.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {teamMembers.map((member) => (
          <div key={member.id} style={{ textAlign: "center", margin: "20px" }}>
            <img
              src={member.image}
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

      <h2 style={{ textAlign: "center", marginTop: "50px", color: "black" }}>OUR PROJECT</h2>
      <p style={{ textAlign: "center", color: "black" }}>
        language exchange is help people to learn new languages and see the event around them,if they can not join in person, there is always a zoom link to join online!
      </p>
      {}
    </div>
  );
}

export default About;
