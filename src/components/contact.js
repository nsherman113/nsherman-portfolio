import React from "react";
import "../App.css";
const Contact = () => {
  return (
    <div className="form">
      <style>{"body { background-color: orange; }"}</style>
      <h2 class="contact-header">Contact</h2>
      <div className="card contact">
        <div class="form-label contact-label">
          <label for="exampleFormControlInput1" class="form-label">
            First Name
          </label>
          <input
            type="email"
            class="form-control contact-input"
            id="exampleFormControlInput1"
            placeholder="Name"
          ></input>

          <label for="exampleFormControlInput1" class="form-label">
            Last Name
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Last Name"
          ></input>

          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div class="form-label">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default Contact;
