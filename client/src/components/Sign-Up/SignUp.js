// import React, { useState } from "react";
// import "./SignUp.css";

// function SignUp() {
// 	const [firstName, setFirstName] = useState("");
// 	const [lastName, setLastName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		// Make API call to submit form data and handle authentication
// 		// Replace with your own backend server or authentication service
// 		console.log({ firstName, lastName, email, password });
// 	};

// 	return (
// 		<div>
// 			<h2>Sign up</h2>
// 			<form onSubmit={handleSubmit}>
// 				<label>
// 					First name:
// 					<input
// 						type="text"
// 						value={firstName}
// 						onChange={(event) => setFirstName(event.target.value)}
// 					/>
// 				</label>
// 				<br />
// 				<label>
// 					Last name:
// 					<input
// 						type="text"
// 						value={lastName}
// 						onChange={(event) => setLastName(event.target.value)}
// 					/>
// 				</label>
// 				<br />
// 				<label>
// 					Email:
// 					<input
// 						type="email"
// 						value={email}
// 						onChange={(event) => setEmail(event.target.value)}
// 					/>
// 				</label>
// 				<br />
// 				<label>
// 					Password:
// 					<input
// 						type="password"
// 						value={password}
// 						onChange={(event) => setPassword(event.target.value)}
// 					/>
// 				</label>
// 				<br />
// 				<button type="submit">Sign up</button>
// 				<br />
// 				<button>Sign in with Google</button>
// 			</form>
// 			<p>
// 				Already have an account? <a href="/signin">Sign in here</a>.
// 			</p>
// 		</div>
// 	);
// }

// export default SignUp;

//🍉

import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
		name: "",
	});

	const { email, password, name } = inputs;

	const onChange = (e) =>
		setInputs({ ...inputs, [e.target.name]: e.target.value });

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password, name };
			const response = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(body),
			});
			const parseRes = await response.json();

			if (parseRes.jwtToken) {
				localStorage.setItem("token", parseRes.jwtToken);
				setAuth(true);
				toast.success("Register Successfully");
			} else {
				setAuth(false);
				toast.error(parseRes);
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			<h1 className="mt-5 text-center">Register</h1>
			<form onSubmit={onSubmitForm}>
				<input
					type="text"
					name="email"
					value={email}
					placeholder="email"
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>
				<input
					type="password"
					name="password"
					value={password}
					placeholder="password"
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>
				<input
					type="text"
					name="name"
					value={name}
					placeholder="name"
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>
				<button className="btn btn-success btn-block">Submit</button>
			</form>
			<Link to="/signin">login</Link>
		</Fragment>
	);
};

export default SignUp;
