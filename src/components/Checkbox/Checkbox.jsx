import React from 'react';
import './CheckBox.css';
import Typography from '../AreaDeTexto/Typography';

const CheckBox = ({ 
  label = 'text', 
  tipo = 'inactivo', // Opciones: 'inactivo', 'activo', 'deshabilitado'
  onClick,
  className = ''
}) => {
  
  const isActivo = tipo === 'activo';
  const isDeshabilitado = tipo === 'deshabilitado';

  // SVG del diseño
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path d="M14 2V3H13V4H12V5H11V6H10V7H9V8H8V9H7V10H5V9H4V8H3V7H2V6H1V5H0V4H1V3H2V2H3V3H4V4H5V5H7V4H8V3H9V2H10V1H11V0H12V1H13V2H14Z" fill="white"/>
    </svg>
  );

  return (
    <div 
      className={`checkbox-container checkbox-${tipo} ${className}`} 
      onClick={!isDeshabilitado ? onClick : undefined}
      role="checkbox"
      aria-checked={isActivo}
      aria-disabled={isDeshabilitado}
    >
      
      {/* Cuadrado visual del checkbox */}
      <div className="checkbox-box">
        {isActivo && <CheckIcon />}
      </div>

      {/* Label del checkbox */}
      <Typography variant="title" as="span" className="checkbox-label">
        {label}
      </Typography>

    </div>
  );
};

export default CheckBox;