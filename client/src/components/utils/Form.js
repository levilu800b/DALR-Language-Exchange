import {
	Form,
	Input,
	Checkbox as AntCheckbox,
	Select as AntSelect,
	Button,
} from "antd";

export function Text({ label, name, required, max, rules = [], ...props }) {
	return (
		<Form.Item
			label={label}
			name={name}
			rules={[
				{
					required,
					message: `${label}required.`,
				},
				{
					max,
					message: `maximum  ${label} must be${max} characters.`,
				},
				...rules,
			]}
		>
			<Input {...props} />
		</Form.Item>
	);
}

export function Checkbox({ label, name, children }) {
	return (
		<Form.Item name={name} valuePropName="checked">
			<AntCheckbox>{label || children}</AntCheckbox>
		</Form.Item>
	);
}

export function Select({ label, name, required, options }) {
	return (
		<Form.Item
			label={label}
			name={name}
			rules={[
				{
					required,
					message: `${label} required.`,
				},
			]}
		>
			<AntSelect>
				{options.map(({ name, value }) => (
					<AntSelect.Option value={value} key={value}>
						{name}
					</AntSelect.Option>
				))}
			</AntSelect>
		</Form.Item>
	);
}

export function Submit({ label = "save", type = "primary", loading }) {
	return (
		<Form.Item>
			<Button type={type} htmlType="submit" loading={loading}>
				{label}
			</Button>
		</Form.Item>
	);
}

export default Form;
