import React , { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_v6xbs76", "template_tcusoju", form.current, "XTtiq2GJ_9G06NXit")
      .then((result) => {
          console.log(result.text);
          console.log("Your Message has been sent");
		  toast.success("Your Message has been sent");

      }, (error) => {
          console.log(error.text);
		  toast.error("error");

      });

  };

  return (
	<div className="cont_contener">
		<></>
		<div className="cont">
			<h1 className="con_text">contact</h1>
			<form ref={form} onSubmit={sendEmail}>
				<label>
					Name
					<input type="text" name="user_name" />
				</label>
				<label>
					Email
					<input type="email" name="user_email" />
				</label>
				<label>
					Message
					<textarea name="message" />
				</label>
				{/* <input type="submit" value="Send" className="sub" /> */}
				<button className="btn">Send</button>
			</form>
		</div>
		<></>
		</div>
	);
};

export default Contact;