import React from 'react';
import './Boton.css';
import Typography from '../AreaDeTexto/Typography';

const Boton = ({ 
  label = 'label', 
  tipo = 'primario', // 'primario', 'secundario', 'interaccion', 'deshabilitado'
  size = 'desktop',  // 'desktop', 'mobile'
  onClick,
  icon,
  className = ''
}) => {
  
  // Si el tipo es 'deshabilitado', forzamos la propiedad disabled de HTML
  const isDisabled = tipo === 'deshabilitado';

  const buttonClass = `btn-base btn-${tipo} btn-${size} ${className}`.trim();

  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      disabled={isDisabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      
      <Typography variant="body-primary" as="span" className="btn-label">
        {label}
      </Typography>
    </button>
  );
};

export default Boton;