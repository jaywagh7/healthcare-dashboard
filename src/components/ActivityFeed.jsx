import React from 'react';

// Import CSS here
import '../styles/ActivityFeed.css';

const ActivityFeed = () => {
  const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <div className="activity-subtitle">4 appointments on this week</div>
      </div>

      <div className="activity-bars">
        {weekdays.map((day, index) => (
          <div key={index} className="activity-day">
            <div className="bar-pair">
              {index % 2 === 0 ? (
                <>
                  <div
                    className="bar primary"
                    style={{ height: `${20 + Math.random() * 60}px` }}
                  ></div>
                  <div
                    className="bar secondary"
                    style={{ height: `${10 + Math.random() * 30}px` }}
                  ></div>
                </>
              ) : (
                <>
                  <div
                    className="bar secondary"
                    style={{ height: `${10 + Math.random() * 20}px` }}
                  ></div>
                  <div
                    className="bar dark"
                    style={{ height: `${20 + Math.random() * 70}px` }}
                  ></div>
                </>
              )}
            </div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
