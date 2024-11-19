import React, { useRef } from 'react';
import Cimg from './images/login-bg.jpg';
import './Contact.css';

function Contact() {
  const formRef = useRef(null); // Create a ref for the form

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const form = formRef.current;
    const name = form.querySelector('input[placeholder="Name"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const message = form.querySelector('textarea[placeholder="Your message"]').value;

    // Validation check
    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
    } else {
      alert('Form submitted successfully!');
      form.reset(); // Reset all fields in the form
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="form">
          <div className="h2">
            <h2>Contact Us</h2>
          </div>
          <form ref={formRef}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your message" required></textarea>
            <button type="submit" onClick={handleButtonClick}>Send</button>
          </form>
        </div>

        <div className="contact-image">
          <img src={Cimg} alt="Contact Us" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
