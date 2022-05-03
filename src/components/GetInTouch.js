import React, { useState, useEffect } from "react";

export default function GetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="bg-offWhite">
      <form
        id="contact-form"
        className="relative container mx-auto mt-16"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3 className="text-3xl text-offBlack font-semibold">Get in Touch</h3>
        <div>
          <input
            type="text"
            value={name}
            className="form-control"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            className="form-control"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          type="text"
          value={message}
          className="form-control"
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
