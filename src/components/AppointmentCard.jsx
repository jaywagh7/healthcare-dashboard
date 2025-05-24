import React from 'react';
import { FiClock } from 'react-icons/fi';

// Import CSS here
import '../Styles/AppointmentCard.css';

const AppointmentCard = ({ title, doctor, time, type }) => {
  const getAppointmentColorClass = (type) => {
    switch (type) {
      case 'dental':
        return 'color-dental';
      case 'cardio':
        return 'color-cardio';
      case 'neuro':
        return 'color-neuro';
      case 'physio':
        return 'color-physio';
      default:
        return 'color-default';
    }
  };

  const getAppointmentIcon = (type) => {
    switch (type) {
      case 'dental':
        return '🦷';
      case 'cardio':
        return '❤️';
      case 'neuro':
        return '🧠';
      case 'physio':
        return '💪';
      default:
        return '🏥';
    }
  };

  return (
    <div className="appointment-card">
      <div className={`icon-wrapper ${getAppointmentColorClass(type)}`}>
        <span role="img" aria-label={type} className="appointment-icon">
          {getAppointmentIcon(type)}
        </span>
      </div>

      <div className="appointment-info">
        <h4 className="appointment-title">{title}</h4>
        <p className="appointment-doctor">{doctor}</p>
      </div>

      <div className="appointment-time">
        <FiClock className="clock-icon" />
        <span>{time}</span>
      </div>
    </div>
  );
};

export default AppointmentCard;
