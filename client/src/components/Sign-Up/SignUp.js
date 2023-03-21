import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignUp.css";

const SignUp = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		firstname: "",
		secondname: "",
		email: "",
		password: "",
		language_speak: "",
		language_interest: "",
		city: "",
		country: "",
	});

	const {
		firstname,
		secondname,
		email,
		password,
		language_speak,
		language_interest,
		city,
		country,
	} = inputs;

	const onChange = (e) =>
		setInputs({ ...inputs, [e.target.name]: e.target.value });

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = {
				firstname,
				secondname,
				email,
				password,
				language_speak,
				language_interest,
				city,
				country,
			};
			const response = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(body),
			});
			const parseRes = await response.json();
			console.log(parseRes);
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
		<div className="container">
			<h1 className="mt-5 text-center">Register</h1>
			<form className="col-md-4" onSubmit={onSubmitForm}>
				<input
					type="text"
					name="firstname"
					value={firstname}
					placeholder="first name"
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>
				<input
					type="text"
					name="secondname"
					value={secondname}
					placeholder="last name"
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>
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
					name="language_speak"
					value={language_speak}
					placeholder="language I speak"
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>
				<input
					type="text"
					name="language_interest"
					value={language_interest}
					placeholder="language of interest"
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>
				<input
					type="text"
					name="city"
					value={city}
					placeholder="city"
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>
				<input
					type="text"
					name="country"
					value={country}
					placeholder="country"
					onChange={(e) => onChange(e)}
					className="form-control my-3"
				/>

				<button className="btn btn-success btn-block">Sign up</button>
			</form>
			<Link className="login_button" to="/signin">I already Have an Account, Please Login.</Link>
		</div>
	);
};

export default SignUp;
