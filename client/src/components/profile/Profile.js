import React from "react";
import "./ProfileStyle.css";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
import { Descriptions } from "antd";
const Profile = () => {
  return (
    <div className="profile-content">
    <header className="profile-header">
      <img src={profile} alt="Profile picture"  aria-hidden />
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
    <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Ahmed Mohamed</Descriptions.Item>
    <Descriptions.Item label="Email"><a href="#email" style={{ color:"black" }}>Ahmed@gmail.com</a></Descriptions.Item>
    <Descriptions.Item label="Language Speak">Arabic</Descriptions.Item>
    <Descriptions.Item label="Language Interest">English</Descriptions.Item>
    <Descriptions.Item label="city">Manchester</Descriptions.Item>
    <Descriptions.Item label="Country">UK</Descriptions.Item>

  </Descriptions>
    </main>
  </div>
  );
};

export default Profile;
