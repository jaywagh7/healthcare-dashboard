import React from 'react';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">
          <span className="health">Health</span> <span className="care">care.</span>
        </h1>

        <div className="header-tools">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <FiSearch className="search-icon" />
          </div>

          <div className="notification">
            <FiBell className="bell-icon" />
            <span className="notification-badge">2</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <button className="add-button" title="Add Appointment">
          <FiPlus />
        </button>

        <div className="profile-container">
          <div className="profile-pic">
            <img
              src="/dr.dp.jpg"
              alt="Dr. XYZ Profile"
              className="profile-img"
              loading="lazy"
            />
          </div>
          <div className="profile-info">
            <p className="profile-name">Dr. XYZ</p>
            <p className="profile-role">Neurologist</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
