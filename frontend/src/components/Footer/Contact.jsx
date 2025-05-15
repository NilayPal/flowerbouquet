import React, { useState } from "react";
import '../FotterCss/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate with backend or send email
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Please fill out the form below.</p>

      {submitted ? (
        <div className="success-message">
          Thank you for contacting us. We'll get back to you soon!
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
