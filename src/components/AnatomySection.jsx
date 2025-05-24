import React from 'react';
import { FiZoomIn } from 'react-icons/fi';
import '../Styles/AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      <div className="anatomy-image-wrapper">
        <img 
          src="/image.jpg" 
          alt="Human Anatomy" 
          className="anatomy-image"
        />

        <button className="zoom-button" title="Zoom In">
          <FiZoomIn className="zoom-icon" />
        </button>

        <div className="indicator heart-indicator fade-in">
          <span className="emoji">❤️</span>
          <span className="indicator-text">Healthy Heart</span>
        </div>

        <div className="indicator leg-indicator fade-in">
          <span className="emoji">🦵</span>
          <span className="indicator-text">Healthy Leg</span>
        </div>
        
        <div className="slider-container">
          <input 
            type="range" 
            min="0" 
            max="100" 
            defaultValue="50" 
            className="slider"/>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
