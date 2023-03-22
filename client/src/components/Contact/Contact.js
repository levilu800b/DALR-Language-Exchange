import React , { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_v6xbs76", "template_tcusoju", form.current, "XTtiq2GJ_9G06NXit")
      .then((result) => {
          console.log(result.text);
          console.log("Your Message has been sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="cont">
      <h1 style={{ color :"black", marginLeft:250 }} >contact</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  </div>
);
};

export default Contact;