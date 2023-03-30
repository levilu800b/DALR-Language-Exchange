import React, { useEffect, useState } from "react";
import profile from "../../assets/bg2.jpg";
import EditProfile from "./EditProfile";
import "./ProfileStyle.css";
import { Descriptions, Button, Modal } from "antd";


const Profile = () => {

const [data, setData] = useState("");
 const [isModalVisible, setIsModalVisible] = useState(false);

 const getProfile = async () => {
  try {
   const res = await fetch("api/dashboard/", {
    method: "GET",
    headers: { token: localStorage.token },
   });

   const parseData = await res.json();
   setData(parseData);
  } catch (err) {
   console.error(err.message);
  }
 };

 useEffect(() => {
  getProfile();
 }, []);

 const handleOk = () => {
  setIsModalVisible(false);
 };

 const handleCancel = () => {
  setIsModalVisible(false);
 };
	return (
		<>
			<div className="profile-content">
				<header className="profile-header">
					<img src={profile} alt="Profile picture" aria-hidden />
					<br />
					<div className="profile-info">
						<h2>
							{data.user_firstname} {data.user_secondname}
						</h2>
						<br />
						<h3 className="bt-profile">
							{data.user_city}, {data.user_country}
						</h3>
						<br />
						<div >
             <br />
      <Button type="primary"   onClick={() => setIsModalVisible(true)}>
     <span className="bt-profile">  Edit Profile </span>
      </Button>
						</div>
					</div>
				</header>
				<main className="main-profile">
					<Descriptions title="User Info" className="bt-profile">
						<Descriptions.Item label="UserName" className="bt-profile">
						<span className="bt-profile"> {data.user_firstname} {data.user_secondname} </span>
						</Descriptions.Item>
						<Descriptions.Item label="Email" className="bt-profile">
							<a href="#email" style={{ color: "black" }} >
							<span className="bt-profile"> {data.user_email} </span>
							</a>
						</Descriptions.Item>
						<Descriptions.Item label="Language Speak">
						<span className="bt-profile">	{data.user_language_speak} </span>
						</Descriptions.Item>
						<Descriptions.Item label="Language Interest">
						<span className="bt-profile">	{data.user_language_interest} </span>
						</Descriptions.Item>
						<Descriptions.Item label="city">
							{" "}
							<span className="bt-profile">	{data.user_city}{" "} </span>
						</Descriptions.Item>
						<Descriptions.Item label="Country">
						<span className="bt-profile">	{data.user_country}{" "} </span>
						</Descriptions.Item>
					</Descriptions>
<Modal title="Edit Profile" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
     <EditProfile user={data} setUser={setData} handleOk={handleOk} />
    </Modal>
    </main>
		</div>
		</>
	);
};

export default Profile;