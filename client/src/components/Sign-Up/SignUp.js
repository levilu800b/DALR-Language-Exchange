import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Make API call to submit form data and handle authentication
		// Replace with your own backend server or authentication service
		console.log({ firstName, lastName, email, password });
	};

	return (
		<div>
			<h2>Sign up</h2>
			<form onSubmit={handleSubmit}>
				<label>
					First name:
					<input
						type="text"
						value={firstName}
						onChange={(event) => setFirstName(event.target.value)}
					/>
				</label>
				<br />
				<label>
					Last name:
					<input
						type="text"
						value={lastName}
						onChange={(event) => setLastName(event.target.value)}
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</label>
				<br />
				<button type="submit">Sign up</button>
				<br />
				<button>Sign in with Google</button>
			</form>
			<p>
				Already have an account? <a href="/signin">Sign in here</a>.
			</p>
		</div>
	);
}

export default SignUp;
