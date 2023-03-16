import React, { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const SignIn = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const { email, password } = inputs;

	const onChange = (e) =>
		setInputs({ ...inputs, [e.target.name]: e.target.value });

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password };
			const response = await fetch("/api/login", {
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
				toast.success("Logged in Successfully");
			} else {
				setAuth(false);
				toast.error(parseRes);
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className="container">
			<h1 className="mt-5 text-center">Login</h1>
			<form onSubmit={onSubmitForm}>
				<input
					type="text"
					name="email"
					value={email}
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>
				<button class="btn btn-success btn-block">Submit</button>
			</form>
			<Link to="/register">register</Link>
		</div>
	);
};

export default SignIn;
