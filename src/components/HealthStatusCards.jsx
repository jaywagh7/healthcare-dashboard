import React from 'react';
import HealthStatusCard from './HealthStatusCard';
import '../Styles/HealthStatusCards.css';

const HealthStatusCards = () => {
  const healthData = [
    {
      id: 1,
      title: 'Lungs',
      date: '26 Oct 2021',
      status: 'warning',
      percentage: 70,
      icon: '🫁'
    },
    {
      id: 2,
      title: 'Teeth',
      date: '26 Oct 2021',
      status: 'good',
      percentage: 85,
      icon: '🦷'
    },
    {
      id: 3,
      title: 'Bone',
      date: '26 Oct 2021',
      status: 'caution',
      percentage: 60,
      icon: '🦴'
    }
  ];

  return (
    <div className="health-cards-container">
      {healthData.map(item => (
        <HealthStatusCard 
          key={item.id}
          title={item.title}
          date={item.date}
          status={item.status}
          percentage={item.percentage}
          icon={item.icon}
        />
      ))}

      <div className="details-button-wrapper">
        <button className="details-button">
          Details
          <svg xmlns="http://www.w3.org/2000/svg" className="details-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HealthStatusCards;
