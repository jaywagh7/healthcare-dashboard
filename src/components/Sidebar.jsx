import React from 'react';
import {
  FiHome, FiClock, FiCalendar, FiClipboard,
  FiBarChart2, FiFileText, FiMessageSquare,
  FiHelpCircle, FiSettings
} from 'react-icons/fi';

// Import CSS here
import '../Styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <h2 className="sidebar-heading">General</h2>

        <nav className="sidebar-nav">
          <a href="/" className="sidebar-link sidebar-link-active">
            <FiHome className="icon" />
            <span>Dashboard</span>
          </a>

          <a href="/" className="sidebar-link">
            <FiClock className="icon" />
            <span>History</span>
          </a>

          <a href="/" className="sidebar-link">
            <FiCalendar className="icon" />
            <span>Calendar</span>
          </a>

          <a href="/" className="sidebar-link">
            <FiClipboard className="icon" />
            <span>Appointments</span>
          </a>

          <a href="#" className="sidebar-link">
            <FiBarChart2 className="icon" />
            <span>Statistics</span>
          </a>

          <a href="#" className="sidebar-link">
            <FiFileText className="icon" />
            <span>Tests</span>
          </a>

          <a href="#" className="sidebar-link">
            <FiMessageSquare className="icon" />
            <span>Chat</span>
          </a>

          <a href="#" className="sidebar-link">
            <FiHelpCircle className="icon" />
            <span>Support</span>
          </a>

          <a href="#" className="sidebar-link">
            <FiSettings className="icon" />
            <span>Settings</span>
          </a>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
