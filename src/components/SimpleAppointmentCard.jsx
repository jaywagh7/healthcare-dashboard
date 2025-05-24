import React from 'react';
import { 
  FiCheckCircle, FiEye, FiHeart, 
  FiActivity, FiCalendar 
} from 'react-icons/fi';


import '../Styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, type, status }) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'checkup':
        return <FiActivity className="icon" />;
      case 'eye':
        return <FiEye className="icon" />;
      case 'cardio':
        return <FiHeart className="icon" />;
      case 'neuro':
        return <FiActivity className="icon" />; 
      default:
        return <FiCalendar className="icon" />;
    }
  };

  const getStatusStyles = () => {
    if (status === 'completed') {
      return {
        container: 'container-completed',
        icon: 'icon-completed',
        badge: 'badge-completed'
      };
    }
    return {
      container: 'container-default',
      icon: 'icon-default',
      badge: 'badge-default'
    };
  };

  const styles = getStatusStyles();

  return (
    <div className={`simple-appointment-card ${styles.container}`}>
      <div className={`${styles.icon} icon-wrapper`}>
        {status === 'completed' ? <FiCheckCircle className="icon" /> : getTypeIcon()}
      </div>

      <div className="content">
        <h4 className="title">{title}</h4>
        <span className={`${styles.badge} badge`}>
          {time}
        </span>
      </div>

      <div className="menu-button-wrapper">
        <button className="menu-button" aria-label="menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
