import React from "react";
import "./ProfileStyle.css";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="content">
    <header className="profile-header">
      <img src={profile} alt="Profile picture" />
      <br />
    <div className="profile-info">
      <h2>Ahmed Mohamed</h2>
      <br />
      <h3>Manchester , UK</h3>
      <br />
      <div className="bt-profile">
      <Link to="/" className="btn-light">Follow</Link>
      <Link to="/" className="btn-light">Chat</Link>

      </div>
    </div>
    </header>
    <main className="main-profile">
      {/* Add main content here */}
      <h1>maaaaai</h1>
    </main>
    <footer>
      {/* Add footer content here */}
      <h1>fooo</h1>
    </footer>
  </div>
  );
};

export default Profile;