"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [desc, setDesc] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, phone, email, desc };
    const res = await fetch("http://localhost:3000/api/postcontact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      // const json = await res.json();
      // console.log(json.message);
      alert("Thanks for contacting us.");
      setName("");
      setPhone("");
      setEmail("");
      setDesc("");
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
  };
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.feild}>
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.feild}>
          <label htmlFor="phone">Enter your phoneNo:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.feild}>
          <label htmlFor="email">Enter your email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            aria-describedby="emailHelp"
            required
          />
          <div id="email" className={styles.formtext}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.feild}>
          <label htmlFor="desc">Elaborate your concern: </label>
          <textarea
            className={styles.input}
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
