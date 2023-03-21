import React, { useState } from "react";
import { toast } from "react-toastify";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import "./EditProfile.css";
const props = {
	name: "file",
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	headers: {
 authorization: "authorization-text",
	},
	onChange(info) {
	if (info.file.status !== "uploading") {
		console.log(info.file, info.fileList);
	}
	if (info.file.status === "done") {
		message.success(`${info.file.name} file uploaded successfully`);
 } else if (info.file.status === "error") {
		message.error(`${info.file.name} file upload failed.`);
 }
	},
  };
const EditProfile = ({ setAuth }) => {
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
				const response = await fetch("/api/profile/${user.id}", {
					method: "PUT",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(body),
				});
				const parseRes = await response.json();
				if (parseRes.jwtToken) {
					localStorage.setItem("token", parseRes.jwtToken);
					setAuth(true);
					toast.success("Edit Successfully");
				} else {
					setAuth(false);
					toast.error(parseRes);
				}
			} catch (err) {
				console.error(err.message);
			}
		};
	return <div className="epcontainer">

<h1 className="mt-5 text-center">Edit Profile</h1>
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
				 <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload Your Profile Image</Button>
  </Upload>

				<button className="btn btn-success btn-block">Edit Profile</button>
			</form>
	</div>;
};

export default EditProfile;
