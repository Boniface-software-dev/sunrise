import React from "react";
import React, { useState } from "react";


export default function Footer() {

  // Get the current year dynamically for the copyright text
  const year = new Date().getFullYear();  
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };
return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Stay Updated</h2>
        <p>Get the latest property updates, listings, and news directly to your inbox.</p>

        <form className="newsletter" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* ---------------------------------------------
            Column 1: Brand name and short description
        --------------------------------------------- */}
        <div className="footer-container">
        <div className="footer-col">
          <h3>Sunrise Homes</h3>
          <p>Your trusted partner in finding the perfect home!</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero" onClick={scrollToTop}>Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#featured">Featured Properties</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* ---------------------------------------------
            Column 3: Contact information
        --------------------------------------------- */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 700 000 000</p>
          <p>✉ info@sunrisehomes.com</p>

          <div className="social-icons">
            <a href="https://facebook.com/sunrisehomes" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/sunrisehomes" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com/sunrisehomes" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------
          Footer bottom section with dynamic year
      --------------------------------------------- */}
      <div className="footer-bottom">
        <p>© {year} Sunrise Homes. All rights reserved.</p>
      </div>
      
    </footer>
  );
}
