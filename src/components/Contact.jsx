import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      setFormError(true);
      return;
    }
    
    setFormError(false);
    setSending(true);

    try {
      // Make a POST request to the provided endpoint
      const response = await fetch('https://formspree.io/f/mwkgrvao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipient: 'stefano.palomo@dci-student.org', // Add default recipient
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setSuccess(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);

      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <h1>Contact me</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
        {formError && <p className="error">Please complete all the fields</p>}
        <button type="submit" disabled={sending}>
          {sending ? 'Sending...' : success ? 'Sent!' : 'Send'}
        </button>
        {success && <p className="success">Message sent successfully!</p>}

      </form>
    </div>
  );
}

export default Contact;

