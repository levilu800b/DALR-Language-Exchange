import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSignIn = () => {
		// TODO: handle sign-in logic
		navigate("/dashboard");
	};

	return (
		<div>
			<h1 className="sign_in">Sign In</h1>
			<form>
				<label>
					Email:
					<input type="email" value={email} onChange={handleEmailChange} />
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</label>
				<br />
				<button type="button" onClick={handleSignIn}>
					Sign In
				</button>
			</form>
		</div>
	);
}

export default SignIn;
