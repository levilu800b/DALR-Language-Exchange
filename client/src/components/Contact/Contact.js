import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import "./Contact.css";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values, any) => {
  console.log(values);
};
const Contact = () => {
  return (
    <div className="cont">
      <h1 style={{ color :"black" }}>contact</h1>
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={["user", "name"]} label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

  </Form>
  </div>
);
};

export default Contact;