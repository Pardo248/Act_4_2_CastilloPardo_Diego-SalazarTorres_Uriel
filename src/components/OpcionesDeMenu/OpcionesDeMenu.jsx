import React from 'react';
import './OpcionesDeMenu.css';
import Typography from '../AreaDeTexto/Typography';

const OpcionesDeMenu = ({
  label = 'text',
  activa = false,
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

export default OpcionesDeMenu;