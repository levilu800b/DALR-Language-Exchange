// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./SignIn.css";

// function SignIn() {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const navigate = useNavigate();

// 	const handleEmailChange = (event) => {
// 		setEmail(event.target.value);
// 	};

// 	const handlePasswordChange = (event) => {
// 		setPassword(event.target.value);
// 	};

// 	const handleSignIn = () => {
// 		// TODO: handle sign-in logic
// 		navigate("/dashboard");
// 	};

// 	return (
// 		<div>
// 			<h1 className="sign_in">Sign In</h1>
// 			<form>
// 				<label>
// 					Email:
// 					<input type="email" value={email} onChange={handleEmailChange} />
// 				</label>
// 				<br />
// 				<label>
// 					Password:
// 					<input
// 						type="password"
// 						value={password}
// 						onChange={handlePasswordChange}
// 					/>
// 				</label>
// 				<br />
// 				<button type="button" onClick={handleSignIn}>
// 					Sign In
// 				</button>
// 			</form>
// 			<div>
// 				<button>Google Sign In</button>
// 			</div>
// 			<div>
// 				<p>
// 					Do not have an account? <Link to="/signup">Sign up here</Link>.
// 				</p>
// 			</div>
// 		</div>
// 	);
// }

// export default SignIn;
//🍉

import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

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
		<Fragment>
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
		</Fragment>
	);
};

export default SignIn;
