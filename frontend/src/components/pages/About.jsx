import React from 'react'
import '../css/About.css'

const About = () => {
 return (
    <div className="about-company">
      <h1>About Our Company</h1>
      <div className="about-content">
        <div className="card founder-card">
          <img
            src="https://images.unsplash.com/photo-1732933480695-90e4aba25eb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEZPVU5ERVJ8ZW58MHx8MHx8fDA%3D"
            alt="Founder"
            className="founder-image"
          />
          <h2>Asutosh Sharma</h2>
          <p>Founder & CEO</p>
        </div>

        <div className="card company-card">
          <h2>Who We Are</h2>
          <p>
            At Interflora, we believe in the power of flowers to brighten lives and
            celebrate every emotion. Founded in 2020, we have quickly become one of
            the most trusted names in floral delivery across India.
          </p>
          <p>
            Our mission is to create meaningful experiences through beautiful
            arrangements, handcrafted with love by expert florists and delivered
            with care. From birthdays to weddings, and every moment in between—we're
            here to help you express your feelings in the most elegant way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
