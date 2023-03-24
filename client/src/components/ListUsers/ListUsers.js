import React, { useEffect, useState } from "react";
import "../../assets/css/general.css";
import Massage from "../massages/Massage.js";
import { Card } from "antd";
import "./ListUsers.css";

const { Meta } = Card;

function importAllImages(requiredImages) {
	const images = {};
	requiredImages.keys().map((item) => {
		images[item.replace("./", "")] = requiredImages(item);
	});
	return images;
}

const allImages = importAllImages(
	require.context(
		"../../../../server/public/images",
		false,
		/\.(png|jpe?g|svg)$/
	)
);

function UserList() {
	const [data, setData] = useState([]);
	const [showWelcome, setShowWelcome] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const getProfile = async () => {
		try {
			const res = await fetch("api/all/", {
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

	const handleCardClick = (user) => {
		setShowWelcome(true);
		setSelectedUser(user);
	};

	return (
		<>
			<div className="list_user_con">
				{showWelcome ? (
					<Massage data={data} selectedUser={selectedUser} />
				) : (
					<>
						{Array.isArray(data) && data.length > 0 ? (
							data.map((user) => (
								<Card
									key={user.user_id}
									hoverable
									style={{
										width: 200,
										height: 200,
										display: "inline-block",
										margin: "3em",
									}}
									cover={
										<img
											alt={`${user.user_firstname} `}
											src={allImages["faceImoje.png"]?.default}
										/>
									}
									onClick={() => handleCardClick(user)}
								>
									<Meta
										Link
										to={"/profile"}
										title={`${user.user_secondname} `}
										description={`Languages spoken: ${user.user_language_speak}`}
									/>
									<Meta
										description={`Languages interested: ${user.user_language_interest}`}
									/>
								</Card>
							))
						) : (
							<div>No users found</div>
						)}
					</>
				)}
			</div>
		</>
	);
}

export default UserList;
