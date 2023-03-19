// import React, { useEffect, useState } from "react";
// import "../../assets/css/general.css";
// import { Card } from "antd";

// const { Meta } = Card;

// function importAllImages(requiredImages) {
// 	const images = {};
// 	requiredImages.keys().map((item) => {
// 		images[item.replace("./", "")] = requiredImages(item);
// 	});
// 	return images;
// }

// const allImages = importAllImages(
// 	require.context(
// 		"../../../../server/public/images",
// 		false,
// 		/\.(png|jpe?g|svg)$/
// 	)
// );

// function UserList() {
// 	const [data, setData] = useState([]);
// 	const getProfile = async () => {
// 		try {
// 			const res = await fetch("api/dashboard/all/", {
// 				method: "GET",
// 				headers: { token: localStorage.token },
// 			});

// 			const parseData = await res.json();
// 			setData(parseData);
// 		} catch (err) {
// 			console.error(err.message);
// 		}
// 	};
// 	useEffect(() => {
// 		getProfile();
// 	}, []);

// 	return (
// 		<>
// 			{Array.isArray(data) && data.length > 0 ? (
// 				data.map((user) => (
// 					<Card
// 						key={user.user_id}
// 						hoverable
// 						style={{
// 							width: 300,
// 							display: "inline-block",
// 							margin: "3em",
// 						}}
// 						cover={
// 							<img
// 								alt={`${user.user_firstname} `}
// 								src={allImages["bg1.jpg"]?.default}
// 							/>
// 						}
// 					>
// 						<Meta
// 							Link
// 							to={`/profile`}
// 							title={`${user.user_secondname} `}
// 							description={`Languages spoken: ${user.user_language_speak}`}
// 						/>
// 						<Meta
// 							description={`Languages interested: ${user.user_language_interest}`}
// 						/>
// 					</Card>
// 				))
// 			) : (
// 				<div>No users found</div>
// 			)}
// 		</>
// 	);
// }

// export default UserList;
// //🌧  First try
//🌧
import React, { useEffect, useState } from "react";
import "../../assets/css/general.css";
// import sendMassage from "../massages/Massage";
import { Card } from "antd";

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
	const [senMassage, setSenMassage] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const getProfile = async () => {
		try {
			const res = await fetch("api/dashboard/all/", {
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
		setSenMassage(true);
		setSelectedUser(user);
	};

	return (
		<>
			{senMassage ? (
				<div>Welcome {selectedUser.user_firstname}</div>
			) : (
				<>
					{Array.isArray(data) && data.length > 0 ? (
						data.map((user) => (
							<Card
								key={user.user_id}
								hoverable
								style={{
									width: 300,
									display: "inline-block",
									margin: "3em",
								}}
								cover={
									<img
										alt={`${user.user_firstname} `}
										src={allImages["bg1.jpg"]?.default}
									/>
								}
								onClick={() => handleCardClick(user)}
							>
								<Meta
									Link
									to={`/profile`}
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
		</>
	);
}

export default UserList;
