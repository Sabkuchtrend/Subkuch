import React from 'react';
import './about.css'; // Importing custom CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to sabkuchtrend.in – your go-to destination for quality products and hassle-free shopping. We keep it simple: great products, fair prices, and a commitment to your satisfaction.</p>
      </div>

      <div className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          We're on a mission to make your online shopping experience straightforward and enjoyable. No frills, just the products you love delivered to your doorstep with care.
        </p>
      </div>

      <div className="about-us-section">
        <h2>What We Offer</h2>
        <ul>
          <li><strong>Quality Products:</strong> We believe in quality over quantity. Every product on our platform meets our high standards.</li>
          <li><strong>Fair Prices:</strong> Transparent and fair pricing is our promise. No hidden fees, just great value for your money.</li>
          <li><strong>Satisfaction Guaranteed:</strong> Your satisfaction is our top priority. We aim to make every interaction positive, from browsing to delivery.</li>
        </ul>
      </div>

      <div className="about-us-section">
        <h2>Why Choose sabkuchtrend.in?</h2>
        <ul>
          <li><strong>Diverse Selection:</strong> Explore a wide range of categories, from fashion to electronics. We cater to your diverse tastes and preferences.</li>
          <li><strong>Customer-Centric Approach:</strong> We're here for you. Our customer support team is ready to assist, ensuring a smooth and hassle-free shopping experience.</li>
        </ul>
      </div>

      <div className="about-us-section">
        <h2>Meet the Team</h2>
        <p>
          Behind sabkuchtrend.in is a dedicated team working to make your shopping experience exceptional. We're not just a faceless platform – we're real people committed to serving you better.
        </p>
      </div>

      <div className="about-us-footer">
        <h2>Get in Touch</h2>
        <p>We're here for you. If you have any questions, concerns, or just want to say hello, feel free to reach out to us.</p>
        <p>Thank you for choosing sabkuchtrend.in. We look forward to being your trusted online shopping destination.</p>
      </div>
    </div>
  );
};

export default AboutUs;
