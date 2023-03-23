import React from "react";
import { Typography, Divider, Row, Col, Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./About.css";

const { Title, Paragraph } = Typography;

const testimonials = [
  {
    name: "John Doe",
    avatar: "/images/testimonial1.png",
    text: "I have been using this language exchange website for a few months now and it is been an amazing experience. I have met so many new people from different parts of the world and improved my language skills in the process. Highly recommended!",
  },
  {
    name: "Jane Smith",
    avatar: "/images/testimonial2.png",
    text: "I was hesitant to try a language exchange website at first, but I am so glad I did. The platform is easy to use and the community is very welcoming. I have made some great connections and improved my language skills significantly.",
  },
  {
    name: "Mark Lee",
    avatar: "/images/testimonial3.png",
    text: "As someone who loves traveling and learning new languages, this language exchange website is a dream come true. I can connect with people from all over the world and practice speaking different languages. It is been a game changer for me!",
  },
];

const About = () => {
  return (
    <>
      <Title>About Us</Title>
      <Paragraph>
        Our language exchange website was founded with the goal of connecting people from around the world who are interested in learning and practicing different languages. Whether you are a beginner or an advanced learner, our platform offers a welcoming and supportive community where you can connect with others and improve your language skills.
      </Paragraph>
      <Divider />
      <Title level={2}>Our Team</Title>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card hoverable>
            <Avatar size={64} icon={<UserOutlined />} />
            <Title level={4}>John Smith</Title>
            <Paragraph>Co-founder and CEO</Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <Avatar size={64} icon={<UserOutlined />} />
            <Title level={4}>Jane Doe</Title>
            <Paragraph>Co-founder and CTO</Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <Avatar size={64} icon={<UserOutlined />} />
            <Title level={4}>Mark Johnson</Title>
            <Paragraph>Lead Developer</Paragraph>
          </Card>
        </Col>
      </Row>
      <Divider />
      <Title level={2}>Testimonials</Title>
      {testimonials.map((testimonial, index) => (
        <Card key={index} hoverable>
          <Avatar size={64} src={testimonial.avatar} />
          <Title level={4}>{testimonial.name}</Title>
          <Paragraph>{testimonial.text}</Paragraph>
        </Card>
      ))}
    </>
  );
};

export default About;
