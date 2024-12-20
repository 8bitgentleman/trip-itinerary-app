import React from 'react';

const CalendarButton = ({ date }) => {
  const handleCalendarClick = () => {
    if (!date) return;
    
    // Add T12:00:00 to ensure consistent date handling
    const d = date instanceof Date ? date : new Date(date + 'T12:00:00');
    const year = d.getFullYear();
    const month = d.getMonth() + 1; // getMonth() returns 0-11
    const day = d.getDate();
    
    const calendarURL = `https://calendar.google.com/calendar/u/0/r/day/${year}/${month}/${day}`;
    window.open(calendarURL, '_blank');
  };

  return (
    <button 
      onClick={handleCalendarClick}
      className="bg-hermes-red text-white px-6 py-2 rounded-lg hover:bg-hermes-red-dark"
    >
      See dates
    </button>
  );
};

export default CalendarButton;