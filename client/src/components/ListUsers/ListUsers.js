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
// 	const [data, setData] = useState("");
// 	const getProfile = async () => {
// 		try {
// 			const res = await fetch("api/dashboard/", {
// 				method: "GET",
// 				headers: { token: localStorage.token },
// 			});

// 			const parseData = await res.json();
// 			setData(parseData.user_name);
// 		} catch (err) {
// 			console.error(err.message);
// 		}
// 	};
// 	useEffect(() => {
// 		getProfile();
// 	}, []);
// 	console.log(data);
// 	return (
// 		<>
// 			{Array.isArray(data) && data.length > 0 ? (
// 				data.map((user) => (
// 					<Card
// 						key={data.id}
// 						hoverable
// 						style={{
// 							width: 300,
// 							display: "inline-block",
// 							margin: "4em",
// 						}}
// 						cover={
// 							// <img
// 							// 	alt={`${user.first_name} ${user.last_name}`}
// 							// 	src={user.imageUrl}
// 							// />
// 							<img alt={`${data} `} src={allImages["image-1.jpg"]?.default} />
// 							// <img src={allImages[user.imageUrl]?.default} alt="EXAMPLE" />
// 						}
// 					>
// 						<Meta
// 							title={`${data} `}
// 							// description={`Languages spoken: ${user.languages_speak}`}
// 						/>
// 						<Meta
// 						// description={`Languages interested: ${user.languages_interested}`}
// 						/>
// 					</Card>
// 				))
// 			) : (
// 				<div>No users found.</div>
// 			)}
// 		</>
// 	);
// }

//🌧
import React, { useEffect, useState } from "react";
import "../../assets/css/general.css";
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
	console.log(data);
	return (
		<>
			{Array.isArray(data) && data.length > 0 ? (
				data.map((user) => (
					<Card
						key={user.id}
						hoverable
						style={{
							width: 300,
							display: "inline-block",
							margin: "3em",
						}}
						cover={
							<img
								alt={`${user.user_name} `}
								src={allImages["bg1.jpg"]?.default}
							/>
						}
					>
						<Meta
							title={`${user.user_name} `}
							// description={`Languages spoken: ${user.languages_speak}`}
						/>
						<Meta
						// description={`Languages interested: ${user.languages_interested}`}
						/>
					</Card>
				))
			) : (
				<div>No users found</div>
			)}
		</>
	);
}

export default UserList;
