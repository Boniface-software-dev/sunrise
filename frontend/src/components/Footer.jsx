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
          <p>Your trusted partner in finding the perfect home.</p>
        </div>