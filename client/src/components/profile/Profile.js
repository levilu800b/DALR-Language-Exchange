// import React from "react";
// import "./ProfileStyle.css";
// import profile from "../../assets/profile.jpg";

// const Profile = () => {
//   return (
//     <div>
//     <header className="profile-header">
//       <img src={profile} alt="Profile picture" />
//     <div className="profile-info">
//       <h1>Ahmed Mohamed</h1>
//       <h2>Software Engineer</h2>
//     </div>
//     </header>
//     <main>
//       {/* Add main content here */}
//     </main>
//     <footer>
//       {/* Add footer content here */}
//     </footer>
//   </div>
//   );
// };

// export default Profile;

//🍉
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Profile = ({ setAuth }) => {
	const [name, setName] = useState("");

	const getProfile = async () => {
		try {
			const res = await fetch("api/dashboard", {
				method: "post",
				headers: { jwt_token: localStorage.token },
			});

			const parseData = await res.json();
			console.log("hello", parseData);
			setName(parseData.user_name);
		} catch (err) {
			console.error(err.message);
		}
	};

	const logout = async (e) => {
		e.preventDefault();
		try {
			localStorage.removeItem("token");
			setAuth(false);
			toast.success("Logout successfully");
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<div>
			<h1 className="mt-5">Dashboard</h1>
			<h2>Welcome {name}</h2>
			<button onClick={(e) => logout(e)} className="btn btn-primary">
				Logout
			</button>
		</div>
	);
};

export default Profile;
//🍉
