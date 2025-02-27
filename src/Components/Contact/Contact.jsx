import React, { useState } from "react";
import "./Contact.css";
import loaderGif from "../../assets/loader.gif";

const API_URL = "https://vipul-portfolio-flask-backend.onrender.com/send-email";

async function sendEmail(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
}

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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate fields on change
    if (name === "email" && !validateEmail(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email address" }));
    } else if (name === "fullName" && !validateName(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, fullName: "Full Name can only contain letters and spaces" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: value ? "" : `${name} is required` }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateName = (name) => {
    const re = /^[A-Za-z\s]+$/;
    return re.test(String(name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setResponseMessage("");

    // Check for errors before submitting
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!validateName(formData.fullName)) newErrors.fullName = "Full Name can only contain letters and spaces";
    if (!formData.email) newErrors.email = "Email is required";
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.subject) newErrors.subject = "Subject is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const data = await sendEmail(formData);
      if (data.message) {
        setResponseMessage(`✅ ${data.message}`);
        setFormData({ fullName: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setResponseMessage(`❌ Error: ${data.error}`);
        setIsError(true);
      }
    } catch (error) {
      setResponseMessage("❌ Server error. Please try again later.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setResponseMessage("");
      }, 5000); 
    }
  };

  return (
    <div id="Contact" className="contact-wrapper">
      <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-8 text-center pt-20">
        Contact Us
      </h1>
      <div className="contact-container">
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
                Full Name <span style={{ color: "red" }}>*</span>
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
              {errors.fullName && <p className="error-message">{errors.fullName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email <span style={{ color: "red" }}>*</span>
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
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject <span style={{ color: "red" }}>*</span>
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
              {errors.subject && <p className="error-message">{errors.subject}</p>}
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
              ></textarea>
            </div>
            <button type="submit" className="form-button" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;