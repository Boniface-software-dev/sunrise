import React from "react";

export default function Footer() {

  // Get the current year dynamically for the copyright text
  const year = new Date().getFullYear();
      return (
    <footer className="footer">
      <div className="footer-container"></div>

        {/* ---------------------------------------------
            Column 1: Brand name and short description
        --------------------------------------------- */}
        <div className="footer-col">
          <h3>Sunrise Homes</h3>
          <p>Your trusted partner in finding the perfect home!</p>
        </div>

        {/* ---------------------------------------------
            Column 3: Contact information
        --------------------------------------------- */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 700 000 000</p>
          <p>✉ info@sunrisehomes.com</p>
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