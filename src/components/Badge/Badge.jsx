import React from 'react';
import './Badge.css';
import Typography from '../AreaDeTexto/Typography';

const Badge = ({ 
  tipo = 'primary', // Opciones: 'primary', 'warning', 'success'
  texto = 'text', 
  className = ''
}) => {
  
  return (
    <div className={`badge-container badge-${tipo} ${className}`}>
      <Typography variant="body" as="span" className="badge-label">
        {texto}
      </Typography>
    </div>
  );
};

export default Badge;