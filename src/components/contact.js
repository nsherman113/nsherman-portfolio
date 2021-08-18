import React from "react";
import emailjs from "emailjs-com";
import "../App.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i64prj8",
        "template_67qiz6b",
        e.target,
        "user_6lcWM2GVeHRa0g4xbHDQH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="App form">
      <style>{"body { background-color: orange; }"}</style>
      <form
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={sendEmail}
      >
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "50%",
          }}
          class="contact"
        >
          <legend class="contact-header">Contact</legend>
          <input
            type="text"
            placeholder="First Name"
            name="first"
            class="contact-input"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last"
            class="contact-input"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            class="contact-input"
          />
          <textarea
            style={{ minHeight: "200px" }}
            placeholder="Message"
            name="message"
            class="contact-input"
          />
          <input
            type="submit"
            id="button"
            value="Send Message"
            class="submitBtn"
          />
        </fieldset>
      </form>
    </div>
  );
};
export default Contact;
