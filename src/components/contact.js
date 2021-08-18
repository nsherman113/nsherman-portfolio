import React from "react";
import { useState } from "react";
import "../App.css";

const Contact = () => {
  const [mailerState, setMailerState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    console.log("button submitted");
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then((res) => res.json())
      .then(() => {
        setMailerState({
          email: "",
          firstname: "",
          lastname: "",
          message: "",
        });
      });
  };
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
        onSubmit={submitEmail}
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
            placeholder="First Name"
            onChange={handleStateChange}
            name="firstname"
            value={mailerState.firstname}
            class="contact-input"
          />
          <input
            placeholder="Last Name"
            onChange={handleStateChange}
            name="lastname"
            value={mailerState.lastname}
            class="contact-input"
          />
          <input
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
            class="contact-input"
          />
          <textarea
            style={{ minHeight: "200px" }}
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
            class="contact-input"
          />
          <button class="submitBtn">Send Message</button>
        </fieldset>
      </form>
    </div>
  );
};
export default Contact;
