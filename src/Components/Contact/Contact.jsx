import React, { useState } from "react";
import "./Contact.css";
import loaderGif from "../../assets/loader.gif";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setResponseMessage("");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      const success = Math.random() > 0.5; // Simulate success or error
      if (success) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setIsError(true);
        setResponseMessage("An error occurred. Please try again.");
      }
    }, 2000);
  };

  return (
    <div id="Contact" className="contact-wrapper">
      <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-8 text-center pt-20">
        Contact Us
      </h1>
      <div  className="contact-container">
        {isSubmitting ? (
          <div className="loader-container">
            <img src={loaderGif} alt="Loading..." className="loader" />
          </div>
        ) : responseMessage ? (
          <div className={`response-message ${isError ? "error" : "success"}`}>
            {responseMessage}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;