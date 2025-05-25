import React from 'react';
import AppointmentCard from './AppointmentCard';
import '../styles/CalendarView.css';

const CalendarView = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const appointmentDays = [8, 12, 17, 23, 28];
  const today = 17;

  const appointments = [
    {
      id: 1,
      title: 'Dentist Appointment',
      doctor: 'Dr. Cameron Williamson',
      time: '09:00 - 10:00',
      type: 'dental',
    },
    {
      id: 2,
      title: 'Physiotherapy Appointment',
      doctor: 'Dr. Kevin Djones',
      time: '14:30 - 15:30',
      type: 'physio',
    },
    {
      id: 3,
      title: 'Cardiologist Appointment',
      doctor: 'Dr. John Watson',
      time: '16:30 - 17:30',
      type: 'cardio',
    }
  ];

  const getTimeLabel = (day) => {
    return day % 3 === 0 ? '09:00' : day % 2 === 0 ? '11:00' : '14:30';
  };

  return (
    <div className="calendar-container">
     
      <div className="calendar-header">
        <h3 className="calendar-title">October 2021</h3>
        <div className="calendar-nav">
          <button className="nav-btn" aria-label="Previous month">
            <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="nav-btn" aria-label="Next month">
            <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="calendar-weekdays">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="weekday">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {days.map((day) => {
          const isAppointment = appointmentDays.includes(day);
          const isToday = day === today;

          return (
            <div
              key={day}
              className={`calendar-day ${isAppointment ? 'has-appointment' : ''} ${isToday ? 'today' : ''}`}
            >
              <span className={`day-number ${isToday ? 'today-number' : ''}`}>{day}</span>
              {isAppointment && (
                <span className="appointment-time-label">{getTimeLabel(day)}</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="appointment-list">
        {appointments.map(({ id, title, doctor, time, type }) => (
          <AppointmentCard
            key={id}
            title={title}
            doctor={doctor}
            time={time}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
