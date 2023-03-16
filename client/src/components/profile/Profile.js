//🍉
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import profile from "../../assets/bg1.jpg";

const Profile = ({ setAuth }) => {
	const [name, setName] = useState("");

	const getProfile = async () => {
		try {
			const res = await fetch("api/dashboard/", {
				method: "GET",
				headers: { token: localStorage.token },
			});

			const parseData = await res.json();
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
		<>
			<div className="text-center mt-4">
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src={profile} alt="Card image cap" />
					<div className="card-body">
						<h3 className="card-text">{name}</h3>
					</div>
				</div>
			</div>
			<button
				onClick={(e) => logout(e)}
				className="mt-5 btn btn-primary text-buttom bg-info"
			>
				Logout
			</button>
		</>
	);
};

export default Profile;

// all posebilty for text color=> text-primary, text-secondary, text-success, text-danger, text-warning, text-info, text-light, text-dark, text-body, text-muted, text-white, text-black-50, text-white-50, text-reset
// make a card for profile with image and name by bootstrap=> https://getbootstrap.com/docs/4.0/components/card/
// when hover on button change the color with botsrap=> https://getbootstrap.com/docs/4.0/utilities/colors/
// make a margin for buttom with bootstrap=> https://getbootstrap.com/docs/4.0/utilities/spacing/
