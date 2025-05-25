import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';

// Import CSS here
import '../styles/DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-grid">
      <div className="left-column">
        <div className="header">
          <h2 className="dashboard-title">Dashboard</h2>
          <div className="select-wrapper">
            <select className="custom-select">
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
            <div className="select-arrow">
              <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="anatomy-health-container">
          <AnatomySection />
          <HealthStatusCards />
        </div>

        <ActivityFeed />
      </div>

      <div className="right-column">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
