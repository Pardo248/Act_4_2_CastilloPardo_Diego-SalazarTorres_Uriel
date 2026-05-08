import React from 'react';
import './DatePicker.css';
import Typography from '../AreaDeTexto/Typography';

const DatePicker = ({ 
  placeholder = 'text', 
  value, 
  onClick,
  className = '' 
}) => {

  // Icono SVG básico de calendario 
  const CalendarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  return (
    <div className={`datepicker-container ${className}`} onClick={onClick}>
      
      <div className="datepicker-icon">
        <CalendarIcon />
      </div>

      <Typography variant="body" as="span">
        {value ? value : placeholder}
      </Typography>

    </div>
  );
};

export default DatePicker;