import React from 'react';
import '../styles/HealthStatusCard.css';

const HealthStatusCard = ({ title, date, status, percentage, icon }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return '#10b981';     
      case 'warning': return '#f59e0b'; 
      case 'caution': return '#ef4444';  
      default: return '#6b7280';         
    }
  };

  return (
    <div className="health-card" style={{ borderLeft: `4px solid ${getStatusColor(status)}` }}>
      <div className="health-card-header">
        <span className="icon">{icon}</span>
        <div>
          <h3 className="health-title">{title}</h3>
          <p className="health-date">{date}</p>
        </div>
      </div>

      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`,
            backgroundColor: getStatusColor(status)
          }}
        />
      </div>
    </div>
  );
};

export default HealthStatusCard;
