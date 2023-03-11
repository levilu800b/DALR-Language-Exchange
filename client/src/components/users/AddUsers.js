import { Button, Form, Input } from "antd";
import React, { useState } from "react";

export default function AddUsers({ AddUsers }) {
	const [input, setInput] = useState({
		first_name: "",
		last_name: "",
		languages_speak: { first: "", second: "" },
		languages_interested: { first: "", second: "" },
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInput((prevInput) => ({
			...prevInput,
			[name]:
				typeof prevInput[name] === "object"
					? { ...prevInput[name], [e.target.id]: value }
					: value,
		}));
	};

	const onFinish = async () => {
		// e.preventDefault();

		const res = await fetch("/api", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(input),
		});
		const data = await res.json();
		AddUsers(input, data.id);
		setInput({
			first_name: "",
			last_name: "",
			languages_speak: { first: "", second: "" },
			languages_interested: { first: "", second: "" },
		});
	};
	// console.log(input);
	return (
		<Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} onFinish={onFinish}>
			<Form.Item label="First name">
				<Input
					name="first_name"
					value={input.first_name}
					onChange={handleChange}
					placeholder="input First name"
					required
				/>
			</Form.Item>
			<Form.Item label="Last name">
				<Input
					name="last_name"
					value={input.last_name}
					onChange={handleChange}
					placeholder="input Last name"
					required
				/>
			</Form.Item>
			<Form.Item label="Languages speak">
				<Input
					name="languages_speak"
					value={input.languages_speak.first}
					id="first"
					onChange={handleChange}
					placeholder="input Languages speak"
					required
				/>
				<Input
					name="languages_speak"
					value={input.languages_speak.second}
					id="second"
					onChange={handleChange}
					placeholder="input Languages speak"
					required
				/>
			</Form.Item>
			<Form.Item label="Languages interested">
				<Input
					name="languages_interested"
					value={input.languages_interested.first}
					id="first"
					onChange={handleChange}
					placeholder="input Languages interested"
					required
				/>
				<Input
					name="languages_interested"
					value={input.languages_interested.second}
					id="second"
					onChange={handleChange}
					placeholder="input Languages interested"
					required
				/>
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 4, span: 14 }}>
				<Button className="btn-submit" type="primary submit" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}
