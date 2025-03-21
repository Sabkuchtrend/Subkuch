// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        {/* Footer Description */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <p>
              <strong>SabKuchTrend:</strong> Trending Ecommerce site for kitchen, home appliances, electronics, gadgets, lighters, etc. Best prices, Cash on Delivery, Online Payment Mode, and Free Shipping available on most products.
            </p>
          </div>
        </div>

        {/* Our Promises */}
        <div className="row mb-5 justify-content-center">
          <div className="col-md-4">
            <h5 className="text-uppercase mb-4">Our Promises</h5>
            <ul className="list-unstyled">
              <li>📦 Cash on Delivery</li>
              <li>✈️ Free Shipping</li>
              <li>📞 Customer Support</li>
              <li>🛜 Live Tracking of Order</li>
              <li>🔒 100% Refund Guarantee</li>
              <li>↩️ 5 Days Easy Returns</li>
              <li>🏆 Premium Quality</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-3 mb-3">
            <h5 className="text-uppercase mb-4">Follow Us</h5>
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon me-3">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon me-3">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </div>
          </div>

          {/* Sitemap Links */}
          <div className="col-md-3 mb-3">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/track-order" className="footer-link">Track Order</a></li>
              <li><a href="/about-us" className="footer-link">About Us</a></li>
              <li><a href="/faqs" className="footer-link">FAQs</a></li>
              <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="footer-link">Refund Policy</a></li>
              <li><a href="/shipping-policy" className="footer-link">Shipping Policy</a></li>
              <li><a href="/terms-of-service" className="footer-link">Terms of Service</a></li>
              <li><a href="/cancel-order" className="footer-link">Cancel Order</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2025 Sab Kuch Trend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
