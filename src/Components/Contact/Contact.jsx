import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import loaderGif from '../../assets/loader.gif'; // Adjust the path as necessary

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const cardRef = useRef(null);

  // Function to handle 3D rotation effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const cardRect = card.getBoundingClientRect();

    // Calculate mouse position relative to the card
    const xPos = (e.clientX - cardRect.left) / cardRect.width;
    const yPos = (e.clientY - cardRect.top) / cardRect.height;

    // Calculate rotation values
    const xRotation = 10 * (0.5 - yPos);
    const yRotation = -10 * (0.5 - xPos);

    // Apply the transformation
    card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  };

  // Reset card position when mouse leaves
  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    // Smoothly reset the transformation
    cardRef.current.style.transition = 'transform 0.5s ease';
    cardRef.current.style.transform = 'rotateX(0) rotateY(0)';

    // Remove the transition property after animation completes
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.transition = '';
      }
    }, 500);
  };

  useEffect(() => {
    // Add parallax effect to form elements on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.contact__form-group, .contact__title, .contact__subtitle');
      elements.forEach((element, index) => {
        const speed = 1 + index * 0.02;
        const yPos = window.scrollY * speed * 0.05;
        element.style.transform = `translateY(${-yPos}px) translateZ(${yPos * 2}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Add subtle animation on input
    if (e.target) {
      e.target.style.transition = 'transform 0.2s ease';
      e.target.style.transform = 'translateY(-2px) scale(1.01)';

      setTimeout(() => {
        if (e.target) {
          e.target.style.transform = 'translateY(0) scale(1)';
        }
      }, 200);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear any previous error

    // Simulate form submission
    setTimeout(() => {
      // Simulate an error
      const hasError = Math.random() > 0.5;

      if (hasError) {
        setError('An error occurred while submitting the form. Please try again.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setLoading(false);

      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="contact__container" id="Contact">
      <div
        className="contact__card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {loading ? (
          <div className="contact__loader">
            <img src={loaderGif} alt="Loading..." />
          </div>
        ) : submitted ? (
          <div className="contact__success-message">
            <p>Thank you for your message! We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact__form" aria-live="polite">
            {error && (
              <div className="contact__error-message">
                <p>{error}</p>
              </div>
            )}

            <div className="contact__form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
              ></textarea>
            </div>

            <button type="submit" className="contact__submit-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;