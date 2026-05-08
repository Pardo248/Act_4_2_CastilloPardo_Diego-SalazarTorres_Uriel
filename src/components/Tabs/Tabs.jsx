import React from 'react';
import './Tabs.css';
import Typography from '../AreaDeTexto/Typography'; 

const Tab = ({ 
  label = 'text', 
  activa = false, // Booleano para saber si está seleccionada
  onClick,
  className = ''
}) => {
  
  const estadoClass = activa ? 'tab-activa' : 'tab-no-activa';

  return (
    <button 
      className={`tab-item ${estadoClass} ${className}`} 
      onClick={onClick}
      role="tab"
      aria-selected={activa}
    >
      <Typography variant="body-primary" as="span" className="tab-label">
        {label}
      </Typography>
    </button>
  );
};

export default Tab;