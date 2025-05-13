import React from "react";
import "./css/Navbar.css";
import { FaTruck, FaBirthdayCake, FaGift, FaSeedling } from "react-icons/fa";

const Navbar = () => {
  return (
    
    <div className="navbar-wrapper">
      <div className="top-navbar">
        <div className="logo">Interflora</div>
        {/* <div className="location">🇮🇳 Where to deliver?</div> */}
        <div className="icons">
          {/* <button>₹</button> */}
          <button>♥</button>
          <button>🛒</button>
          <button>👤</button>
        </div>
      </div>

      <div className="bottom-menu">
        <div className="menu-item">
          <button className="menu-icon">
            <FaTruck />
          </button>
          <div className="menu-label">Same Day Delivery</div>
        </div>

        <div className="menu-item">
          <button className="menu-icon">
            <FaBirthdayCake />
          </button>
          <div className="menu-label">Birthday Flowers</div>
        </div>

        <div className="menu-item">
          <button className="menu-icon">
            <FaGift />
          </button>
          <div className="menu-label">Anniversary Flowers</div>
        </div>

        <div className="menu-item">
          <button className="menu-icon">
            <FaGift />
          </button>
          <div className="menu-label">Gift Hampers</div>
        </div>

        <div className="menu-item">
          <button className="menu-icon">
            <FaGift />
          </button>
          <div className="menu-label">
            Corporate Party or Decoration Flowers
          </div>
        </div>

        <div className="menu-item">
          <button className="menu-icon">
            <FaSeedling />
          </button>
          <div className="menu-label">Potted Plants</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
