import React from "react";
import "./ProfileStyle.css";
import profile from "../../assets/profile.jpg";
const Profile = () => {
  return (
    <div>
    <header className="profile-header">
      <img src={profile} alt="Profile picture" />
    <div className="profile-info">
      <h1>Ahmed Mohamed</h1>
      <h2>Software Engineer</h2>
    </div>
    </header>
    <main>
      {/* Add main content here */}
    </main>
    <footer>
      {/* Add footer content here */}
    </footer>
  </div>
  );
};

export default Profile;