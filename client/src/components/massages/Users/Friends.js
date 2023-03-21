// import React from "react";

// export default function Friends() {
// 	return <div>Friends</div>;
// }
// import navbar from "../navbar.css";
import React from "react";

import { useParams } from "react-router-dom";
import imfg from "../../../assets/bg1.jpg";

const Friends = ({ data, selectedUser }) => {
	const { userId } = useParams();
	const user = data.find((u) => u.user_id === parseInt(userId));
	return (
		<section className="recipe_all">
			<div className="overall_ditail">
				<div className="img">
					<img src={imfg} alt="" width="150px" height="200px" />
				</div>

				<div className="text">
					<div>
						<p>
							<span>First name:</span>
						</p>
						<p>
							<span>Last name:</span>
						</p>
						<p>
							<span>City:</span>
						</p>
						<p>
							<span>Native country:</span>
						</p>
						<p>
							<span>Native language:</span>
						</p>
						<p>
							<span>Studied language:</span>
						</p>
					</div>
					<div>
						<p>{selectedUser.user_firstname}</p>
						<p>{selectedUser.user_secondname}</p>
						<p>{selectedUser.user_city}</p>
						<p>{selectedUser.user_country}</p>
						<p>{selectedUser.user_language_speak}</p>
						<p>{selectedUser.user_language_interest}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Friends;
