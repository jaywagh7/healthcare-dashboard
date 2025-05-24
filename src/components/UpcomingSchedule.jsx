import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../Styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  const appointments = [
  {
    id: 1,
    day: 'Thursday',
    appointments: [
      {
        id: 101,
        title: 'Health checkup complete',
        time: '10:00 AM',
        type: 'checkup',
        status: 'completed'
      },
      {
        id: 102,
        title: 'Ophthalmologist',
        time: '2:30 PM',
        type: 'eye',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 2,
    day: 'Saturday',
    appointments: [
      {
        id: 201,
        title: 'Cardiologist',
        time: '9:15 AM',
        type: 'cardio',
        status: 'upcoming'
      },
      {
        id: 202,
        title: 'Neurologist',
        time: '11:45 AM',
        type: 'neuro',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 3,
    day: 'Friday',
    appointments: [
      {
        id: 301,
        title: 'Dermatologist',
        time: '1:00 PM',
        type: 'skin',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 4,
    day: 'Monday',
    appointments: [
      {
        id: 401,
        title: 'Physiotherapy Session',
        time: '8:30 AM',
        type: 'physio',
        status: 'upcoming'
      }
    ]
  }
];


  return (
    <div className="upcoming-schedule enhanced-ui">
      <div className="header">
        <h3 className="title">📅 Upcoming Schedule</h3>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="schedule-list">
        {appointments.map(daySchedule => (
          <div key={daySchedule.id} className="day-schedule">
            <h4 className="day-label">🗓️ {daySchedule.day}</h4>
            <div className="appointments-list">
              {daySchedule.appointments.map(appointment => (
                <SimpleAppointmentCard
                  key={appointment.id}
                  title={appointment.title}
                  time={appointment.time}
                  type={appointment.type}
                  status={appointment.status}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
