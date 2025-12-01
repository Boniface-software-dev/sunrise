import React, { useState } from "react";

export default function Footer() {
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
      
      {/* ONE MAIN CONTAINER 
        Wrapper that keeps alignment consistent 
      */}
      <div className="footer-content">
        
        {/* --- 1. Newsletter Card --- */}
        <div className="newsletter-section">
          <div className="newsletter-text">
            <h2>Subscribe to our Newsletter</h2>
            <p>Get the latest property updates and news.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
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

        {/* --- 2. Main Grid (3 Columns) --- */}
        <div className="footer-grid">
          
          {/* Col 1: Brand */}
          <div className="footer-col">
            <h3>Sunrise Homes</h3>
            <p>
              Your trusted partner in finding the perfect home in Kenya.
              We make real estate simple, transparent, and exciting.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero" onClick={scrollToTop}>Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li>📍 Nairobi, Kenya</li>
              <li>📞 +254 700 000 000</li>
              <li>✉ info@sunrisehomes.com</li>
            </ul>
          </div>

        </div>

        {/* --- 3. Copyright --- */}
        <div className="footer-bottom">
          <p>© {year} Sunrise Homes. All rights reserved.</p>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>
      </button>

    </footer>
  );
}