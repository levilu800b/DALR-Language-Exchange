import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
		navigate("/sidebar");
	};

	return (
		<div>
			<h1>Sign In</h1>
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
			<div>
				<button>Google Sign In</button>
			</div>
			<div>
				<p>
					Do not have an account? <Link to="/signup">Sign up here</Link>.
				</p>
			</div>
		</div>
	);
}

export default SignIn;
