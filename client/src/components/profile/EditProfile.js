import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { toast } from "react-toastify";

export default function EditProfile({ user, setUser, handleOk }) {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	const onFinish = async (values) => {
		setLoading(true);
		try {
			const body = { ...values };
			const response = await fetch(`api/register/${user.user_email}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			const updatedUser = await response.json();
			setUser(updatedUser);
			handleOk();
			toast.success("Profile updated successfully!");
			console.log(response);
		} catch (err) {
			toast.error("Something went wrong! Please try again later.");
			console.error(err.message);
		}
		setLoading(false);
	};

	const onFinishFailed = (errorInfo) => {
		toast.error("Failed:  Please fill in all the fields!");
		console.log("Failed:", errorInfo);
	};

	return (
		<div>
			<Form
				form={form}
				layout="vertical"
				name="basic"
				initialValues={{
					firstname: user.user_firstname,
					secondname: user.user_secondname,
					email: user.user_email,
					password: user.user_password,
					language_speak: user.user_language_speak,
					language_interest: user.user_language_interest,
					city: user.user_city,
					country: user.user_country,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="First Name"
					name="firstname"
					rules={[
						{
							required: true,
							message: "Please input your first name!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Second Name"
					name="secondname"
					rules={[
						{
							required: true,
							message: "Please input your second name!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Please input your email!",
						},
						{
							type: "email",
							message: "Please enter a valid email!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					label="Language Speak"
					name="language_speak"
					rules={[
						{
							required: true,
							message: "Please input the language you speak!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Language Interest"
					name="language_interest"
					rules={[
						{
							required: true,
							message: "Please input the language you're interested in!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="City"
					name="city"
					rules={[
						{
							required: true,
							message: "Please input your city!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Country"
					name="country"
					rules={[
						{
							required: true,
							message: "Please input your country!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" loading={loading}>
						{loading ? "Saving..." : "Save Changes"}
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}
