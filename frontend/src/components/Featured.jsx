import React from 'react';

export default function Featured({ items = [] }) {
  
  if (!items || items.length === 0) {
    return (
      <section id="properties" className="featured-section">
        <h2>Featured Properties</h2>
        <p className="loading-text">Loading properties...</p>
      </section>
    );
  }

  return (
    <section id="properties" className="featured-section">
      <div className="section-header">
        <h2>Featured Properties</h2>
        <p>Explore our hand-picked listings from the best locations.</p>
      </div>

      <div className="property-grid">
        {items.map((it) => (
          <div className="property-card" key={it.id}>
            
            {/* Image & Price Overlay */}
            <div className="card-image-wrapper">
              <img src={it.image} alt={it.title} />
              <div className="price-tag">{it.price}</div>
              <div className="status-tag">For Sale</div>
            </div>

            {/* Content Details */}
            <div className="card-content">
              <h4 title={it.title}>{it.title}</h4>
              <p className="address">📍 {it.address}</p>
              
              <div className="card-features">
                <span>🛏 <strong>{it.beds}</strong> Beds</span>
                <span>🚿 <strong>{it.baths}</strong> Baths</span>
              </div>
              
              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}