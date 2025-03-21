import React, { useState } from 'react';
import './contactUs.css'; // Importing custom CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="contact-container">
      <div className="contact-row">
        {/* Left side: Contact Information */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Please read our <a href="/shipping-faq">SHIPPING FAQS</a> before contacting us,
            chances are we've answered your question there.
          </p>
          <p>
            If you'd like to return something you can find our <a href="/exchange-refund-policy">EXCHANGE & REFUND POLICY</a> here.
          </p>
          <p>
            If you have a question about your order status <a href="/track-order">TRACK YOUR ORDER</a> here.
          </p>
          <p>If you still need our assistance, please contact us below:</p>
          <ul>
            <li>Phone: 9582389745</li>
            <li>Timings: Mon-Sun (7 AM to 9 PM)</li>
            <li>Address: SUB KUCH TREND, Laxmi Nagar Complex Area, Shahdara, Delhi-110002</li>
            <li><strong>* For a faster reply please include your order number.</strong></li>
          </ul>
        </div>

        {/* Right side: Contact Form */}
        <div className="contact-form">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
